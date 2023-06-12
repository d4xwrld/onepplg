let stars = document.getElementById("stars");
let meteorid = document.getElementById("meteorid");
let rocket = document.getElementById("rocket");
let text = document.getElementById("text");
let button = document.getElementById("button");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  rocket.style.top = value * -0.10 + "px";
  text.style.marginBottom = value * 2.3 + "px";
  button.style.marginBottom = value * 2.3 + "px";
});



function tb5_makeArray(n) {
  this.length = n;
  return this.length;
}

tb5_messages = new tb5_makeArray(7);
tb5_messages[0] = "Welcome";
tb5_messages[1] = "To";
tb5_messages[2] = "X";
tb5_messages[3] = "PPLG";
tb5_messages[4] = "1";
tb5_messages[5] = "Welcome to";
tb5_messages[6] = "Welcome to X PPLG 1!";
tb5_rptType = "infinite";
tb5_rptNbr = 20;
tb5_speed = 30;
tb5_delay = 2000;
var tb5_counter = 2;
var tb5_currMsg = 0;
var tb5_stsmsg = "";
function tb5_shuffle(arr) {
  var k;
  for (i = 0; i < arr.length; i++) {
    k = Math.round(Math.random() * (arr.length - i - 1)) + i;
    temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
  }
  return arr;
}
tb5_arr = new tb5_makeArray(tb5_messages[tb5_currMsg].length);
tb5_sts = new tb5_makeArray(tb5_messages[tb5_currMsg].length);
for (var i = 0; i < tb5_messages[tb5_currMsg].length; i++) {
  tb5_arr[i] = i;
  tb5_sts[i] = "_";
}
tb5_arr = tb5_shuffle(tb5_arr);
function tb5_init(n) {
  var k;
  if (n == tb5_arr.length) {
    if (tb5_currMsg == tb5_messages.length - 1) {
      if (tb5_rptType == "finite" && tb5_counter == tb5_rptNbr) {
        clearTimeout(tb5_timerID);
        return;
      }
      tb5_counter++;
      tb5_currMsg = 0;
    } else {
      tb5_currMsg++;
    }
    n = 0;
    tb5_arr = new tb5_makeArray(tb5_messages[tb5_currMsg].length);
    tb5_sts = new tb5_makeArray(tb5_messages[tb5_currMsg].length);
    for (var i = 0; i < tb5_messages[tb5_currMsg].length; i++) {
      tb5_arr[i] = i;
      tb5_sts[i] = "_";
    }
    tb5_arr = tb5_shuffle(tb5_arr);
    tb5_sp = tb5_delay;
  } else {
    tb5_sp = tb5_speed;
    k = tb5_arr[n];
    tb5_sts[k] = tb5_messages[tb5_currMsg].charAt(k);
    tb5_stsmsg = "";
    for (var i = 0; i < tb5_sts.length; i++) tb5_stsmsg += tb5_sts[i];
    document.title = tb5_stsmsg;
    n++;
  }
  tb5_timerID = setTimeout("tb5_init(" + n + ")", tb5_sp);
}
function tb5_randomizetitle() {
  tb5_init(0);
}
tb5_randomizetitle();
//end
var colour = "#D5AB55";
var sparkles = 120;

/****************************
 *  Tinkerbell Magic Sparkle *
 * (c) 2005 mf2fm web-design *
 *  http://www.mf2fm.com/rv  *
 * DON'T EDIT BELOW THIS BOX *
 ****************************/
var x = ox = 400;
var y = oy = 300;
var swide = 800;
var shigh = 600;
var sleft = sdown = 0;
var tiny = new Array();
var star = new Array();
var starv = new Array();
var starx = new Array();
var stary = new Array();
var tinyx = new Array();
var tinyy = new Array();
var tinyv = new Array();

window.onload = function () {
  if (document.getElementById) {
    var i, rats, rlef, rdow;
    for (var i = 0; i < sparkles; i++) {
      var rats = createDiv(3, 3);
      rats.style.visibility = "hidden";
      document.body.appendChild(tiny[i] = rats);
      starv[i] = 0;
      tinyv[i] = 0;
      var rats = createDiv(5, 5);
      rats.style.backgroundColor = "transparent";
      rats.style.visibility = "hidden";
      var rlef = createDiv(1, 5);
      var rdow = createDiv(5, 1);
      rats.appendChild(rlef);
      rats.appendChild(rdow);
      rlef.style.top = "2px";
      rlef.style.left = "0px";
      rdow.style.top = "0px";
      rdow.style.left = "2px";
      document.body.appendChild(star[i] = rats);
    }
    set_width();
    sparkle();
  }
};

