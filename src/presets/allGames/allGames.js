if(document.getElementsByClassName("filter")){
document.addEventListener("click",(e)=>{    
    if(e.target.className=='btn'){
        e.preventDefault();
        if(e.target.nextElementSibling.classList.contains('active')){
            document.getElementsByClassName("filter__options")[0].classList.remove("active");
        }
        else{
            document.getElementsByClassName("filter__options")[0].classList.add("active");
        }
    };
});
}
if(document.getElementById("autoComplete")){
    document.getElementById("autoComplete").addEventListener('keyup',function(){
        var input, filter, txtValue;
        input = document.getElementById("autoComplete");
        filter = input.value.toUpperCase();
        Array.from(document.getElementsByClassName("teaser__detail")).forEach(
            function(element, index, array) {
                txtValue=(element.children[0].innerText);
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    element.parentElement.style.display = "";
                        } else {
                            element.parentElement.style.display = "none";
                        }
            }
        );
    });
    }

    // overlay
    Array.from(document.getElementsByClassName("back__favour")).forEach(
        function(element, index, array) {  
            element.addEventListener("click",(e)=>{
                e.preventDefault();
                if(document.getElementsByClassName("favour")[0].classList.contains('active')){
                    document.getElementsByClassName("right-block")[0].classList.remove('no-scroll');
                    document.getElementsByClassName("favour")[0].classList.remove('active');
                    document.getElementsByTagName("body")[0].classList.remove('no-scroll');
                }
            });
        }
    );