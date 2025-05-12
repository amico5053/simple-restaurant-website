document.addEventListener('DOMContentLoaded', function() 
{
    // Store original display properties
    const filters = document.querySelectorAll('.filter');
    filters.forEach(filter => {
        filter.dataset.originalDisplay = getComputedStyle(filter).display;
    });

    // Animation functions
    function animateElement(element, show, duration) {
        if (show) {
            element.style.display = element.dataset.originalDisplay;
            element.animate([
                { opacity: 0, transform: 'translateY(20px)' },
                { opacity: 1, transform: 'translateY(0)' }
            ], { duration: duration, easing: 'ease-out' });
        } else {
            const animation = element.animate([
                { opacity: 1, transform: 'translateY(0)' },
                { opacity: 0, transform: 'translateY(-20px)' }
            ], { duration: duration, easing: 'ease-in' });
            
            animation.onfinish = () => {
                element.style.display = 'none';
            };
        }
    }

    // Filter button click handler
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.dataset.filter;
            
            // Update active class
            document.querySelectorAll('.filter-button').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');

            // Filter logic
            filters.forEach(filter => {
                if (filterValue === 'all') {
                    animateElement(filter, true, 1000);
                } else {
                    if (filter.classList.contains(filterValue)) {
                        animateElement(filter, true, 3000);
                    } else {
                        animateElement(filter, false, 3000);
                    }
                }
            });
        });
    });
});