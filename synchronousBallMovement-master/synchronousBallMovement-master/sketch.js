var  database;
var gs=0,pc;
var details=[]
var f,g,p;

function setup(){
  database = firebase.database();
// console.log(database);
  createCanvas(500,500);

 g=new Game ()
 g.rs ()
g.start()
 
}

function draw(){
  background("white");
 if (pc ==4){
 g.ws(1)  
  g.startgame()





 }
  
    
  
}

