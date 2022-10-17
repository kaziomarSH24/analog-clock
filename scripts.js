setInterval(setClock,1000)

const hourHand = document.querySelector('[data-hh-hand]')
const minutHand = document.querySelector('[data-mm-hand]')
const secondHand = document.querySelector('[data-ss-hand]')

function setClock(){
    let currentDate = new Date();
    let secondsRatio = currentDate.getSeconds() / 60;
    let minutsRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    let hoursRatio = (minutsRatio + currentDate.getHours()) / 12;

    

    setRotation(minutHand, minutsRatio);
    setRotation(secondHand, secondsRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotate', rotationRatio * 360);
}

setClock()

function secondLineCreate(){
    let secondCound = 60;
    
    const clock = document.querySelector('.clock');
    
    for (let i = 0; i <= secondCound; i++) {
        let span = document.createElement("span");
        let att = document.createAttribute("style");
        clock.appendChild(span);
        att.value = `--i:${i}`; 
        span.setAttributeNode(att);   
    }
}
secondLineCreate()