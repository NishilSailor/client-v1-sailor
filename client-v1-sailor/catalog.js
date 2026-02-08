// Category Filter
const filterSelect = document.getElementById('category-filter');
const bookCards = document.querySelectorAll('.book-card');

if (filterSelect) {
    filterSelect.addEventListener('change', (e) => {
        const selectedCategory = e.target.value;
        
        bookCards.forEach(card => {
            if (selectedCategory === 'all' || card.dataset.category === selectedCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Order Button Handler
document.querySelectorAll('.btn-secondary').forEach(button => {
    button.addEventListener('click', function() {
        const bookTitle = this.parentElement.querySelector('h3').textContent;
        const author = this.parentElement.querySelector('.author').textContent;
        alert(`"${bookTitle}" by ${author} has been added to your order request!\n\nWe'll contact you within 5-7 business days.`);
    });
});