const input=document.getElementById("password");
const show=document.getElementById("show");
const showLabel=document.querySelector(".show-password label");

show.addEventListener('click',()=>{
    if(show.checked){
        input.type="text";
        showLabel.style.color="rgb(0, 255, 255)";
    }
    else{
        input.type="password";
        showLabel.style.color="rgb(255, 255, 255)";
    }
});