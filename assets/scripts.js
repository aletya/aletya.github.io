// Typewriter created by Tameem Safi.
// source: https://github.com/tameemsafi/typewriterjs

var typewriter = document.getElementById('typewritter');

var typewriter = new Typewriter(typewriter, {
    loop: true,
    delay:50,
    deleteSpeed:5
});

typewriter.typeString('Hi there!')
    .pauseFor(500)
    .typeString(' I\'m Alex, a rising junior studying Computer Science at the University of Illinois Urbana-Champaign.')
    .pauseFor(1000)
    .typeString("<br><br>I'm highly interested in infrastructure, distributed systems, database design, and algorithm design. (Frontend is the bane of my existence)")
    .pauseFor(1000)
    .typeString("<br><br>Thanks for stopping by!")
    .pauseFor(1000000)
    .deleteAll(2)
    .start();

window.onscroll = function() {
    if (window.scrollY > 660) {
        document.getElementById("navbar").style.top = "0px";
    } else 
        document.getElementById("navbar").style.top = "-70px";
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth' // Smooth scroll behavior
        });
      }
    });
});