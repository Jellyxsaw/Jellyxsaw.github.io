const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn=document.getElementById('btn')
const color=document.querySelector('.color')
const color2=document.querySelector('.color2')

btn.addEventListener('click',function(){
    let hexcolor='#';
    let hex2='#'
    for(let i=0;i<6;i++){
        hexcolor += hex[randonmmms()]
        hex2 += hex[randonmmms()]
    }
    
    color.textContent=hexcolor;
    color2.textContent=hex2;
    document.body.style.background='radial-gradient(circle farthest-corner at left,'+hexcolor+','+hex2+')'
}
)
function randonmmms(){
    return Math.floor(Math.random()*hex.length);
}