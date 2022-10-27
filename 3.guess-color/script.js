let questionColor = ""
const levels = {
    EASY: 3,
    MEDIUM: 6,
    HARD: 9
}
let level = levels.HARD
window.onload = function(){
    newColor();
}
function newColor(){
    const spanColorQuestion = document.getElementById("colorQuestion")
    questionColor = randomRGBColor();
    // spanColorQuestion.style.color = colorQuestion
    spanColorQuestion.innerText = questionColor
    randomAnswers(level)
}
function random(){
    return Math.round(Math.random()*255)
}
function randomRGBColor(){
    return `rgb(${random()}, ${random()}, ${random()})`
}
function randomAnswers(quantity){
    const answerIndex = Math.round(Math.random()*quantity)
    //create array contains level elements
    const arr = [...new Array(quantity)].map(m=> randomRGBColor())
    arr[answerIndex] = questionColor;
    const squares = document.querySelectorAll(".square")
    for(let i = 0; i < squares.length; i++){
        const square = squares[i]
        if(i>= quantity)
        square.style.display = "none"
        else{
            square.style.display = "block"
            square.style.backgroundColor = arr[i]
        }
        square.onclick = function(){
            const answerColor = this.style.backgroundColor
            if(answerColor == questionColor){
                console.log("correct")
                for(let square of squares){
                    square.style.backgroundColor = answerColor
                }
            }
            else{
                console.log("wrong")
                square.style.backgroundColor = "#fff"
            }
        }
    }
}