// Initialize Lucide icons
lucide.createIcons();

// Copy command functionality
function copyCommand() {
    const command = `wget -O zenskin.deb https://github.com/bhuvanesh-m-dev/zenskin/releases/download/zenskin-v1.deb/zenskin-v1.deb && sudo dpkg -i zenskin.deb || (sudo apt --fix-broken install -y && sudo dpkg -i zenskin.deb) && zenskin`;

    navigator.clipboard.writeText(command).then(() => {
        const copyText = document.getElementById('copy-text');
        const originalText = copyText.textContent;
        copyText.textContent = 'Copied!';
        setTimeout(() => {
            copyText.textContent = originalText;
        }, 2000);
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.glass-panel').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
});

// Author Card Responsive Layout Logic
(function () {
    function adjustLayout() {
        const card = document.getElementById('authorCard');
        const content = document.getElementById('authorContent');
        const links = document.getElementById('socialLinks');

        if (!card || !content || !links) return;

        if (window.innerWidth >= 768) { // Desktop (md breakpoint)
            card.style.flexDirection = 'row';
            content.style.textAlign = 'left';
            links.style.justifyContent = 'flex-start';
        } else { // Mobile
            card.style.flexDirection = 'column';
            content.style.textAlign = 'center';
            links.style.justifyContent = 'center';
        }
    }

    window.addEventListener('resize', adjustLayout);
    // Initial call to set layout on load
    adjustLayout();
})();
