// Check if there's a saved theme in localStorage
const savedTheme = localStorage.getItem('theme');

// Apply the saved theme if available
if (savedTheme) {
    document.body.classList.add(savedTheme);
}

// Add event listener for the button
themeswD.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');



    // Save the current theme in localStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme');
    } else {
        localStorage.setItem('theme', 'light-theme');
    }
});
