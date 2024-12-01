var Mixer = function(){
	"use strict";

	//Audio buffer
	this.buffer     = {};
	//source delay 
	this.delay      = [];
	//when the play will start. 
	this.when       = [];
	//where the playback will start.
	this.offset     = [];
	// the length of the portion of the asset to be played.
	this.duration   = [];

	this.audio      = {
		sources : {},
		effect : {}
	};
	this.playState   = 'stop';
	this.currentTime = undefined;
	this.events      = {};
	this.orgin       = [];
	this.pauseTime   = 0;
	this.elapsed     = 0;
	this.loadState   = '';
	this.trackNum    = 0;
	this.playCount   = 0;
	this.AudioContext = new AudioContext();
	this.init();
};


Mixer.prototype.buffer = {};
Mixer.prototype.audio = [];
Mixer.prototype.Analyser = {};

/**
 * initialization
 * @return {void}
 */
Mixer.prototype.init = function() {
	this._initAnalyser_();
	this.currentTime = 0;
};
Mixer.prototype._initAnalyser_ = function() {
	this.Analyser                   = this.AudioContext.createAnalyser();
	this.Analyser.BYTE_FREQUENCY    = 1;
	this.Analyser.BYTE_TIME_DOMAIN  = 2;
	this.Analyser.FLOAT_FREQUENCY   = 3;
	this.Analyser.FLOAT_TIME_DOMAIN = 4;
};

/**
 * add a source
 * @param {source} source
 */
Mixer.prototype.addSource = function(source, i){
	this.audio.sources[i] = {
		source : source,
		on : 0
	};
	return;
};

/**
 * delete a source
 * @param  {string} source_id 
 * @return {[type]} ·µ»Øsource
 */
Mixer.prototype.deleteSource = function(source_id){
	delete this.audio.sources[source_id];
};

/**
 * load Arraybuffer from url
 * @param  {string}   url      
 * @param  {Function} callback  Call in the load progress is complete, you can realize a batch loader based on this function
 * @return {void}            
 */
Mixer.prototype.loadAudioFromUrl = function(url, callback){
	var request = new XMLHttpRequest();
	this.request = request;
	var Mixer = this;
	request.open('GET', url, true);
	request.responseType = 'arraybuffer';
	request.onload = function() {
		if(request.status !== 200){
			Mixer.trigger('loadError', url, this);
		}else{
			callback(request.response, 'normal');
		}
	};
	request.onprogress = function(event){
		Mixer.trigger('loadProgress', event.total, event.loaded, this);
	};
	request.onabort = function(){
		Mixer.trigger('loadCancel', url, this);
		Mixer.trigger('finished');
		callback = function(){};
		console.log('cancel');
	};
	request.ontimeout = function(){
		Mixer.trigger('loadError', url, this);
	};
	request.onerror = function(){
		Mixer.trigger('loadError', url, this);
	};
	request.send();

};

/**
 * create source
 * @param  {string|bolean} which Create source from which buffer, true mean create all
 * @return {void}
 */
Mixer.prototype.createSource = function(which){
	var b = this.buffer;
	if(which && which!==true){
		b=[];
		b[which] = this.buffer[which];
	}
	for (var i in b) {
		var source = this.AudioContext.createBufferSource();
		source.buffer = b[i];
		this.addSource(source, i);
	}
};
/**
 * play all buffer
 * @return {void}
 */
Mixer.prototype.startAll = function(){
	this.playState = 'playing';
	this.currentTime = this.AudioContext.currentTime;
	this._play(true);
	this.trigger('playing');
};
/**
 * stop and clean up sources
 * @return {void}
 */
Mixer.prototype.stopAll = function(){
	this.playState = 'stop';
	this.trigger('stop');
	this.elapsed=0;
	this.Analyser.disconnect();
	this._stop(true);
};

/**
 * puase 
 * @return {void}
 */
Mixer.prototype.pauseAll = function() {
	this.playState = 'pause';
	this._stop(true);
	this.pauseTime = this.getPlaybackProgress();
	this.elapsed += (this.AudioContext.currentTime - this.currentTime);
	this.trigger('pause');
};

Mixer.prototype.startFromPause = function(which) {
	this.playState = 'playing';
	this.currentTime = this.AudioContext.currentTime;
	this._play(which, false, true);
	this.trigger('playing');
};

Mixer.prototype.playCounter = function(which) {
	if(this.playState === 'playing'){
		this.trigger('end', which);
		console.log('end: ', which);
	}
};

/**
 * Do play, this function should not participate in any actions about time counter, should not be called directly
 * @param  {string|boolean} Which one to play, true or empty means play all
 * @param  {boolean}		play from the beginning ´ÓÍ·²¥·Å
 * @return {void}
 */
