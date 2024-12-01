(() => {
    var startTime = new Date().getTime();

    var handle = NaN;

    (function animate() {
        if (!isNaN(handle)) {
            clearTimeout(handle);
        }

        // 5 seconds
        if (new Date().getTime() - startTime > (1000 * 5)) {
            postMessage(a);
        }

        handle = setTimeout(animate, 1000);
    }());
})();