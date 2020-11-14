var cv = document.querySelector("canvas");
var ctx = cv.getContext("2d");

cv.width = 800;
cv.height = 600;

var cw = cv.width;
var ch = cv.height;

var unit = 25;

var score=0;



var food = {
    x: Math.floor(Math.random()*(cw/unit)),
    y: Math.floor(Math.random()*(ch/unit))

}

var direction = "right";

document.addEventListener("keydown",getDirection);

function getDirection(e){
    
    if( e.keyCode == 37 && direction != "right"){
        direction = "left";
    }else if(e.keyCode == 38 && direction != "down"){
        direction = "up";
    }else if(e.keyCode == 39 && direction != "left"){
        direction = "right";
    }else if(e.keyCode == 40 && direction != "up"){
        direction = "down";
    }
};

function drawSnake(x,y){
    ctx.fillStyle = "#fff";
    ctx.fillRect(x*unit,y*unit,unit,unit);

    ctx.fillStyle = "b";
    ctx.strokeRect(x*unit,y*unit,unit,unit);
}

var snake = [];
for (var i = 3;i>=0;i--){
    snake.push({
        x:i,
        y:0
    })
}
function drawFood(x,y){
    ctx.fillStyle = "red";
    ctx.fillRect(x*unit,y*unit,unit,unit);


}
function collision(head,array){
    for(var i = 0;i < array.length;i++){
        if(head.x ==array[i].x && head.y == array[i].y){
            return true;
        }

    }
    return false;
}

function draw(){
    ctx.clearRect(0,0,cw,ch);
    ctx.fillStyle="black";
    ctx.fillRect(0,0,cw,ch);
    for(var i=0;i<snake.length;i++){
        var x = snake[i].x;
        var y = snake[i].y;
        drawSnake(x,y);
    }

    drawFood(food.x,food.y);
    // console.log(food.x);
    // console.log(food.y);

    var snakeX = snake[0].x;
    var snakeY = snake[0].y;

    

    if( direction == "left") snakeX--;
    else if( direction == "up") snakeY--;
    else if( direction == "right") snakeX ++;
    else if( direction == "down") snakeY ++;

    if(snakeX==food.x && snakeY==food.y){
        score++;
        food = {
            x: Math.floor(Math.random()*(cw/unit)),
            y: Math.floor(Math.random()*(ch/unit))
        }
        var newHead = {
            x: snakeX,
            y: snakeY
        };
    }else{
        snake.pop();
        var newHead = {
            x: snakeX,
            y: snakeY
        };
    }
    document.getElementById("score").innerHTML=score;
    console.log(score);

    var newHead = {
        x: snakeX,
        y: snakeY
    };
    
    if(snakeX<0||snakeY<0||snakeX>=cw/unit||snakeY>=ch/unit||collision(newHead,snake)){
        location.reload();
    }
    snake.unshift(newHead);
    
}
setInterval(draw,60);