var result = document.querySelector('.result');
var mySharedWorker = new SharedWorker('sharedWorker.js');

function onSubmit() {
    var number = document.querySelector('#number');
    mySharedWorker.port.postMessage([number.value, number.value]);
}

mySharedWorker.port.onmessage = function (e) {
    result.textContent = e.data;
    console.log('Message received from Shared Worker');
};
