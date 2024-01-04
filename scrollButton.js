document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById("scrollButton");

    // Расстояние, на которое будет прокручиваться страница
    var scrollDistance = 750;

    scrollButton.addEventListener("click", function() {
        var start = window.scrollY;
        var startTime = performance.now();

        function scrollStep(timestamp) {
            var currentTime = timestamp || performance.now();
            var progress = currentTime - startTime;

            window.scrollTo(0, easeInOutQuad(progress, start, scrollDistance, 500));

            if (progress < 500) {
                requestAnimationFrame(scrollStep);
            }
        }

        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(scrollStep);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById("scrollButton");
    var body = document.body;

    scrollButton.addEventListener("click", function() {
        // Переключаем класс для body
        body.classList.toggle("body-color-change");
    });
});


