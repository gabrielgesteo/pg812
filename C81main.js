canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mousex=e.clientX-canvas.offsetLeft;
    mouseY=e.clientY-canvas.offsetTop;
    console.log("x="+mousex+"y= "+mouseY);
    circle(mousex,mouseY);

}
function circle(mousex,mouseY){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mousex,mouseY,40,0,2*Math.PI);
    ctx.stroke();   
}
ctx=canvas.getContext("2d");
color="yellow";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(300,260,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown)

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(350,210,40,0,2*Math.PI);
ctx.stroke();

ctx=canvas.getContext("2d");
color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(400,260,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown)

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(450,210,40,0,2*Math.PI);
ctx.stroke();