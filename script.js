//car 1 carousel

let myIndex_One = 0;
carousel_One();

function carousel_One() {
  let i_One;
  let x_One = document.getElementsByClassName("about_img_1");
  for (i_One = 0; i_One < x_One.length; i_One++) {
    x_One[i_One].style.display = "none";
  }
  myIndex_One++;
  if (myIndex_One > x_One.length) {
    myIndex_One = 1
  }
  x_One[myIndex_One - 1].style.display = "block";
  setTimeout(carousel_One, 3000)

}


//hide and show button miles 1
$(function() {
  $("#visible_1").click(function() {
    $('#invisible_1').toggleClass('show_1');
  });
});
//hide and show button price 1
$(function() {
  $("#visible_price_1").click(function() {
    $('#invisible_price_1').toggleClass('show_price_1');
  });
});

//car 2 carousel

let myIndex_Two = 0;
carousel_Two();

function carousel_Two() {
  let i_Two
  let x_Two = document.getElementsByClassName("about_img_2");
  for (i_Two = 0; i_Two < x_Two.length; i_Two++) {
    x_Two[i_Two].style.display = "none";
  }
  myIndex_Two++;
  if (myIndex_Two > x_Two.length) {
    myIndex_Two = 1
  }
  x_Two[myIndex_Two - 1].style.display = "block";
  setTimeout(carousel_Two, 3000)
}

//hide and show button miles 2
$(function() {
  $("#visible_2").click(function() {
    $('#invisible_2').toggleClass('show_2');
  });
});
//hide and show button price 2
$(function() {
  $("#visible_price_2").click(function() {
    $('#invisible_price_2').toggleClass('show_price_2');
  });
});


//car 3 carousel

let myIndex_Three = 0;
carousel_Three();

function carousel_Three() {
  let i_Three
  let x_Three = document.getElementsByClassName("about_img_3");
  for (i_Three = 0; i_Three < x_Three.length; i_Three++) {
    x_Three[i_Three].style.display = "none";
  }
  myIndex_Three++;
  if (myIndex_Three > x_Three.length) {
    myIndex_Three = 1
  }
  x_Three[myIndex_Three - 1].style.display = "block";
  setTimeout(carousel_Three, 3000)
}

//hide and show button miles 3
$(function() {
  $("#visible_3").click(function() {
    $('#invisible_3').toggleClass('show_3');
  });
});
//hide and show button price 3
$(function() {
  $("#visible_price_3").click(function() {
    $('#invisible_price_3').toggleClass('show_price_3');
  });
});


//car 4 carousel

let myIndex_Four = 0;
carousel_Four();

function carousel_Four() {
  let i_Four
  let x_Four = document.getElementsByClassName("about_img_4");
  for (i_Four = 0; i_Four < x_Four.length; i_Four++) {
    x_Four[i_Four].style.display = "none";
  }
  myIndex_Four++;
  if (myIndex_Four > x_Four.length) {
    myIndex_Four = 1
  }
  x_Four[myIndex_Four - 1].style.display = "block";
  setTimeout(carousel_Four, 3000)
}

//hide and show button miles 4
$(function() {
  $("#visible_4").click(function() {
    $('#invisible_4').toggleClass('show_4');
  });
});
//hide and show button price 4
$(function() {
  $("#visible_price_4").click(function() {
    $('#invisible_price_4').toggleClass('show_price_4');
  });
});

//car 5 carousel

let myIndex_Five = 0;
carousel_Five();

function carousel_Five() {
  let i_Five
  let x_Five = document.getElementsByClassName("about_img_5");
  for (i_Five = 0; i_Five < x_Five.length; i_Five++) {
    x_Five[i_Five].style.display = "none";
  }
  myIndex_Five++;
  if (myIndex_Five > x_Five.length) {
    myIndex_Five = 1
  }
  x_Five[myIndex_Five - 1].style.display = "block";
  setTimeout(carousel_Five, 3000)
}

//hide and show button miles 5
$(function() {
  $("#visible_5").click(function() {
    $('#invisible_5').toggleClass('show_5');
  });
});
//hide and show button price 5
$(function() {
  $("#visible_price_5").click(function() {
    $('#invisible_price_5').toggleClass('show_price_5');
  });
});
