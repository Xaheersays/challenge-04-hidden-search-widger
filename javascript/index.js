document.addEventListener("DOMContentLoaded",function(){
    //search btn
    let btn = document.getElementById("search");
    // input field
    let inputField = document.getElementById("inputField")
    // toggling class
    btn.addEventListener("click",function(){
        inputField.classList.toggle("hide-ip")
        btn.classList.toggle("translate-btn");

    });
});