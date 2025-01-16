let count = 0;

function onClickChangeCount(){
    document.getElementById('counter').innerText = count;
}
function increment(value){
    count += value;
    onClickChangeCount();
}
function decrement(){
    count--;
    onClickChangeCount();
}
function reset(){
    count = 0;
    onClickChangeCount();
}
function onClickChangeColor(){
    let colors=["red", "orange", "yellow", "green", "blue", "indigo",  "violet"];
    let randColor1 = colors[Math.floor(Math.random() * colors.length)];
    let randColor2 = colors[randColor1.length-2];
    // console.log(randColor);
    document.body.style.backgroundImage = `linear-gradient(to bottom right, ${randColor1}, white, ${randColor2})`;
}

       