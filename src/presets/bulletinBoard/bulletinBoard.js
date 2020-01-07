var addTopPos=0;
var topPos = 100;
document.getElementsByClassName('bulletin-board__down')[0].onclick=()=>{
    document.getElementsByClassName('bulletin-board__up')[0].style.display='flex'; 
var clientHeight=document.getElementsByClassName('bulletin-board__content')[0].clientHeight;
var scrollHeight=document.getElementsByClassName('bulletin-board__content')[0].scrollHeight;
console.log(clientHeight,scrollHeight);
if(clientHeight + addTopPos  <  scrollHeight){
    addTopPos=addTopPos+topPos;
    scrollTo(document.getElementsByClassName('bulletin-board__content')[0], addTopPos-30, 600);
}

};
document.getElementsByClassName('bulletin-board__up')[0].onclick=()=>{
    var clientHeight=document.getElementsByClassName('bulletin-board__content')[0].clientHeight;
var scrollHeight=document.getElementsByClassName('bulletin-board__content')[0].scrollHeight;
    if(clientHeight+addTopPos>scrollHeight)
{
    addTopPos=addTopPos-topPos;
   
    scrollTo(document.getElementsByClassName('bulletin-board__content')[0], addTopPos-30, 600);
    }
    else{
        addTopPos= 0;
  document.getElementsByClassName('bulletin-board__up')[0].style.display='none'; 
  scrollTo(document.getElementsByClassName('bulletin-board__content')[0], addTopPos-30, 600);
}
};
function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
    var animateScroll = function(){
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};