"use strict";

// menu-page

{
  // to-top(ヘッダーに戻る)
  const to_top = document.getElementById ("to_top");

  to_top.addEventListener ("click", e => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

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