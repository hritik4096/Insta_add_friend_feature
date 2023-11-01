var add = document.querySelector("#add");
var friend = document.querySelector("#friend");
var flag = 0;
add.addEventListener("click",function(){
   if(flag==0){
    friend.innerHTML="Friends";
    
    flag=1;
    add.innerHTML="Remove"
    add.style.color="red"
    friend.style.color="green"
   }else{
    friend.innerHTML="Stranger";
    flag=0;
    add.innerHTML="add friend"
    add.style.color="white"
    friend.style.color="red"

   }
})
