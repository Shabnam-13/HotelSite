$(document).ready(function () {
  // Owl Carousel
  if ($("#roomSection").length > 0) {
    $('#roomSection .owl-carousel').owlCarousel({
      loop: false,
      margin: 10,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1
        }
      }
    })
  }

  //#region Fixed Navbar
  //Fixed Navbar
  $(window).scroll(function () {
    if ($(document).scrollTop() > 80) {
      $("#myNav").addClass("fixedNav");
    } else {
      $("#myNav").removeClass("fixedNav");
    }
  })

  //Side Navbar
  $(".navIcon").click(function () {
    $("#sidenav").addClass("active");
    $("#wrapper").addClass("active");
    closeSidenav()
  })

  function closeSidenav() {
    $(document).click(function (e) {
      var sidenav = $("#sidenav");
      var sidenavBtn = $(".navIcon");
      if(!sidenav.is(e.target) && sidenav.has(e.target).length==0 && !sidenavBtn.is(e.target) && sidenavBtn.has(e.target).length==0){
        $("#sidenav").removeClass("active");
        $("#wrapper").removeClass("active");
        console.log("ygyug");
      }
    })
  }
//#endregion
})

//#region Home Slider
// Home Slider
var currentSlide = 0;
const slides = document.querySelectorAll("#introSection .slideImg");
const dots = document.querySelectorAll('#introSection .dot');
const slideImgs = document.querySelectorAll("#sliderSection .slideImg");
const slideDots = document.querySelectorAll('#sliderSection .dot');

const init = (n) => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
    dots.forEach((dot) => {
      dot.classList.remove("active")
    })
  })
    slides[n].classList.add("active");
    dots[n].classList.add("active")
}
document.addEventListener("DOMContentLoaded", init(currentSlide));

const next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
  init(currentSlide)
}

if (document.getElementById("introSection").length != 0) {
  setInterval(() => {
    next()
  }, 10000);
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      init(index)
    })
  })

const initSlide = (n) => {
  slideImgs.forEach((slide) => {
    slide.classList.remove("active");
    slideDots.forEach((dot) => {
      dot.classList.remove("active")
    })
  })
  slideImgs[n].classList.add("active");
  slideDots[n].classList.add("active")
}
document.addEventListener("DOMContentLoaded", initSlide(currentSlide));

slideDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    initSlide(index)
  })
}) 
//#endregion