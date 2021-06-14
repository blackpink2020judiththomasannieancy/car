class player{
    constructor(){
        this.name=null;
        this.distance=0;
        this.index=0;
    }
    rc(){
    database.ref("pc").on("value",function(data){
    pc=data.val()
    
    
    })}
    wc (a){
    database.ref("/").update({
        pc:a
    })
    
    
    
    }
   update() {
database.ref("player/p"+this.index).set({
    name:this.name,distance: this.distance
})





   }
static readPlayerdetails(){
database.ref("player").on("value",function(data) {
 details=data.val()   
})



}
    









    }
    
    
    
    