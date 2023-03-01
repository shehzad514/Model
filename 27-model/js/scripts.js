const modBtn = document.querySelector(".model-btn");
const modal = document.querySelector(".model-over");
const closeBtn = document.querySelector(".cros-btn");

modBtn.addEventListener("click", function()
{
    
    modal.classList.add("open-model");
})

closeBtn.addEventListener("click", function()
{
    
    modal.classList.remove("open-model");
})