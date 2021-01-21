var database,form,game,player,canvas,backgroundimage,playerCount,gamestate=0,allPlayers
var car1,car2,car3,car4,cars,distance=0;

function setup(){
   canvas=createCanvas(displayWidth-20,displayHeight-30);
    database=firebase.database()
    console.log(database)
    game=new Game()
    game.getState()
    game.start()
}

function draw(){
    background("white");
    
    if(playerCount===4){
     game.update(1)
    }
       
    if(gamestate===1){
       game.play()
       }

    drawSprites();
}

