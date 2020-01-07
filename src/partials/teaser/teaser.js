Array.from(document.getElementsByClassName("menu-btn")).forEach(
    function(element, index, array) {  
        element.addEventListener("click",(e)=>{
            if(element.nextElementSibling.classList.contains('active')){
                element.nextElementSibling.classList.remove('active');
                document.getElementsByClassName("right-block")[0].classList.remove('scroll-y');
            }
            else{
                element.nextElementSibling.classList.add('active');
                document.getElementsByClassName("right-block")[0].classList.add('scroll-y');
            }
        });
    }
);

Array.from(document.getElementsByClassName("teaser__media")).forEach(
    function(element, index, array) {  
        element.addEventListener("click",(e)=>{
            e.preventDefault();
            if(document.getElementsByClassName("widget")[0].classList.contains('active')){
                document.getElementsByClassName("widget")[0].classList.remove('active');
            }
            else{
                document.getElementsByClassName("widget")[0].classList.add('active');
                document.getElementsByTagName("body")[0].classList.add('no-scroll');
                document.getElementById('myIframe').src=element.getAttribute('data-video');
            }
        });
    }
);

Array.from(document.getElementsByClassName("back--widget")).forEach(
    function(element, index, array) {  
        element.addEventListener("click",(e)=>{
            e.preventDefault();
            if(document.getElementsByClassName("widget")[0].classList.contains('active')){
                document.getElementsByTagName("body")[0].classList.remove('no-scroll');
                document.getElementsByClassName("widget")[0].classList.remove('active');
                
            }
        });
    }
);
