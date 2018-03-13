// require('intersection-observer')

var options = {
  lazyParentClass: '.lazy-load--item',
  lazyItemClass: 'img'
};

var lazyLoadParents = document.querySelectorAll(options.lazyParentClass);

var lazyLoad = new IntersectionObserver(function (entries) {
  entries.map(function (entry) {
    // check if observed entry is intersecting
    if (!entry.isIntersecting) return false;

    // target = intersected element
    var img = entry.target.querySelector(options.lazyItemClass);

    if (img) {
      if (img.dataset.srcset) {
        // move data-srcset to srcset
        img.srcset = img.dataset.srcset;
        img.removeAttribute('data-srcset');
      }
      if (img.dataset.src) {
        // move data-src to src
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      }
      // wait for image to load and addClass to fade in
      img.onload = function () {
        return img.classList.add('loaded');
      };
    }
  });
});

lazyLoadParents.forEach(function (item) {
  // add items to IntersectionObserver
  lazyLoad.observe(item);
});

// Hamburger 
$(document).ready(function(){
  $('.hamburger-shell').click(function(){
    $('#menu').slideToggle(300);
    $('.top').toggleClass('rotate');
    $('.middle').toggleClass('rotate-back');
    $('.menu-name').toggleClass('bump');
    $('.bg-cover').toggleClass('reveal');
  });
  $('.bg-cover').click(function(){
    $('#menu').slideToggle(300);
    $('.top').toggleClass('rotate');
    $('.middle').toggleClass('rotate-back');
    $('.menu-name').toggleClass('bump');
    $('.bg-cover').toggleClass('reveal');
  })
});
