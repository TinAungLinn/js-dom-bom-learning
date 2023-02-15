// Variables

fonts = ["65Art House","70Art House","Adobe Heiti Std","Adobe Caslon Pro","Algerian","Bauhaus 93"];
 

//Selectors

const output = document.querySelector("#output");
const text = document.querySelector("#text");
const count = document.querySelector("#count");
const color = document.querySelector("#color");
const fontSize = document.querySelector("#fontSize"); 
const fontFamily = document.querySelector("#fontFamily"); 


fonts.forEach(font => {
    fontFamily.append(new Option(font,font));
});

// Action
//text ထဲမှာစာရေးတာနဲ့‌ output မှာတစ်ခါတည်းပြ

text.addEventListener("keyup",event =>{
    output.innerText = text.value;
    count.innerText = text.value.length;
});

color.addEventListener("change",event =>{
    output.style.color = event.target.value;
});

fontSize.addEventListener("change",event =>{
    output.style.fontSize = event.target.value + "px";
});

fontFamily.addEventListener("change",event => {
    output.style.fontFamily = fontFamily.value;
})
