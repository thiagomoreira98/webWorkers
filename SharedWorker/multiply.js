var result = document.querySelector('.result');
var mySharedWorker = new SharedWorker('sharedWorker.js');

function onSubmit() {
    var first = document.querySelector('#number1');
    var second = document.querySelector('#number2');
    mySharedWorker.port.postMessage([first.value, second.value]);
}

mySharedWorker.port.onmessage = function (e) {
    result.textContent = e.data;
    console.log('Message received from Shared Worker');
};