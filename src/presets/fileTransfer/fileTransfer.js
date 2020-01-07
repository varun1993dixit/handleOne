if(document.getElementsByClassName("tabs").length){
document.getElementsByClassName("tabs")[0].getElementsByClassName('btn')[0].classList.add("active");
document.getElementsByClassName("file-wrap__content")[0].classList.add("active");

Array.from(document.getElementsByClassName("tabs")[0].getElementsByClassName('btn')).forEach(
    function(element, index, array) {  
        element.addEventListener("click",(e)=>{
            e.preventDefault();
            if(element.nextElementSibling){
                element.nextElementSibling.classList.remove('active');
                element.classList.add('active');
                document.getElementsByClassName("file-wrap__dropzone")[0].classList.remove("active");
                document.getElementsByClassName("file-wrap__content")[0].classList.add("active");
               
            }
            else{
                element.previousElementSibling.classList.remove('active');
                element.classList.add('active');
                document.getElementsByClassName("file-wrap__content")[0].classList.remove("active");
                document.getElementsByClassName("file-wrap__dropzone")[0].classList.add("active");
            }
        });
    }
);
}