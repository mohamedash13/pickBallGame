let parent = document.querySelector(".game")
let startBtn = document.getElementById("start")
let h1 = document.querySelector("h1")
let startForm = document.querySelector(".start-game")
let game = document.querySelector(".on-game")
let score = document.getElementById("score") 


let count = 0


game.remove()
function gamee(){
    function balls(){
        
        parent.append(game)
        

        setInterval(() => {
            let creatDiv = document.createElement("div")
            creatDiv.className = "ball"
            let creatImg = document.createElement("img")
            creatImg.src = "baseball-softball-clip-art-baseball-png-ef14c085d69b007c9aeff8f56a912480.png"
            creatDiv.append(creatImg)
            game.append(creatDiv)

            setInterval(() => {
                creatDiv.remove()
            }, 5000);
            let x1 = setTimeout(() => {
                creatDiv.style.cssText = `top: 100%; left: ${Math.random(123123) * 100 - 20 + "%"};`
            }, 1000);
            creatDiv.style.cssText = `top: -50px; left: ${Math.random(123123) * 100- 20 + "%"};`



            creatDiv.addEventListener("click",() =>{
                count += 1
                score.innerHTML = count
                creatDiv.remove()
            })

        }, 2000);
    }
    balls()
}
console.log(typeof x1)

    //first remove the game
    let x = startBtn.addEventListener("click",() => {
        startForm.remove()
    gamee()
})


// creat element



