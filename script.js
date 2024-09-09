let next = document.querySelector(".slid2 .but .btn-conteiner:nth-child(1)")
let prev = document.querySelector(".slid2 .but .btn-conteiner:nth-child(2)")

prev.addEventListener("click" , ()=>{
    let items = document.querySelectorAll(".slid2 .box .item")
    document.querySelector(".box").appendChild(items[0])
})

next.addEventListener("click" , ()=>{
    let items = document.querySelectorAll(".slid2 .box .item")
    document.querySelector(".box").prepend(items[items.length - 1])
})