
    // Set the target date for the countdown
    var targetDate = new Date('2025-12-31').getTime();

    // Update the countdown every second
    var countdownInterval = setInterval(function() {
    // Get the current date and time
    var currentDate = new Date().getTime();

    // Calculate the time remaining
    var timeRemaining = targetDate - currentDate;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the HTML with the new values
    document.getElementById('counter1').innerHTML = `
        <div class="number">${days}</div>
        <div class="text">Days</div>`;
    document.getElementById('counter2').innerHTML = `
        <div class="number">${hours}</div>
        <div class="text">Hours</div>`;
    document.getElementById('counter3').innerHTML = `
        <div class="number">${minutes}</div>
        <div class="text">Minutes</div>`;
    document.getElementById('counter4').innerHTML = `
        <div class="number">${seconds}</div>
        <div class="text">Seconds</div>`;

    // If the countdown is over, clear the interval
    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        // Optionally, you can display a message or take some action when the countdown is over
    }
});