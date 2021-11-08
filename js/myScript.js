window.onload = function() {
    var drawingCanvas = document.getElementById('smile');
    if(drawingCanvas && drawingCanvas.getContext) {
     var context = drawingCanvas.getContext('2d');
     // Малюємо коло
     context.strokeStyle = "rgb(71, 42, 99)";
     //градієнт для кола
     var linearGradient1 = context.createLinearGradient(20,0, 220,0);
     linearGradient1.addColorStop(0, 'rgb(106, 36, 104)');
     linearGradient1.addColorStop(1, 'rgb(208, 0, 43)');
     context.fillStyle   = linearGradient1;

     context.beginPath();
     context.arc(100,100,50,0,Math.PI*2,true);
     context.closePath();
     context.stroke();
     context.fill();
     //Добавляю градієнт для очей і рота
     var mymy = context.createLinearGradient(20,0, 220,0);
     mymy.addColorStop(0, 'rgba(148,187,233,1)');
     mymy.addColorStop(1, 'rgba(6,176,207,1)');
     context.fillStyle   = mymy;
     // Малюємо ліве око
     context.beginPath();
     context.arc(84,90,8,0,Math.PI*2,true);
     context.closePath();
     context.stroke();
     context.fill();
     // Малюємо праве око 
     context.beginPath();
     context.arc(116,90,8,0,Math.PI*2,true);
     context.closePath();
     context.stroke();
     context.fill();
     // Малюємо рот
     context.beginPath();
     context.moveTo(70,115);
     context.quadraticCurveTo(100,130,130,115);
     context.quadraticCurveTo(100,150,70,115); 
     context.closePath();
     context.stroke();
     context.fill();
    }
   }