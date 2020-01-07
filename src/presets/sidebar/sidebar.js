Array.from(document.getElementsByClassName("sidebar__menu")).forEach(
    function (element, index, array) {
        element.addEventListener("click", (e) => {
           if(e.target.parentElement.parentElement.classList.contains('sidebar__menu')){
            localStorage.setItem("server", e.target.children[0].nextSibling.data);
           }
           if(e.target.parentElement.parentElement.classList.contains('sidebar__submenu')){
            localStorage.setItem("serverchild", e.target.children[0].nextSibling.data);
           }
        });
    }
);
if(document.getElementsByClassName("sidebar__menu").length){
var storedValue;

    storedValue = localStorage.getItem("server");
if (storedValue != '' && storedValue != null) {
    (document.getElementsByClassName('' + storedValue + '')[0].classList.add('active'));
}
var storedValuechild;
storedValuechild = localStorage.getItem("serverchild");
if (storedValuechild != '' && storedValuechild != null) {
    (document.getElementsByClassName('' + storedValuechild + '')[0].classList.add('active'));
}
}
if(document.getElementsByClassName("sidebar__feedback").length){
Array.from(document.getElementsByClassName("sidebar__feedback")[0].getElementsByClassName('btn')).forEach(
    function(element, index, array) {  
        element.addEventListener("click",(e)=>{
            e.preventDefault();
            if(document.getElementsByClassName("feedback")[0].classList.contains('active')){
                document.getElementsByTagName("body")[0].classList.remove('no-scroll');
                document.getElementsByClassName("feedback")[0].classList.remove('active');
               
            }
            else{
                document.getElementsByClassName("feedback")[0].classList.add('active');
                document.getElementsByClassName("right-block")[0].classList.add('no-scroll');
                document.getElementsByTagName("body")[0].classList.add('no-scroll');
            }
        });
    }
);
}
Array.from(document.getElementsByClassName("back")).forEach(
    function(element, index, array) {  
        element.addEventListener("click",(e)=>{
            e.preventDefault();
            if(document.getElementsByClassName("feedback")[0].classList.contains('active')){
                document.getElementsByClassName("right-block")[0].classList.remove('no-scroll');
                document.getElementsByClassName("feedback")[0].classList.remove('active');
                document.getElementsByTagName("body")[0].classList.remove('no-scroll');
            }
        });
    }
);