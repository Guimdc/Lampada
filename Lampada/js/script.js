let body = document.querySelector("body");
let main = document.createElement("main");
let div1 = document.createElement("div");
div1.setAttribute("id", "interruptor");
let div1u1 = document.createElement("div");
div1u1.setAttribute("class", "parafuso");
let div1u2 = document.createElement("div");
div1u2.setAttribute("id", "button");
div1u2.setAttribute("class", "buttonOff");
let div1u3 = document.createElement("div");
div1u3.setAttribute("class", "parafuso");
let img = document.createElement("img");
img.setAttribute("src", "./image/LampOff.png");
img.setAttribute("id", "image");
let div2 = document.createElement("div");
div2.setAttribute("class", "opaOff");
div2.setAttribute("id", "opacidade");
let div2u1 = document.createElement("div");
div2u1.setAttribute("id", "click");

body.append(main);
main.append(div1);
div1.append(div1u1);
div1.append(div1u2);
div1.append(div1u3);
main.append(img);
main.append(div2);
div2.append(div2u1);



document.querySelector("#click").onclick = function (){
    let button = document.querySelector("#button");
    let opacidade = document.querySelector("#opacidade");
    let audio = new Audio('./audio/interruptor.mp3');
    audio.play();
    let lamp = document.querySelector("#image");
    
    if(button.className=="buttonOff"){
        button.setAttribute("class", "buttonOn");
        opacidade.setAttribute("class", "opaOn");
        lamp.setAttribute("src", "./image/LampOn.png");
        
    }else{
        button.setAttribute("class", "buttonOff");
        opacidade.setAttribute("class", "opaOff");
        lamp.setAttribute("src", "./image/LampOff.png");
    }

}