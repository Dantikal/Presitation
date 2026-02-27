(function() {
    // монументальная анимация прогресс-баров
    const bars = document.querySelectorAll('.progress-fill-luxury');
    bars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 200);
    });

    // анимация появления элементов при скролле
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.benefit-item, .testimonial-card, .premium-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    console.log('✅ StudySense презентация загружена. Аплодисменты жюри неизбежны!');
    console.log('🎯 Польза проекта: успех в учебе, карьере и личной жизни');
})();