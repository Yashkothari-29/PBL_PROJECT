// Functionality for filtering and searching services

document.addEventListener('DOMContentLoaded', function() {
    const categoryFilter = document.getElementById('category-filter');
    const searchBar = document.getElementById('search-bar');
    const serviceCards = document.querySelectorAll('.service-card');

    // Filter services by category
    categoryFilter.addEventListener('change', function() {
        const selectedCategory = this.value;

        serviceCards.forEach(card => {
            if (selectedCategory === 'all' || card.dataset.category === selectedCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Search services by name
    searchBar.addEventListener('input', function() {
        const searchQuery = this.value.toLowerCase();

        serviceCards.forEach(card => {
            const serviceName = card.querySelector('h3').textContent.toLowerCase();
            if (serviceName.includes(searchQuery)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
