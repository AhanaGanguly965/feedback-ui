const ratingEls=document.querySelectorAll(".rating");
const btnEl=document.getElementById("btn");
let selectedRating=" ";
const containerEl=document.getElementById("container");
ratingEls.forEach((ratingEl)=> {
    ratingEl.addEventListener("click",(event)=>{
     removeActive();
     selectedRating=event.target.innereText || event.target.parentNode.innerText;
     console.log(selectedRating);
     event.target.classList.add("active");
     event.target.parentNode.classList.add("active");
    });
});

btnEl.addEventListener("click",()=>{
    if(selectedRating !==" "){
     containerEl.innerHTML=`<strong>Thankyou !
     <br> <br>
     Feedback: ${selectedRating}
     </strong>
     <p>We will use your feedback to improv our customer support</p>`
    };
});
function removeActive(){
    ratingEls.forEach((ratingEl)=>{
 ratingEl.classList.remove("active");
    });
};
