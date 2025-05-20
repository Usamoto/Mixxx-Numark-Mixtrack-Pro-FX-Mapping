document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    const redPill = document.querySelector('.pill.red');
    const bluePill = document.querySelector('.pill.blue');

    redPill.addEventListener('click', () => {
        body.classList.remove('acid-dark');
        body.classList.add('light-mode');
        applyLightMode();
    });

    bluePill.addEventListener('click', () => {
        body.classList.remove('light-mode');
        body.classList.add('acid-dark');
        applyAcidDarkMode();
    });

    function applyLightMode() {
        // Optional: navigate or change styles
        document.getElementById('matrixCanvas').style.display = 'none';
        document.body.style.backgroundColor = '#f8f8f8';
        document.body.style.color = '#222';
    }

    function applyAcidDarkMode() {
        document.getElementById('matrixCanvas').style.display = 'none';
        document.body.style.backgroundColor = '#0a0a0a';
        document.body.style.color = '#CCFF00';
        document.body.style.backgroundImage = "url('../assets/acid-smiley.png')";
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundSize = 'contain';
    }
});
