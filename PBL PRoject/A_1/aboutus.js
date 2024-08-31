// Placeholder for future interactive features

document.addEventListener('DOMContentLoaded', function() {
    // Example: Add interactivity to the team section
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(member => {
        member.addEventListener('click', function() {
            alert(`You clicked on ${this.querySelector('h4').textContent}`);
        });
    });

    // Example: Smooth scroll to sections if needed
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
