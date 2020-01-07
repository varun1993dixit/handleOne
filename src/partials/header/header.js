    document.addEventListener("click",(e)=>{
        
        if(e.target.className=='toggle-sidemenu'){
            e.preventDefault();
            if(!document.getElementsByClassName("sidebar")[0].classList.contains("active")){
            document.getElementsByClassName("sidebar")[0].classList.add("active");
            }
            else{
                document.getElementsByClassName("sidebar")[0].classList.remove("active");
            }

        };
        if(e.target.className=='profile__notification'){
            if(!document.getElementsByClassName("notify")[0].classList.contains("active")){
            document.getElementsByClassName("notify")[0].classList.add("active");
            }
            else{
                document.getElementsByClassName("notify")[0].classList.remove("active");
            }

        };
        if(e.target.className=='profile__user'){
            if(!document.getElementsByClassName("notify")[1].classList.contains("active")){
            document.getElementsByClassName("notify")[1].classList.add("active");
            }
            else{
                document.getElementsByClassName("notify")[1].classList.remove("active");
            }

        };
    });
    