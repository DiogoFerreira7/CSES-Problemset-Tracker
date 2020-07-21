function stopwatch(elem) {
    var time = 0;
    var interval;
    var offset;

    function update() {
        time += delta();
        var formatted_time = timeFormat(time);
        elem.textContent = formatted_time;
    }

    function delta() {
        var now = Date.now();
        var passed = now - offset;
        offset = now;
        return passed;
    }

    function timeFormat(timeInMilliSeconds) {
        var time = new Date(timeInMilliSeconds);
        var hours = (time.getHours()-1).toString();
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();

        if (hours.length < 2) {
            hours = '0' + hours;
        }

        if (minutes.length < 2) {
            minutes = '0' + minutes;
        }

        if (seconds.length < 2) {
            seconds = '0' + seconds;
        }

        return hours + " : " + minutes + " : " + seconds;
    }

    this.isOn = false;
    this.start = function() {
        if (!this.isOn) {
            interval = setInterval(update, 1000);
            offset = Date.now();
            this.isOn = true;
        }
    };

    this.stop = function() {
        if (this.isOn) {
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    };

    this.reset = function() {
        time = 0;
        var formatted_time = timeFormat(time);
        elem.textContent = formatted_time;
    };
    
    this.set = function(time_stamp) {
        var valid = (new Date(time_stamp)).getTime() > 0;
        console.log(valid);
        if (valid) {
            timeFormat(time_stamp);
        }
    };
}

function counter(count) {
    this.increase = function() {
        if (count.textContent < 150) {
            count.textContent++;
        }
    };

    this.decrease = function() {
        if (count.textContent > 0) {
            count.textContent--;
        }
    };
    
    this.reset = function() {
        count.textContent = 0;
    };

    this.set = function(input) {
        if (input && input <= 150 && input >= 0) {
            count.textContent = input;
        }
    };
}



