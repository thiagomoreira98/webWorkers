// var first = document.querySelector('#number1');
// var second = document.querySelector('#number2');
var buttonSubmit = document.querySelector('.buttonSubmit');
var result = document.querySelector('.result');

if (window.Worker) { // Check if Browser supports the Worker api.
    // Requires script name as input
    var myWorker = new Worker('Dedicatedworker.js');

    // onkeyup could be used instead of onchange if you wanted to update the answer every time
    // an entered value is changed, and you don't want to have to unfocus the field to update its .value

    // first.onchange = function () {
    //     myWorker.postMessage([first.value, second.value]); // Sending message as an array to the worker
    //     console.log('F Message posted to worker');
    // };

    // second.onchange = function () {
    //     myWorker.postMessage([first.value, second.value]);
    //     console.log('S Message posted to worker');
    // };

    function onSubmit() {
        var first = document.querySelector('#number1');
        var second = document.querySelector('#number2');
        myWorker.postMessage([first.value, second.value]);
        console.log('Message posted to worker');
    }

    myWorker.onmessage = function (e) {
        result.textContent = e.data;
        console.log('Message received from worker');
    };
}