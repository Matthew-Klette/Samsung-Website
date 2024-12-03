const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
    "#BEBEBE",
    "#C7C7C8",
    "#D0D0D2",
    "#D9DADD",
    "#E2E3E7",
    "#EBECF1",

    "#6A7A79",
    "#5D6C6C",
    "#515F5F",
    "#445152",
    "#384445",
    "#2B3638"

];

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 5 + "px";
        circle.style.top = y - 5 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.4;
        y += (nextCircle.y - y) * 0.4;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();



const swup = new Swup()


