class Game{
constructor(){
}
rs(){
database.ref("gamestate").on("value",function(data){
gs=data.val()


})}
ws (a){
database.ref("/").update({
    gamestate:a
})



}
start(){
    if(gs==0){
p=new player()
p.rc()
f=new Form()
f.display()





    }
}
startgame(){
f.greet.hide()
f.t.hide()
player. readPlayerdetails()
var b=100
    if(details !=undefined){
for(var a in details){
    if(a=="p"+p.index){
fill("red")
  }
  else{
      fill("black")
  }
    text (details[a].name+"="+details[a].distance,100,b)
  b=b+50  
}


    }
if(keyIsDown("up")&& p.index!=0){
p.distance+=30
p.update()



}
}

}