Mixer.prototype._play = function(which, fromTheBeginning, fromPause) {
	// this.command = 'play';
	this.createSource(which);
	for(var k in this.audio.sources){
		var s = this.audio.sources[k];
		s.source.connect(this.Analyser);
		s.playState = 'playing';
		this.Analyser.connect(this.AudioContext.destination);
		
		this.when[k] = this.when[k]?Number(this.when[k]):0;
		this.offset[k] = this.offset[k]?this.offset[k]:0;
		this.duration[k] = this.duration[k]?this.duration[k]-this.offset[k]:this.buffer[k].duration-this.offset[k];
		
		s.source.onended = this.playCounter.bind(this, k);
		if(fromTheBeginning){
			console.log('play over again, Skip the delay',this.when[k], this.offset[k], this.duration[k]);
			s.source.start(this.when[k], this.offset[k], this.duration[k]);
		}else if(fromPause){
			
			var when = this.getPositivenumber(this.when[k]-this.getPlaybackProgress())+this.AudioContext.currentTime;
			var offset= this.offset[k]+this.getPositivenumber(this.elapsed-this.when[k]);
			var duration = this.getPositivenumber(this.duration[k]-offset);
			if(duration === 0){
				console.log('skip');
				s.playState = 'stop';
				s.source.start();
				s.source.stop();
			}else{
				console.log(when, offset, duration);
				s.source.start(when, offset, duration);
			}
		}else{
			console.log(this.when[k], this.AudioContext.currentTime);
			console.log('play '+k+' over again',this.when[k]+this.AudioContext.currentTime, this.offset[k]+this.elapsed, this.duration[k]-this.elapsed);
			s.source.start(this.when[k]+this.AudioContext.currentTime, this.offset[k]+this.elapsed, this.duration[k]-this.elapsed);
		}
	}
};
/**
 * Do stop, this function should not participate in any actions about time counter, should not be called directly
 * @param  {string|boolean} which on to stop, true or empty means stop all
 * @return {void}
 */
Mixer.prototype._stop = function(which) {
	// this.command = 'stop';
	var source = this.audio.sources;
	if(which && which!==true){
		source = [];
		source[which] = this.audio.sources[which];
	}

	for(var k in source){
		var s = source[k];
		if(s.playState === 'playing'){
			s.source.connect(this.AudioContext.destination);
			if(this.playState !== 'playing'){
				//do not trigger end event
				s.source.onended = function(){};	
			}
			s.source.stop();
		}
		delete source[k];
	}
	//clear up source
	this.audio.sources = [];
};

/**
 * Batch buffer loader, trigger 'load' in complete
 * @param  {array}   urlList  
 * @param  {Function} call in complete  
 * @return {[type]}  
 */
Mixer.prototype.loadBuffer = function(url, callback){
	console.log(url);
	var loadCount = 0;
	var errorCount = 0;
	var Mixer = this;
	Mixer.loadState = 'loading';
	Mixer.trigger('loading');
	var buffer_id;
	var current_buffer_id;
	// console.log('+++', buffer_ids);
	/**
	 * use for count loading progress, create and save buffer, trigger 'load' in complete.
	 * @param  {buffer} buffer use for play source
	 * @return {void}
	 */
	var createrCallback = function(buffer){
		Mixer.trigger('load');
		if(buffer){
			buffer_id = Mixer.addBuffer(buffer, current_buffer_id);
		}else{
			Mixer.trigger('loadError');
		}
		Mixer.loadState = 'finished';
		if(buffer && callback){
			callback(buffer_id, true);
		}else if(callback){
			callback(null, false);
		}
	};
	/**
	 * create buffer
	 * @param  {ArrayBuffer} Arraybuffer return by XMLHttpRequest, update counter when complete
	 * @return {[type]}           [description]
	 */
	var creater = function(AudioData, status){
		if(status === 'normal' && AudioData){
			Mixer.createBuffer(AudioData, createrCallback);
		}else{
			createrCallback.call(false);
		}
	};

	current_buffer_id = url.buffer_id || undefined;
	this.loadAudioFromUrl(url.src, creater);
};
/**
 * add buffer
 * @param {string} buffer buffer_id
 */
Mixer.prototype.addBuffer = function(buffer, uuid) {
	uuid = uuid || this.uuid();
	this.buffer[uuid] = buffer;
	return uuid;
};

Mixer.prototype.removeBuffer = function(buffer_id) {
	delete this.buffer[buffer_id];
};

/**
 * create source.buffer
 * @param  {ArrayBuffer} 
 * @return {void} 
 */
Mixer.prototype.createBuffer = function(AudioData, callback) {
	this.AudioContext.decodeAudioData(AudioData, callback);
};

/**
 * get wave info
 * @param  {int} type
 * @param  {int} rate
 * @return {byteArray || floatArray }
 */
