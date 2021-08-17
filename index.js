const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  
  const seconds = now.getSeconds();
  const secondsDegree = ((seconds / 60) * 360)+ 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360)+ 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  
  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360)+ 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  
  const hands = document.querySelectorAll('.hand');
    if (seconds === 0) {
        hands.forEach(hand => hand.style.transitionDuration = '0s');
    } else {
      hands.forEach(hand => hand.style.transitionDuration = '0.05s');
}
  
  // console.log(seconds);
}

setInterval(setDate, 1000);
