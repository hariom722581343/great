// import navbar from "../component/navbar.js";

// let Navbar=document.getElementById("Navbar");
// Navbar.innerHTML=navbar;

let slider=document.getElementById("slider");
let slide=["https://files.myglamm.com/site-images/original/Homepage-desktop---1920-x-527---CTA-yes_8.jpeg","https://files.myglamm.com/site-images/original/popxo1920x527.gif","https://files.myglamm.com/site-images/original/Manish1920x527.jpg","https://files.myglamm.com/site-images/original/Homepage-1920x527_3.jpeg"];

let i=0;
let img=document.createElement("img");
// img.src=slide[0];
// slider.append(img)
let id=setInterval(function(){
 slider.innerHTML=null;
  if(i===4){
   i=0;
   img.src=slide[i];
   slider.append(img);
  }else{
   img=document.createElement("img");
   img.src=slide[i];
   slider.append(img);
  };
  i++;
},3000);