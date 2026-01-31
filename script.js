// Copy email to clipboard
function copyEmail() {
    const email = 'hanasarof2014@gmail.com';
    
    // Copy to clipboard
    navigator.clipboard.writeText(email).then(function() {
        // Show checkmark icon
        const copyIcon = document.getElementById('copyIcon');
        const checkIcon = document.getElementById('checkIcon');
        
        copyIcon.style.display = 'none';
        checkIcon.style.display = 'block';
        
        // Reset icons after 2 seconds
        setTimeout(function() {
            copyIcon.style.display = 'block';
            checkIcon.style.display = 'none';
        }, 2000);
    }).catch(function(err) {
        console.error('Failed to copy email: ', err);
        // Fallback for older browsers
        const tempInput = document.createElement('input');
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        
        // Show checkmark
        const copyIcon = document.getElementById('copyIcon');
        const checkIcon = document.getElementById('checkIcon');
        
        copyIcon.style.display = 'none';
        checkIcon.style.display = 'block';
        
        setTimeout(function() {
            copyIcon.style.display = 'block';
            checkIcon.style.display = 'none';
        }, 2000);
    });
}

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
