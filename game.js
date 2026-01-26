

const colr =["blue","orange", "green", "yellow", "black","pink","gray","Aqua","purple","gold"];
let a= 16;
const btn =document.getElementById("pop");
    btn.addEventListener("click", () => {
       a=prompt("Choose your size grid: ");
       if(a != undefined && a != NaN){
        container.replaceChildren();
       }
     carr = [];
    for(let i=0 ; i<a; i++){
        const div = document.createElement("div");
        container.appendChild(div); 
        for(let j=0 ; j<a; j++){
            const divv = document.createElement("div");
            div.appendChild(divv);  
            carr.push(divv); 
        }
    }
    carr.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        let n =Math.floor(Math.random()*colr.length);
        div.style.backgroundColor=colr[n];
        
  });    
});
    });


const container = document.querySelector(".container");
let carr = [];
for(let i=0 ; i<16; i++){
    const div = document.createElement("div");
    container.appendChild(div); 
    for(let j=0 ; j<16; j++){
        const divv = document.createElement("div");
        div.appendChild(divv);  
        carr.push(divv); 
    }
}



carr.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        let n =Math.floor(Math.random()*colr.length);
        div.style.backgroundColor=colr[n];
        
  });    
});