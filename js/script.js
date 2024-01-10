let num = 0;
let red = 0, green = 0;
const loaderElement = document.querySelector('.loader');
let timer = setInterval(loader, 1);
function loader() {
    if (num < 100) {
        num++;
        
        loaderElement.textContent = num + '%';
        loaderElement.style.color = `rgb(${red},${green},100)`;
        // loaderElement.style.textShadow = `0px 5px 1px red`;
        red += 3;
        green += 3;
    } else{
        console.log("finished");
        clearInterval(timer);
        // document.getElementById("colorWrapper").style.display = "none";
        hideLoader();
        
    }  
}