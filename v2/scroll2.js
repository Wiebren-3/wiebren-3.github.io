document.addEventListener('DOMContentLoaded', function() {
    // Verberg de standaard scrollbar
    document.body.style.overflow = 'hidden';

    // Laat de container scrollen op basis van muiswielbewegingen
    document.addEventListener('wheel', function(e) {
        document.querySelector('.container').scrollBy({
            top: e.deltaY,
            behavior: 'smooth'
        });

        // Voorkom standaard scroll gedrag
        e.preventDefault();
    });
});
