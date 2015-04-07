(function () {

    function timer () {
        var counter = 0;
        setInterval(function(){
          counter++;
          document.getElementById('countdownValue').innerHTML = counter;
        }, 1000);
    }
    
    timer();
}());
