
document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const content = trigger.nextElementSibling;
        const isOpen = !content.classList.contains('is-hidden');
        document.querySelectorAll('.accordion-content').forEach(c => c.classList.add('is-hidden'));
        if (!isOpen) content.classList.remove('is-hidden');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-target]').forEach(card => {
        card.addEventListener('click', () => {
            const targetId = card.getAttribute('data-target');
            const modal = document.getElementById(targetId);
            if (modal) modal.classList.add('is-active');
        });
    });

    document.querySelectorAll('.modal').forEach(modal => {
        const closeBtn = modal.querySelector('.delete');
        const background = modal.querySelector('.modal-background');
        if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('is-active'));
        if (background) background.addEventListener('click', () => modal.classList.remove('is-active'));
    });
});

const cards = document.querySelectorAll('.passion-card');
let current = 0;

function showCard(index) {
    cards.forEach(c => c.hidden = true);
    cards[index].hidden = false;
}

document.querySelectorAll('#prev-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        current = (current - 1 + cards.length) % cards.length;
        showCard(current);
    });
});

document.querySelectorAll('#next-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        current = (current + 1) % cards.length;
        showCard(current);
    });
});

const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));