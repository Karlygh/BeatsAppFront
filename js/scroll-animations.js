document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll(".animate-fade-in, .animate-fade-slide-down, .animate-scale-fade-in, .animate-slide-in-left, .animate-slide-in-right, .animate-slide-up, .animate-scale-up");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animated");
                observer.unobserve(entry.target); // Animar solo una vez
            }
        });
    }, {
        threshold: 0.15 // Ajusta este valor según cuándo quieres que empiece la animación (0 a 1)
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});