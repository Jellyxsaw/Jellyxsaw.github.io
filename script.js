var title=document.getElementById("title")
var content=document.getElementById("content")
var button=document.getElementById("button")
var article=document.getElementById("article")
var password =30566
var input;
var count=0;
var limit=3;
var tries=4;
var out=false;

button.addEventListener("click",function(){
    article.innerHTML=article.innerHTML+`
    <div class="article">
        <h2>${title.value}</h2>
        <p>${content.value}</p>
        <hr>
    </div>
    `;
    title.value="";
    content.value=""
    ;
}
)

while(password!=input && !out){
    count++
    tries--
    if(count<=limit){
        input=prompt("請輸入密碼，您還有"+tries+"次機會")
    }
    else{
        out=true
    }
}

if(out){
    alert("你誰!?");
}
else{
   alert("你好啊"); 
}


