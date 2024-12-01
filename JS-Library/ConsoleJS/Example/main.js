/**
 * Created with JetBrains WebStorm.
 * User: nisheeth
 * Date: 22/01/13
 * Time: 16:51
 * To change this template use File | Settings | File Templates.
 */
var domReady = false;

function init() {

    "use strict";

    if (domReady) {
        return;
    }

    domReady = true;

    var log = document.getElementById('log'),
        connectionMode = document.getElementById('ConnectionMode'),
        debug = document.getElementById('debug'),
        name = ConsoleJS.Browser.toString(),
        currentIndex = 0,
        Commands = [
            "console.log('log test');",
            "console.info('info test');",
            "console.warn('warn test');",
            "console.debug('debug test');",
            "console.assert(1 === 1, 'assert test');",
            "console.assert(1 !== 1, 'assert test');",
            "console.dir(document.getElementById('dummy'));",
            "console.dirxml(document.getElementById('dummy'));",
            "console.time('test');",
            "console.time('test-child');",
            "console.count('test');",
            "console.count('test-child');",
            "console.count('test-child');",
            "console.count('test');",
            "console.timeEnd('test-child');",
            "console.timeEnd('test');",
            "console.trace();",
            "console.error();"
        ],
        length = Commands.length;

    setInterval(function () {
        if (currentIndex < length) {
            eval(Commands[currentIndex++]);
            eval(Commands[currentIndex++]);
        } else {
            currentIndex = 0;
        }
    }, 3000);

    window.onerror = function (msg, url, line) {
        debug.innerHTML += '<br/>Error message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + line;
        return true;
    };

    ConsoleJS.on('console', function (data) {
        var connection;
        if (ConsoleJS.Socket) {
            connection = ConsoleJS.Socket.getConnectionStatus() + ' : ' + ConsoleJS.Socket.getConnectionMode();
        }

        connectionMode.innerHTML = 'Name: ' + name + ' : ' + connection;
    });
}

ConsoleJS.ready(init);