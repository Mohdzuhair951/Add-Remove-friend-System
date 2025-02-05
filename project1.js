var a=document.querySelector("#h1")
var b=document.querySelector("#btn")
var inc=1;
b.addEventListener("click",function(){
    
if(inc==1){
    a.innerHTML="FRIEND";
    a.style.marginLeft="6vw";
     a.style.color="green";
     b.innerHTML="Remove"
    inc=0;
}
    else{
        a.innerHTML="STRANGER";
        a.style.marginLeft="5vw";
         a.style.color="rgb(188, 10, 10)";
          b.innerHTML="Add friend"
         inc=1;
    }
});

