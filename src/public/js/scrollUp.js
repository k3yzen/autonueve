(function(){
    
const d = document;
const w = window;



    let $btn = d.querySelector(".scrollUp-btn");
    let scrollTop;

    w.addEventListener("scroll", e => {

        scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        
        if(scrollTop > 1000) {
      
            $btn.style.display = "block"
            $btn.style.visibility = "visible"

        } else {
            $btn.style.display = "none"
            $btn.style.visibility = "hidden"
        }

    })


    d.addEventListener("click", e => {
        if (e.target == $btn || e.target == $btn.firstChild){

    

            w.scrollTo({
                behavior:"smooth",
                top:0,
            })

        }
    })



}())