var title=document.getElementById("title")
var content=document.getElementById("content")
var button=document.getElementById("button")
var article=document.getElementById("article")

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

