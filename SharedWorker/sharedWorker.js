onconnect = function (e) {
    var port = e.ports[0];

    port.onmessage = function (e) {
        console.log('Message received from square.js');
        var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
        port.postMessage(workerResult);
    }

}