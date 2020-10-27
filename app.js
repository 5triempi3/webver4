//Loadpage effects
let tween = gsap.fromTo(".hero", {opacity: 0}, {opacity: 1, duration: 8});
tween.pause(2);
tween.play();
gsap.fromTo(".hero", {height: '0%'}, {height: '90%', duration: 2});
gsap.fromTo(".title", {x: '-100%'}, {x: '-10%', duration: 5});
gsap.fromTo(".title", {opacity: 0}, {opacity: 1, duration: 10});
gsap.fromTo(".logo", {y: '-100%'}, {y: '0%', duration: 1}, "-=2");
gsap.fromTo(".nav-wrapper li", {y: '-100%'}, {y: '0%', duration: 1}, "-=2");

//Mouse cursor effect
var $ = document.querySelector.bind(document);
var $on = document.addEventListener.bind(document);

var xmouse, ymouse;
$on('mousemove', function (e) {
     xmouse = e.clientX || e.pageX;
     ymouse = e.clientY || e.pageY;
});

var ball = $('#ball');
var x = void 0,
     y = void 0,
     dx = void 0,
     dy = void 0,
     tx = 0,
     ty = 0,
     key = -1;

var followMouse = function followMouse() {
     key = requestAnimationFrame(followMouse);

     if(!x || !y) {
          x = xmouse;
          y = ymouse;
     } else {
          dx = (xmouse - x) * 0.125;
          dy = (ymouse - y) * 0.125;
          if(Math.abs(dx) + Math.abs(dy) < 0.1) {
               x = xmouse;
               y = ymouse;
          } else {
               x += dx;
               y += dy;
          }
     }
     ball.style.left = x + 'px';
     ball.style.top = y + 'px';
};
