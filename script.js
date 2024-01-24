// script.js

function moveCat() {
    // Hide the cat
    document.getElementById('cat').style.display = 'none';

    // Generate random coordinates for the new position
    const newX = Math.floor(Math.random() * (window.innerWidth - 100)); // Adjust the range as needed
    const newY = Math.floor(Math.random() * (window.innerHeight - 100)); // Adjust the range as needed

    // Set the new position
    document.getElementById('cat-container').style.left = newX + 'px';
    document.getElementById('cat-container').style.top = newY + 'px';

    // Show the cat after a delay (you can adjust the delay as needed)
    setTimeout(() => {
        document.getElementById('cat').style.display = 'block';
    }, 1000);
}
