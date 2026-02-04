const noBtn = document.getElementById('noBtn');

if (noBtn) {
    noBtn.addEventListener('mouseover', () => {
        const btnRect = noBtn.getBoundingClientRect();
        
        // Calculate available window space
        const maxX = window.innerWidth - btnRect.width;
        const maxY = window.innerHeight - btnRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        // Switch to fixed position to move freely relative to the viewport
        noBtn.style.position = 'fixed';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        
        // Optional: Add a z-index to ensure it stays on top if it moves over other elements
        noBtn.style.zIndex = '1000';
    });
}