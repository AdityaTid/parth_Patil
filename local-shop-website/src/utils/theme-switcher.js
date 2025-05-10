function toggleTheme() {
    const currentTheme = document.body.dataset.theme;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.dataset.theme = newTheme;

    const themeStylesheet = document.getElementById('theme-stylesheet');
    themeStylesheet.href = newTheme === 'dark' ? 'assets/css/dark-theme.css' : 'assets/css/light-theme.css';
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.dataset.theme = savedTheme;

    const themeStylesheet = document.getElementById('theme-stylesheet');
    themeStylesheet.href = savedTheme === 'dark' ? 'assets/css/dark-theme.css' : 'assets/css/light-theme.css';
}

document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();

    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            toggleTheme();
            localStorage.setItem('theme', document.body.dataset.theme);
        });
    }
});