function sparkle() {
  var c;
  if (x != ox || y != oy) {
    ox = x;
    oy = y;
    for (c = 0; c < sparkles; c++)
      if (!starv[c]) {
        star[c].style.left = (starx[c] = x) + "px";
        star[c].style.top = (stary[c] = y) + "px";
        star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
        star[c].style.visibility = "visible";
        starv[c] = 50;
        break;
      }
  }
  for (c = 0; c < sparkles; c++) {
    if (starv[c]) update_star(c);
    if (tinyv[c]) update_tiny(c);
  }
  setTimeout("sparkle()", 40);
}

function update_star(i) {
  if (--starv[i] == 25) star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
  if (starv[i]) {
    stary[i] += 1 + Math.random() * 3;
    if (stary[i] < shigh + sdown) {
      star[i].style.top = stary[i] + "px";
      starx[i] += (i % 5 - 2) / 5;
      star[i].style.left = starx[i] + "px";
    } else {
      star[i].style.visibility = "hidden";
      starv[i] = 0;
      return;
    }
  } else {
    tinyv[i] = 50;
    tiny[i].style.top = (tinyy[i] = stary[i]) + "px";
    tiny[i].style.left = (tinyx[i] = starx[i]) + "px";
    tiny[i].style.width = "2px";
    tiny[i].style.height = "2px";
    star[i].style.visibility = "hidden";
    tiny[i].style.visibility = "visible";
  }
}

function update_tiny(i) {
  if (--tinyv[i] == 25) {
    tiny[i].style.width = "1px";
    tiny[i].style.height = "1px";
  }
  if (tinyv[i]) {
    tinyy[i] += 1 + Math.random() * 3;
    if (tinyy[i] < shigh + sdown) {
      tiny[i].style.top = tinyy[i] + "px";
      tinyx[i] += (i % 5 - 2) / 5;
      tiny[i].style.left = tinyx[i] + "px";
    } else {
      tiny[i].style.visibility = "hidden";
      tinyv[i] = 0;
      return;
    }
  } else tiny[i].style.visibility = "hidden";
}

document.onmousemove = mouse;
function mouse(e) {
  set_scroll();
  y = (e) ? e.pageY : event.y + sdown;
  x = (e) ? e.pageX : event.x + sleft;
}

function set_scroll() {
  if (typeof self.pageYOffset == "number") {
    sdown = self.pageYOffset;
    sleft = self.pageXOffset;
  } else if (
    document.body.scrollTop ||
    document.body.scrollLeft
  ) {
    sdown = document.body.scrollTop;
    sleft = document.body.scrollLeft;
  } else if (
    document.documentElement &&
    (document.documentElement.scrollTop ||
      document.documentElement.scrollLeft)
  ) {
    sleft = document.documentElement.scrollLeft;
    sdown = document.documentElement.scrollTop;
  } else {
    sdown = 0;
    sleft = 0;
  }
}

window.onresize = set_width;
function set_width() {
  if (typeof self.innerWidth == "number") {
    swide = self.innerWidth;
    shigh = self.innerHeight;
  } else if (
    document.documentElement &&
    document.documentElement.clientWidth
  ) {
    swide = document.documentElement.clientWidth;
    shigh = document.documentElement.clientHeight;
  } else if (document.body.clientWidth) {
    swide = document.body.clientWidth;
    shigh = document.body.clientHeight;
  }
}

function createDiv(height, width) {
  var div = document.createElement("div");
  div.style.position = "absolute";
  div.style.height = height + "px";
  div.style.width = width + "px";
  div.style.overflow = "hidden";
  div.style.backgroundColor = colour;
  return div;
}

function randomizeColor() {
  var letters = "0123456789ABCDEF";
  var newColor = "#";
  for (var i = 0; i < 6; i++) {
    newColor += letters[Math.floor(Math.random() * 16)];
  }
  colour = newColor;
}

