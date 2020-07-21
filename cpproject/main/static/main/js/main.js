// Stopwatch

var timer = document.getElementById('timer');
var start = document.getElementById('start');
var pause = document.getElementById('pause');
var reset_timer = document.getElementById('reset_timer');
var watch = new stopwatch(timer);

start.addEventListener('click', function() {
    watch.start();
});

pause.addEventListener('click', function() {
    watch.stop();
});

reset_timer.addEventListener('click', function() {
    watch.reset();
});


// Counter

var set_button = document.getElementById('set');
var input = document.getElementById('number');
var increment = document.getElementById('increment');
var reset_count = document.getElementById('reset_count');
var decrement = document.getElementById('decrement');
var count = document.getElementById('counter');
var total = new counter(count);

set_button.addEventListener('click', function() {
    total.set(input.value);
});

reset_count.addEventListener('click', function() {
    total.reset();
});

increment.addEventListener('click', function() {
    total.increase();
});

decrement.addEventListener('click', function() {
    total.decrease();
});
