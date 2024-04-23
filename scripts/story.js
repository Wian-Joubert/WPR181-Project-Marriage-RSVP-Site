var theta = 270;
var r = 5;
var x = Math.cos(theta*Math.PI/180)*r;
var y = Math.sin(theta*Math.PI/180)*r;
var topPos = 0;
var leftPos = 0;
var car = document.getElementById('car');
var wpres = false;
var apres = false;
var dpres = false;
var spres = false;
var vpres = false;
var opened = false;
var doorpos = 0;

document.addEventListener("keydown", function(event){
    switch(event.key){
        case "a":
            apres = true;
            //console.log(apres)
            break;
        case "d":
            dpres = true;
            //console.log(dpres)
            break;
        case "w":
            wpres = true;
            //console.log(wpres)
            break;
        case "s":
            spres = true;
            //console.log(wpres)
            break;
    }
})

document.addEventListener("keypress",function(event){
    if(event.key == "v"){
        vpres=true;
    }
})

function openGarageDoor(){
    if(!(opened) && doorpos <= 50){
        doorpos += 1;
        document.getElementById("garageDoor").setAttribute("style","top: "+(50-doorpos)+"px;");
    }else{
        opened = true;
    }
}

document.addEventListener("keyup", function(event){
    switch(event.key){
        case "a":
            apres = false;
            //.log(apres)
            break;
        case "d":
            dpres = false;
            //console.log(dpres)
            break;
        case "w":
            wpres = false;
            //.log(wpres)
            break;
        case "s":
            spres = false;
            //console.log(wpres)
            break;
    }
  })

function turnLeft(){
    theta -= 5;
    x = Math.cos(theta*Math.PI/180)*r;
    y = Math.sin(theta*Math.PI/180)*r;
    car.setAttribute("style","top: "+topPos+"px; left: "+leftPos+"px;transform:rotate("+theta+"deg);")
}

function turnRight(){
    theta += 5;
    x = Math.cos(theta*Math.PI/180)*r;
    y = Math.sin(theta*Math.PI/180)*r;
    car.setAttribute("style","top: "+topPos+"px; left: "+leftPos+"px;transform:rotate("+theta+"deg);")
}

function move(){
    if(topPos + y >= 0){
        if(!(topPos + y <= 100 && (leftPos + x >= 50 && leftPos + x <= 150))){
            topPos += y;
        }
    }
    if(leftPos + x >= 0){
        if(!(topPos + y <= 100 && (leftPos + x >= 50 && leftPos + x <= 150))){
            leftPos += x;
        }
    }
        car.setAttribute("style","top: "+topPos+"px; left: "+leftPos+"px;transform:rotate("+theta+"deg);")
    }
function reverse(){
    if(topPos - y >= 0 && leftPos - x >= 0){
        topPos -= y;
        leftPos -= x;
        car.setAttribute("style","top: "+topPos+"px; left: "+leftPos+"px;transform:rotate("+theta+"deg);")
    }
}

function func(){

    if(apres && (wpres || spres)){
        turnLeft();
    }

    if(dpres && (wpres || spres)){
        turnRight();
    }
    
    if(wpres){
        if(opened){
            move();
            console.log(topPos);
            console.log(leftPos);
        }
    }
    requestAnimationFrame(func);

    if(spres){
        if(opened){
            reverse();
        }
    }
    if(vpres){
        openGarageDoor();
    }
}

window.requestAnimationFrame(func)



