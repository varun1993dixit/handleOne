Array.from(document.getElementsByClassName("play__media")).forEach(
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