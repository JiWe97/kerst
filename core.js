 // Getting formated date from date string
 let deadline = new Date("dec 25, 2023 00:00:00").getTime();
 
 // Calling defined function at certain interval
 let x = setInterval(function () {

     // Getting current date and time in required format
     let now = new Date().getTime();

     // Calculating difference
     let t = deadline - now;

     // Getting values of days,hours,minutes, seconds
     let days = Math.floor(
         t / (1000 * 60 * 60 * 24)
     );
     let hours = Math.floor(
         (t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
     );
     let minutes = Math.floor(
         (t % (1000 * 60 * 60)) / (1000 * 60)
     );
     let seconds = Math.floor(
         (t % (1000 * 60)) / 1000
     );

     // Show the output time
     document.getElementById("day").innerHTML = days;
     document.getElementById("hour").innerHTML = hours;
     document.getElementById("minute").innerHTML = minutes;
     document.getElementById("second").innerHTML = seconds;

     // Show overtime output
     if (t < 0) {
         clearInterval(x);
         document.getElementById("clock").innerHTML = "Merry Christmas!";
         document.getElementById("day").innerHTML = "0";
         document.getElementById("hour").innerHTML = "0";
         document.getElementById("minute").innerHTML = "0";
         document.getElementById("second").innerHTML = "0";
     }
 }, 1000);
 // create slider-functions
 let ball = document.querySelector('.ball');
 let slider = document.querySelector('.slider');
 let naughtyText = document.querySelector('.naughty');
 let niceText = document.querySelector('.nice');
 let body = document.querySelector('body');
 // link to song
 let christmasSong = document.getElementById('christmasSong');
 //create snow and add create and remove functions
 let snow = document.querySelectorAll('.snow');
 const snowContainer = document.getElementById("snow-container");
 const snowContent = ['&#10052', '&#10053', '&#10054'];
 const random = (num) => {
 return Math.floor(Math.random() * num);
 }

 // get random styles
 const getRandomStyles = () => {
 const top = random(100);
 const left = random(100);
 const dur = random(10) + 10;
 const size = random(25) + 25;
 return ` 
 top: -${top}%; 
 left: ${left}%; 
 font-size: ${size}px; 
 animation-duration: ${dur}s; 
 `;
 }

 const createSnow = (num) => {
     for (var i = num; i > 0; i--) {
         var snow = document.createElement("div");
         snow.className = "snow";
         snow.style.cssText = getRandomStyles();
         snow.innerHTML = snowContent[random(2)]
         snowContainer.append(snow);
     }
 }
 const removeSnow = () => {
     snowContainer.innerHTML = "";
 }
 // add event listener
 slider.addEventListener('click', ()=> {
     ball.classList.toggle('right');
     naughtyText.classList.toggle('active')
     niceText.classList.toggle('active');
     body.classList.toggle('green')
     body.classList.toggle('naughtyBody');
     body.classList.toggle('niceBody');
     if (naughtyText.classList.contains('active') && !christmasSong.paused) {
         christmasSong.pause();
         removeSnow();
     } else if (niceText.classList.contains('active') && christmasSong.pause) {
         christmasSong.play();
         createSnow(30);
     }
 })
                 