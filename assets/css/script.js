document.addEventListener ('DOMContentLoaded', function () {
   // const sideNav = document.querySelector('.sidenav');
   // M.Sidenav.init(sideNav, {});
   // slider
   const slider = document.querySelector('.slider');
   M.Slider.init(slider, {
      height:550,
      transition:500,
      interval:6000
   })
   const nav = document.querySelector ('.navbar-fixed');
      var elems = document.querySelectorAll ('.carousel');
      var instances = M.Carousel.init (elems, {
         fullWidth: true,
         indicators: true
      });

});