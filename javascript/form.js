document.getElementById('redirectForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the input value
    var inputValue = document.getElementById('inputField').value.trim().toLowerCase();

    // Check if the input is "valentines"
    if (inputValue === 'valentines' || inputValue === 'valentine') {
        window.location.href = 'correct.html'; // Redirect to correct.html
    } else {
        window.location.href = 'wrong.html'; // Redirect to wrong.html
    }
});
