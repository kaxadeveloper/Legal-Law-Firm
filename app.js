// 1. Box Click Feedback: highlight active box
const boxes = document.querySelectorAll('.box:not(.dark-box)');

boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        boxes.forEach(b => b.classList.remove('active'));
        box.classList.add('active');
    });

    // 2. Dynamic Title on Hover
    const heading = box.querySelector('h2');
    const originalText = heading.textContent;
    box.addEventListener('mouseenter', () => {
        heading.textContent = 'Learn More';
    });
    box.addEventListener('mouseleave', () => {
        heading.textContent = originalText;
    });
});

// 3. Keyboard Navigation (Arrow Down / Up)
let currentIndex = 0;
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        boxes[currentIndex].classList.remove('highlight');
        if (e.key === 'ArrowDown') {
            currentIndex = (currentIndex + 1) % boxes.length;
        } else {
            currentIndex = (currentIndex - 1 + boxes.length) % boxes.length;
        }
        boxes[currentIndex].classList.add('highlight');
        boxes[currentIndex].scrollIntoView({ behavior: "smooth", block: "center" });
    }
});

// 4. Scroll to top when clicking the logo
document.querySelector('.logo')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
