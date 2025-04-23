document.addEventListener('DOMContentLoaded', () => {
    // Add click event listeners to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.backgroundColor = '#f0f8ff';
            setTimeout(() => {
                card.style.backgroundColor = 'white';
            }, 300);
        });
    });

    // Add a simple animation to the header
    const header = document.querySelector('header');
    header.style.opacity = '0';
    header.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        header.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 100);
}); 