Mixer.prototype.getAnalyser = function(type, rate){
	if(rate === undefined){
		rate = this.AudioContext.sampleRate;
	}
	var length = this.Analyser.frequencyBinCount*rate/this.AudioContext.sampleRate|0;
	var output;
	switch (type){
		case this.Analyser.BYTE_FREQUENCY:
			output = new Uint8Array(length);
			this.Analyser.getByteFrequencyData(output);
			break;
		case this.Analyser.BYTE_TIME_DOMAIN:
			output = new Uint8Array(length);
			this.Analyser.getByteTimeDomainData(output);
			break;
		case this.Analyser.FLOAT_FREQUENCY:
			output = new Float32Array(length);
			this.Analyser.getFloatFrequencyData(output);
			break;
		case this.Analyser.FLOAT_TIME_DOMAIN:
			output = new Float32Array(length);
			this.Analyser.getFloatTimeDomainData(output);
			break;
		default:
			output = new Uint8Array(length);
			this.Analyser.getByteFrequencyData(output);
			break;	
	}
	return output;
};

/**
 * get PCM data
 * @param  {string} buffer_id
 * @return {Float32Array}
 */
Mixer.prototype.getChannelData = function(buffer_id) {
	var data = [];
	var buffer = this.buffer[buffer_id];
	for (var i = 0; i < buffer.numberOfChannels; i++) {
		data.push(buffer.getChannelData(i));
	}
	return data;
};

/**
 * Gets the total playing time
 * @return {Float}
 */
Mixer.prototype.getPlaybackProgress = function() {
	if(this.playState !== 'playing'){
		return this.elapsed;
	}
	return this.AudioContext.currentTime-this.currentTime+this.elapsed;
};

Mixer.prototype.setPlaybackProgress = function(s) {
	if(this.playState === 'playing'){
		console.info('tracks is playing, please call \'stop\' before set playback progress');
		return;
	}
	this.elapsed = s;
};

/**
 * get druation
 * @param  {string} buffer id
 * @return {int}
 */
Mixer.prototype.getDuration = function(buffer_id) {
	var buffer = this.buffer[buffer_id];
	return buffer?buffer.duration:0;
};

/**
 * register event callback
 * @param  {string}   event name
 * @param  {Function} callback
 * @return {void}
 */
Mixer.prototype.on = function(event, callback) {
	if(!this.events[event]){
		this.events[event] = [];
	}
	this.events[event].push(callback);
	return this;
};

/**
 * trigger
 * @return {string}
 */
Mixer.prototype.trigger = function() {
	var args = Array.prototype.slice.call(arguments);
	var eventName = args.shift();
	console.info('Mixer: '+eventName);
	if(!this.events[eventName]){
		this.events[eventName] = [];
	}
	var e = this.events[eventName];
	for (var i = 0; i < e.length; i++) {
		var f = e[i];
		f.apply(this, args);
	}
	return this;
};

Mixer.prototype.unbind = function(eventName, callback){
	if(this.events[eventName]){
		for(var i in this.events[eventName]){
			if(callback !== undefined){
				if(this.events[eventName][i] === callback){
					this.events[eventName].splice(i,1);
					console.log('unbind callback', this.events[eventName]);
				}else{
					console.log('tring to unbind '+eventName+' callback, but not callback found');
				}
			}else{
				delete this.events[eventName];
			}
		}
	}
};

/**
 * play buffer
 * @param  {string} buffer_id
 * @return {void} 
 */
Mixer.prototype.playOne = function(buffer_id) {
	
};

/**
 * save sa wav file
 * @return {void} 
 */
Mixer.prototype.saveAsFile = function() {
	
};

Mixer.prototype.uuid = function(len, radix) {
	var CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
			.split("");
	var chars = CHARS, uuid = [], i;
		radix = radix || chars.length;
		if (len) {
			for (i = 0; i < len; i++)
				uuid[i] = chars[0 | Math.random() * radix];
		} else {
			var r;
			uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
			uuid[14] = "4";
			for (i = 0; i < 36; i++) {
				if (!uuid[i]) {
					r = 0 | Math.random() * 16;
					uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
				}
			}
		}
		return uuid.join("");
};

Mixer.prototype.getString = function() {
	var p = {};
	for(var i in this.buffer){
		p[i] = {
			src : 0,
			when : this.when[i] || 0,
			offset : this.offset[i] || 0,
			duration : this.duration[i] || 0,
			channelNum : this.buffer[i].numberOfChannels
		};
	}
	return p;
};

/**
 * clear all data for load a draft or other operation.
 */
Mixer.prototype.Refresh = function() {
	this._stop(true);
	//Audio buffer
	this.buffer = {};
	this.buffer_ids = [];
	//source delay 
	this.delay = [];
	//when the play will start. 
	this.when=[];
	//where the playback will start.
	this.offset=[];
	// the length of the portion of the asset to be played.
	this.duration=[];

	this.audio = {
		sources : [],
		effect : {}
	};
	this.init();
	this.playState = undefined;
	this.currentTime = 0;
	// this.events = {};
	this.orgin = [];
	this.pauseTime = 0;
	this.elapsed=0;
	this.loadState = '';
	this.trackNum=0;
	// this.AudioContext =  new AudioContext();
	// this.Analyser = this.AudioContext.createAnalyser();
};

Mixer.prototype.getPositivenumber = function(num){
	if(num<0){
		return 0;
	}else{
		return num;
	}
};