document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isInView = (rect.top >= 0 && rect.bottom <= window.innerHeight);
            if (isInView) {
                section.classList.add('active');
                if (rect.top <= window.innerHeight / 2) {
                    section.classList.add('in-view');
                }
            }
        });
    });
});