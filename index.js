
window.onload = function () {
        
    var duration = 0;  // converter para segundos
    var button1 = document.getElementById("press");
    var button2 = document.getElementById("reload");
    

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
    
        var count = setInterval(function () {

            minutes = parseInt(timer / 60, 10);
    
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
    
            seconds = seconds < 10 ? "0" + seconds : seconds;
            
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
    
            timer = duration;
            
            }
        
        }, 1000); 

    }

    button1.onclick = () => {
        var value = document.querySelector("#inputId").value;

        duration = 60 * value;
        
        display = document.querySelector("#timer"); // selecionando a id tag timer da div 

        startTimer(duration, display); // iniciando timer
    }

    button2.onclick = () => {
        window.location.reload();
    }

}