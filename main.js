let btn=document.querySelector("button");
let ok=document.querySelector(".ok");
let cancel=document.querySelector(".cancel");
let toast=document.querySelector(".container");

btn.addEventListener()"click",function()
{
	toast.classList.remove("hide");
});
ok.addEventListener("click",function()
{
	toast.classList.add("hide");
});
cancel.addEventListener("click",function()
{
	toast.classList.add("hide");
