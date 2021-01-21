class Game{
constructor(){}

getState(){ 

var gamestateRef = database.ref('gamestate'); 
gamestateRef.on("value",function(data){
gamestate = data.val();
}) }

update(state){ 

database.ref('/').update({ 
gamestate: state }); 
}

start(){ 

if(gamestate === 0){ 
player = new Player(); 
player.getCount(); 
form = new Form() 
form.display(); }

car1=createSprite(100,200)
car2=createSprite(300,200)
car3=createSprite(500,200)
car4=createSprite(700,200)
cars=[car1,car2,car3,car4]


}

play(){
 form.hide()
 textSize(30) 
 text("gamestart",120,100) 
 Player.getPlayerInfo()
 
 if(allPlayers !== undefined){
    var index=0,x=0,y

 //var display_position = 130;

 for(var plr in allPlayers){
 index=index+1;
 x=x+200;
 y=displayHeight-allPlayers[plr].distance 
 cars[index-1].x=x
 cars[index-1].y=y

 if(index===player.index){
    cars[index-1].shapecolor=red
camera.position.x=displayWidth/2
camera.position.y=cars[index-1].y
 }  

 }
}
 if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance +=50 
    player.update();
   }



}



}