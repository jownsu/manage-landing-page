document.addEventListener("DOMContentLoaded", () => {

    let menu_btn = document.querySelector(".menu");
    let nav_container = document.querySelector("nav .container");
    let inbox_form = document.querySelector("#inbox_form");
    let input_group = inbox_form.querySelector("div");
    let dots = document.querySelectorAll("button.dot")
    let slides = document.querySelectorAll(".slide");

    const setActiveDot = (selected_index) => {
        for(let i = 0; i < dots.length; i++){
            dots[i].classList.remove("active");
        }
        dots[selected_index].classList.add("active");
    }

    const setActiveSlide = (selected_index) => {
        for(let i = 0; i < slides.length; i++){
            slides[i].classList.remove("active");
        }
        slides[selected_index].classList.add("active");
    }

    inbox_form.addEventListener("submit", (event) => {
        event.preventDefault();

        let text_val = event.target.elements.inbox.value;


        if(text_val === ""){
            const paragraph = document.createElement("p");
            const text_node = document.createTextNode("Please insert a valid email");

            input_group.classList.add("error");
            input_group.querySelector("p.error_msg")?.remove();
            
            paragraph.classList.add("error_msg");
            paragraph.appendChild(text_node);
            input_group.append(paragraph);
        }
        else{
            input_group.classList.remove("error");
            input_group.querySelector("p.error_msg")?.remove();
        }

    });

    menu_btn.addEventListener("click", () => {
        nav_container.classList.toggle("show");
    });

    for(let i = 0; i <= dots.length; i++){
        dots[i].addEventListener("click", () => {
            setActiveDot(i);
            setActiveSlide(i);
        })
    }
});
