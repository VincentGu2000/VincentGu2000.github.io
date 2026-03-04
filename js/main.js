/**
 * Junwen Gu's Personal Website
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize publication image hover effects
    initPublicationHovers();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize dropdown menus
    initDropdowns();
});

/**
 * Initialize hover effects for publication images
 */
function initPublicationHovers() {
    // IEEE TRO Paper
    window.tro_start = function() {
        const img = document.getElementById('tro_image');
        if (img) img.style.opacity = "1";
    };
    window.tro_stop = function() {
        const img = document.getElementById('tro_image');
        if (img) img.style.opacity = "0";
    };

    // USIM/U0 Paper
    window.usim_start = function() {
        const img = document.getElementById('usim_image');
        if (img) img.style.opacity = "1";
    };
    window.usim_stop = function() {
        const img = document.getElementById('usim_image');
        if (img) img.style.opacity = "0";
    };

    // CBS 2024 Paper
    window.cbs_start = function() {
        const img = document.getElementById('cbs_image');
        if (img) img.style.opacity = "1";
    };
    window.cbs_stop = function() {
        const img = document.getElementById('cbs_image');
        if (img) img.style.opacity = "0";
    };

    // IEEE TIE Paper
    window.tie_start = function() {
        const img = document.getElementById('tie_image');
        if (img) img.style.opacity = "1";
    };
    window.tie_stop = function() {
        const img = document.getElementById('tie_image');
        if (img) img.style.opacity = "0";
    };

    // ICCSS 2021 Paper
    window.iccss_start = function() {
        const img = document.getElementById('iccss_image');
        if (img) img.style.opacity = "1";
    };
    window.iccss_stop = function() {
        const img = document.getElementById('iccss_image');
        if (img) img.style.opacity = "0";
    };

    // Initialize all hover states to hidden
    const hoverImages = document.querySelectorAll('.image-hover');
    hoverImages.forEach(function(img) {
        img.style.opacity = "0";
    });
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

/**
 * Initialize dropdown menus with click-outside-to-close functionality
 */
function initDropdowns() {
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(function(dropdown) {
            if (!dropdown.contains(e.target)) {
                const menu = dropdown.querySelector('.dropdown-menu');
                if (menu) {
                    menu.style.display = 'none';
                }
            }
        });
    });

    // Toggle dropdown on click (for mobile)
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const menu = this.nextElementSibling;
                if (menu && menu.classList.contains('dropdown-menu')) {
                    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
                }
            }
        });
    });
}

/**
 * Utility function to check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Lazy load images for better performance
 */
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(function(img) {
        imageObserver.observe(img);
    });
}

// Initialize lazy loading if supported
if ('IntersectionObserver' in window) {
    document.addEventListener('DOMContentLoaded', lazyLoadImages);
}
