document.addEventListener("DOMContentLoaded", () => {

let inbox_form = document.querySelector("#inbox_form");
let input_group = inbox_form.querySelector("div");

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


});