// Contact Form Handler
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const spamCheck = document.getElementById('spam-check').value;
        
        // Simple spam check
        if (spamCheck !== '4') {
            alert('Incorrect answer to spam question. Please try again.');
            return;
        }
        
        // Show success message
        alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} within 24 hours.`);
        
        // Reset form
        contactForm.reset();
    });
}