"use strict";
// index-page
{
  // hg-menu
  $(function(){
    $(".btn-gnavi").on("click", function(){
      var rightVal = 0;
      if($(this).hasClass("open")) {
        rightVal = -300;
        $(this).removeClass("open");
      } else {
        $(this).addClass("open");
      }
  
      $("#sp-menu").stop().animate({
        right: rightVal
      }, 200);
    });
  });
}

{
  // hero Slide

  function play() {
    setTimeout(() => {
      images[currentIndex].classList.remove('current');
      coments[currentIndex].classList.remove('current');
      currentIndex++;
      if (currentIndex > images.length - 1) {
          currentIndex = 0;
      }
      if (currentIndex > coments.length - 1) {
          currentIndex = 0;
      }

      images[currentIndex].classList.add('current');
      coments[currentIndex].classList.add('current');
      play();
    }, 5000);
  }

  const images = document.querySelectorAll('.hero img');
  const coments = document.querySelectorAll (".hero p");
  let currentIndex = 0;

  play();
}

{
  // total-nav EntersectionObserver

  function callback (entries, obs) {
    entries.forEach (entry => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add ("appear");
      obs.unobserve (entry.target)
    });
  }

  const options = {
    threshold: 0,
  }

  const observer = new IntersectionObserver (callback, options);

  const targets = document.querySelectorAll (".total-navi li");

  targets.forEach (target => {
    observer.observe (target);
  });
}

{
  // gallery slider

  const swiper = new Swiper(".swiper", {
    // ページネーションが必要なら追加
    pagination: {
      el: ".swiper-pagination"
    },
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "2",
  
    coverflowEffect: {
      rotate: 50,
      stretch: 50,
      depth: 300,
      modifier: 1,
      slideShadows: true
    },
  
    // ナビボタンが必要なら追加
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
}