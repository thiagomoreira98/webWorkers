var result = document.querySelector('.result');
var myDedicatedWorker = new Worker('dedicatedWorker.js');

function onSubmit() {
    var first = document.querySelector('#number1');
    var second = document.querySelector('#number2');
    myDedicatedWorker.postMessage([first.value, second.value]);
}

myDedicatedWorker.onmessage = function (e) {
    result.textContent = e.data;
    console.log('Message received from Dedicated Worker');
};