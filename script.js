//DOM - Document Object Model
var isstatus = document.querySelector("h4")
var btn = document.querySelector("button")
var check = 0
var temp = document.querySelector("#like h3") // Object Value
var text = temp.textContent // Convert into Text
let count = parseInt(text) // Convert into Number
btn.addEventListener("click",function(){
    if(check == 0){
        isstatus.innerHTML = "Request Send"
        isstatus.style.color = "green"
        btn.innerHTML = "Unfriend"
        btn.style.backgroundColor = "grey"
        check = 1
    }else{
        isstatus.innerHTML = "Mutual Friend"
        isstatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        btn.style.backgroundColor = "rgb(0, 26, 255)"
        check = 0
    }
})

// Like Feature
var img = document.querySelector("#profile")
var heart = document.querySelector("i")


img.addEventListener("dblclick",function(){
    heart.style.transform = "translate(0%,0%)scale(1.5)"
    count ++
    temp.innerHTML = count.toString()//String(count)
    setTimeout(function(){
        heart.style.opacity = "0"
        heart.style.transform = "translate(0%,0%)scale(0)"
    },1500)
    heart.style.opacity = "1"
})

var like = document.querySelector("#like")
var icon = document.querySelector("#like i")
var flag = 0

like.addEventListener("click",function(){
    if(flag == 0){
        icon.style.color = "rgb(250, 0, 0)"
        flag = 1
        count ++
        temp.innerHTML = count.toString()//String(count)
    }else{
        icon.style.color = "transparent"
        flag = 0
        count --
        temp.innerHTML = count.toString()//String(count)
    }
})
