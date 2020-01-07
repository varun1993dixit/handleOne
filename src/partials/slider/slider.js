import {tns} from '../../../node_modules/tiny-slider/src/tiny-slider.js';
Array.from(document.getElementsByClassName("slider")).forEach(
    function(element, index, array) {
if(!element.parentElement.classList.contains('slider-wrap--game') && !element.parentElement.classList.contains('slider-wrap--updates')){
  var slider = tns({
    "container":element,
    "items": 1,
    "mouseDrag": true,
    "slideBy": "page",
    "swipeAngle": false,
    "speed": 400,
    "nav":false,
    "autoHeight":false,
    "autoWidth":true,
    responsive: {
        768: {
          items: 3
        },
        1300: {
            items: 4
        }
      }
  });
}
else if(element.parentElement.classList.contains('slider-wrap--updates')){
  var slider = tns({
    "container":element,
    "items": 1,
    "mouseDrag": true,
    "slideBy": "page",
    "swipeAngle": false,
    "speed": 400,
    "nav":false,
    "autoHeight":false,
    "autoWidth":true,
    responsive: {
        768: {
          items: 2
        },
        992: {
            items: 3
        }
      }
  });
}
else{
  var slider = tns({
    "container":element,
    "items": 1,
    "mouseDrag": true,
    "slideBy": "page",
    "swipeAngle": false,
    "speed": 400,
    "nav":false,
    "autoHeight":false,
    "autoWidth":true,
    responsive: {
        768: {
          items: 2
        },
        992:{
          items:3
        },
        1300: {
            items: 4
        }
      }
  });
}
}
);
Array.from(document.getElementsByClassName("banner-slider")).forEach(
  function(element, index, array) {
var slider = tns({
  "container":element,
  "items": 1,
  "mouseDrag": true,
  "slideBy": "page",
  "swipeAngle": false,
  "speed": 400,
  "nav":false,
  "autoHeight":true,
});
}
);
Array.from(document.getElementsByClassName("template-slider")).forEach(
  function(element, index, array) {
var slider = tns({
  "container":element,
  "items": 1,
  "mouseDrag": true,
  "slideBy": "page",
  "swipeAngle": false,
  "speed": 400,
  "nav":false,
  "autoHeight":false,
  responsive: {
    768: {
      items: 2
    },
    992:{
      items:3
    },
    1400: {
        items: 4
    }
  }
});
}
);

Array.from(document.getElementsByClassName("teaser-slider")).forEach(
  function(element, index, array) {
var slider = tns({
  "container":element,
  "items": 1,
  "mouseDrag": true,
  "slideBy": "page",
  "swipeAngle": false,
  "speed": 400,
  "nav":false,
  "autoHeight":false,
  "disable":true,
  "autoWidth":true,
  responsive: {
    992:{
      items:3,
      disable:false
    },
    1300: {
        items: 4,
        disable:false
    },
  }
});
}
);


