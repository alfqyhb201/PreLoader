let num = 0;
let red = 0, green = 0;
let loaderElement = document.querySelector('.loader');
let timer = setInterval(loader, 200);
function loader() {
    if (num < 100) {
        num++;
        
        loaderElement.textContent = num + '%';
        loaderElement.style.color = `rgb(${red},${green},100)`;
        red += 3;
        green += 3;
    } else{
        console.log("finished");
        clearInterval(timer);
    }  
}