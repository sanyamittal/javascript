(function(){
    var hours,mins,secs;
    hours = mins = secs = 0;
    function createTimeString(h,m,s){
        var hours, mins, secs;
        if (secs >= 10) {
            secs = s;
         } else {
            secs = '0' + s;
        }
        
        if (mins >= 10) {
             mins = m;
         } else {
            mins = '0' + m;
        }
        
        if (hours >= 10) {
                hours = h;
         } else {
                hours = '0' + h;
        }
        return hours + ':' + mins + ':' + secs;
    }
    
    document.getElementById('clock').innerHTML = createTimeString(hours, mins, secs);
    setInterval(function(){
                 secs++;
       			 createTimeString
       			 if (secs==59) {
            		mins++;
      			  	document.getElementById('clock').innerHTML = createTimeString(hours, mins, secs);
      			  }
            	 if (mins==59) {
                    hours++;
                    document.getElementById('clock').innerHTML = createTimeString(hours, mins, secs);
                  }    
        
     			},1000)
}())
