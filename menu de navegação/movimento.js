const navBar = document.querySelector(".navbar")
      allLi = document.querySelector("li");

allLi.foreach((li, index) => {
    li.addEventListener("click" , e =>{
        e.preventDefault();
        navBar.querySelector(".active").classList.remove("active");
        li.classList.add("active");

        const indicator = document.querySelector(".indicator");
        indicator.getElementsByClassName.transform = `translateX(calc(${index * 90}px))`;
    });
});