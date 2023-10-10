function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 400;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener('wheel', reveal);
window.addEventListener('scroll', reveal);

$(document).ready(function(){
  $(".draw-border").on('click', function(event) {
    console.log("clicked");
    if(navigator.userAgent.indexOf("Chrome") != -1){
      console.log("chrome");
      document.getElementById('about').scrollIntoView({behavior: "auto"});
    }else {
      document.getElementById('about').scrollIntoView({behavior: "smooth"});
    }
    document.querySelectorAll(".reveal")[0].classList.add("active");
    document.querySelectorAll(".reveal")[1].classList.add("active");
  });
});

$(document).ready(function(){
  $(".sidenav a").on('click', function(event) {
    var anchor = $(this).attr('dest');
    if(navigator.userAgent.indexOf("Chrome") != -1){
      document.getElementById(anchor).scrollIntoView({behavior: "auto"});
    } else {
      document.getElementById(anchor).scrollIntoView({behavior: "smooth"});
    }
    // 1 second delay
    setTimeout(function(){
      reveal();
    }, 600);

  });
});


function showIt2() {
  document.getElementById("glitch").style.visibility = "visible";
  document.getElementById("hello").style.visibility = "hidden";
}
setTimeout("showIt2()", 5000);