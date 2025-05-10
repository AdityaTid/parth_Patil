document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

    if (themeSwitcher) {
        // Load the saved theme from localStorage
        const savedTheme = localStorage.getItem('theme') || 'light';
        body.classList.add(savedTheme);

        // Set the theme switcher to the saved theme
        themeSwitcher.checked = savedTheme === 'dark';

        themeSwitcher.addEventListener('change', () => {
            if (themeSwitcher.checked) {
                body.classList.replace('light', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.replace('dark', 'light');
                localStorage.setItem('theme', 'light');
            }
        });
    } else {
        console.error('Element with ID "theme-switcher" not found.');
    }

    // Example of adding animations to elements
    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach(element => {
        element.classList.add('fade-in');
    });

    // Function to handle form submission for repairs
    const repairForm = document.getElementById('repair-form');
    if (repairForm) {
        repairForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(repairForm);
            // Process the form data (e.g., send to server)
            console.log('Repair request submitted:', Object.fromEntries(formData));
            repairForm.reset();
            alert('Your repair request has been submitted!');
        });
    }
});