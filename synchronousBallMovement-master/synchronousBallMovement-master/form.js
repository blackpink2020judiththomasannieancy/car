class Form{
constructor(){
    this. input=createInput("name")
this. b=createButton("play");
this. t=createElement("h2")
this. greet=createElement("h3")

}
display(){

this.input.position(200,200)

this.b.position(250,250);

this.t.position(100,100)
this.t.html("car game")
this.b.mousePressed(()=>{
    this.input.hide()
    this.b.hide()
p.name=this.input.value()

pc++
p.index=pc
p.wc(pc)
p.update()
this.greet.position(200,200)
this.greet.html("hii"+p.name)


})





}











}