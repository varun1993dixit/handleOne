if(document.getElementsByClassName("sidemenu").length){
    document.getElementsByClassName("sidemenu")[0].getElementsByClassName('link-list')[0].classList.add("active");
    
    Array.from(document.getElementsByClassName("sidemenu")[0].getElementsByClassName('link-list')).forEach(
        function(element, index, array) {  
            element.addEventListener("click",(e)=>{
                e.preventDefault();
                    Array.from(element.parentNode.children).forEach(
                        function(element, index, array) { 
                            if(element.classList.contains('active')){                                
                                element.classList.remove("active");
                            }
                        }
                    );
                    element.classList.add('active');
                    document.getElementsByClassName("report__file")[0].classList.add("active");
            });
        }
    );
    }
     
Array.from(document.getElementsByClassName("report__close")).forEach(
    function(element, index, array) {  
        element.addEventListener("click",(e)=>{
            e.preventDefault();
            document.getElementsByClassName("report__file")[0].classList.remove("active");
            document.getElementsByClassName("link-list").classList.remove("active");
        });
    }
);