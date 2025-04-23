document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeText');
    const card = document.querySelector('.card');
    
    button.addEventListener('click', () => {
        const messages = [
            "You clicked the button!",
            "Docker is awesome!",
            "Flask makes web development easy!",
            "This is running in a container!",
            "Try clicking again!"
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        card.querySelector('p').textContent = randomMessage;
    });
}); 