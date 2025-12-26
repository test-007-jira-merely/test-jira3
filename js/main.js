document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            document.body.classList.toggle('nav-open');
        });
    }

    // Optional: Close nav when a link is clicked.
    // This is useful for single-page sites with section links.
    const nav = document.querySelector('.nav');
    if (nav) {
        nav.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav__link')) {
                document.body.classList.remove('nav-open');
            }
        });
    }
});
