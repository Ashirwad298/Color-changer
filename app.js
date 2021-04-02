
var btn=document.querySelector("button");
btn.addEventListener('click',function(){
    var r=Math.floor(Math.random()*255);
    var g=Math.floor(Math.random()*255);
    var b=Math.floor(Math.random()*255);
    var ans=`rgb(${r}, ${g}, ${b})`;
    console.log(ans);
    document.body.style.backgroundColor=ans;
    var h1=document.querySelector("h1");
    h1.innerHTML=ans;
}
)