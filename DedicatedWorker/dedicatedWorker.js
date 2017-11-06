onmessage = function (e) {
    console.log('Message received from main');
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    postMessage(workerResult);
}
