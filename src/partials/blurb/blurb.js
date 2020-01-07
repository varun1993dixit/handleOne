document.addEventListener("click",(e)=>{        
    if(e.target.classList.contains('link-icon__more')){  
        if(!document.getElementsByClassName("blurb__content")[0].classList.contains("active")){
        document.getElementsByClassName("blurb__content")[0].classList.add("active");
        }
        else{
            document.getElementsByClassName("blurb__content")[0].classList.remove("active");
        }
    };
});