// Bagian yang ditambahkan
var randomizeButton = document.getElementById("randomizeButton");

randomizeButton.addEventListener("click", function () {
  randomizeColor();
});

// (function () {
//   var msg = "X PPLG 1";
//   var size = 15;
//   var circleY = 0.75;
//   var circleX = 2;
//   var letter_spacing = 4;
//   var diameter = 10;
//   var rotation = 0.2;
//   var speed = 0.3;
//   var colors = [
//     "#ff0000",
//     "#00ff00",
//     "#0000ff",
//     "#ffff00",
//     "#ff00ff",
//     "#00ffff",
//   ];

//   if (
//     (!window.addEventListener && !window.attachEvent) ||
//     !document.createElement
//   )
//     return;

//   msg = msg.split("");
//   var n = msg.length - 1;
//   var a = Math.round(size * diameter * 0.208333);
//   var currStep = 20;
//   var ymouse = a * circleY + 20;
//   var xmouse = a * circleX + 20;
//   var y = [];
//   var x = [];
//   var Y = [];
//   var X = [];
//   var o = document.createElement("div");
//   var oi = document.createElement("div");
//   var b =
//     document.compatMode && document.compatMode != "BackCompat"
//       ? document.documentElement
//       : document.body;

//   var mouse = function (e) {
//     e = e || window.event;
//     ymouse = !isNaN(e.pageY) ? e.pageY : e.clientY;
//     xmouse = !isNaN(e.pageX) ? e.pageX : e.clientX;
//   };

//   var makecircle = function () {
//     if (init.nopy) {
//       o.style.top = (b || document.body).scrollTop + "px";
//       o.style.left = (b || document.body).scrollLeft + "px";
//     }
//     currStep -= rotation;
//     for (var d, i = n; i > -1; --i) {
//       d = document.getElementById("iemsg" + i).style;
//       d.top =
//         Math.round(
//           y[i] + a * Math.sin((currStep + i) / letter_spacing) * circleY - 15
//         ) + "px";
//       d.left =
//         Math.round(
//           x[i] + a * Math.cos((currStep + i) / letter_spacing) * circleX
//         ) + "px";
//     }
//   };

//   var drag = function () {
//     y[0] = Y[0] += (ymouse - Y[0]) * speed;
//     x[0] = X[0] += (xmouse - 20 - X[0]) * speed;
//     for (var i = n; i > 0; --i) {
//       y[i] = Y[i] += (y[i - 1] - Y[i]) * speed;
//       x[i] = X[i] += (x[i - 1] - X[i]) * speed;
//     }
//     makecircle();
//   };

//   var init = function () {
//     if (!isNaN(window.pageYOffset)) {
//       ymouse += window.pageYOffset;
//       xmouse += window.pageXOffset;
//     } else init.nopy = true;

//     for (var d, i = n; i > -1; --i) {
//       d = document.createElement("div");
//       d.id = "iemsg" + i;
//       d.style.height = d.style.width = a + "px";
//       d.appendChild(document.createTextNode(msg[i]));
//       oi.appendChild(d);
//       y[i] = x[i] = Y[i] = X[i] = 0;
//     }

//     o.appendChild(oi);
//     document.body.appendChild(o);
//     setInterval(drag, 25);

//     setInterval(function () {
//       var randomColor = colors[Math.floor(Math.random() * colors.length)];
//       o.style.color = randomColor;
//     }, 500);
//   };

//   var ascroll = function () {
//     ymouse += window.pageYOffset;
//     xmouse += window.pageXOffset;
//     window.removeEventListener("scroll", ascroll, false);
//   };

//   o.id = "outerCircleText";
//   o.style.fontSize = size + "px";

//   if (window.addEventListener) {
//     window.addEventListener("load", init, false);
//     document.addEventListener("mouseover", mouse, false);
//     document.addEventListener("mousemove", mouse, false);
//     if (/Apple/.test(navigator.vendor))
//       window.addEventListener("scroll", ascroll, false);
//   } else if (window.attachEvent) {
//     window.attachEvent("onload", init);
//     document.attachEvent("onmousemove", mouse);
//   }
// })();


