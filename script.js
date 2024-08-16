
    document.querySelectorAll('.more-btn').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.project-card');
            card.classList.add('active');
        });
    });

    document.querySelectorAll('.close-btn').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.project-card');
            card.classList.remove('active');
        });
    });

