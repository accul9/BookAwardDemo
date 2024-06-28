$(function () {
  //
  const duration = 300;

  // sidebar
  const $side = $("#side");
  const $sideButton = $side.find("button").on("click", function () {
    $side.toggleClass("open");
    if ($side.hasClass("open")) {
      $side.stop(true).animate({ right: "-70px" }, duration, "easeOutBack");
      $sideButton.find("img").attr("src", "img/close.png");
    } else {
      $side.stop(true).animate({ right: "-350px" }, duration, "easeInBack");
      $sideButton.find("img").attr("src", "img/mood.png");
    }
  });
});

//Hover spotlight
$(document).mousemove(function (e) {
  $(".spotlight").attr({
    style:
      "background:radial-gradient(250px 250px at " +
      e.clientX +
      "px " +
      e.clientY +
      "px, transparent, transparent 180px, rgba(0,0,0,0.8) 250px)",
    transition: "all 2s ease-in",
  });
});

// Focus
const deRotate = {
    transform: "none",
    bottom: "0px",
  },
  rotate1 = {
    transform: "rotate(-90deg)",
    bottom: "-204px",
  },
  rotate2 = {
    transform: "rotate(-90deg)",
    bottom: "-214px",
  };

$(function () {
  // Apply spotlight effect on button click
  $("#cat1").mouseover(function () {
    $('[id*="-cate1"]').each(function () {
      $(this).css({
        filter:
          "brightness(100%) drop-shadow(5px 5px 5px #000000) contrast(150%)",
        "z-index": "8",
      });
    });
  });
  $("#cat1").mouseout(function () {
    $('[id*="-cate1"]').each(function () {
      $(this).css({
        filter: "brightness(80%)",
        "z-index": "2",
      });
    });
  });
  // Category2
  $("#cat2").mouseover(function () {
    $('[id*="-cate2"]').each(function () {
      $(this).css({
        filter:
          "brightness(100%) drop-shadow(5px 5px 5px #000000) contrast(150%)",
        "z-index": "8",
      });
    });
    $("#book9-horizontal-cate2").css(deRotate);
  });
  $("#cat2").mouseout(function () {
    $('[id*="-cate2"]').each(function () {
      $(this).css({
        filter: "brightness(80%)",
        "z-index": "0",
      });
    });
    $("#book9-horizontal-cate2").css(rotate1);
  });
  // Category3
  $("#cat3").mouseover(function () {
    $('[id*="-cate3"]').each(function () {
      $(this).css({
        filter:
          "brightness(100%) drop-shadow(5px 5px 5px #000000) contrast(150%)",
        "z-index": "8",
      });
    });
    $("#book10-horizontal-cate3").css(deRotate);
  });
  $("#cat3").mouseout(function () {
    $('[id*="-cate3"]').each(function () {
      $(this).css({
        filter: "brightness(80%)",
        "z-index": "3",
      });
    });
    $("#book10-horizontal-cate3").css(rotate2);
  });
  // Category4
  $("#cat4").mouseover(function () {
    $('[id*="-cate4"]').each(function () {
      $(this).css({
        filter:
          "brightness(100%) drop-shadow(5px 5px 5px #000000) contrast(150%)",
        "z-index": "8",
      });
    });
  });
  $("#cat4").mouseout(function () {
    $('[id*="-cate4"]').each(function () {
      $(this).css({
        filter: "brightness(80%)",
        "z-index": "1",
      });
    });
  });
});

//Book block
const $bookPage = $(".bb-wrapper"),
  $bookBlock = $(".bblock"),
  $ambiBook = $('[id^="book"]');

$bookPage.hide();

//Open the Book
$ambiBook.on("click", function () {
  const className = $(this).attr("class");
  const $bTitle = $(".bblock").children("div");

  $bookPage.fadeIn("slow");
  // XXXXXX
  $bTitle.each(function () {
    $(this).animate({ opacity: "0" }, 500);
    $(this).hide();

    if ($(this).attr("id") == className) {
      $bookPage.fadeIn("slow");
      $(this).animate({ opacity: "1" }, 50);
      $(this).show();
    }
  });
  // return false;
});

//Close the book
$bookBlock.on("click", function () {
  $bookPage.fadeOut("slow");
});

//Book buy-button color
$(function () {
  const duration = 300;

  $(".btn")
    .on("mouseenter", function () {
      $(this)
        .find("> span")
        .stop(true)
        .animate({ width: "100%" }, duration, "easeOutQuad");
    })
    .on("mouseleave", function () {
      $(this)
        .find("> span")
        .stop(true)
        .animate({ width: "0%" }, duration, "easeOutQuad");
    });
});
