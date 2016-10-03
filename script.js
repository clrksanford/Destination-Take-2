       function hideImage(x) {
            document.getElementById(x).style.visibility = "hidden";   
        }
            
        function showImage(x) {
            document.getElementById(x).style.visibility= "visible";   
        }
        
        function showThisImage(x) {
            switch(x) {
                
                case 'Lyon':
                    showImage('Lyon');
                    hideImage('Atlanta');
                    hideImage('Marrakech');
                    hideImage('Istanbul');
                    hideImage('Lisbon');
                    hideImage('Bern');
                break;
                
                case 'Atlanta':
                    hideImage('Lyon');
                    showImage('Atlanta');
                    hideImage('Marrakech');
                    hideImage('Istanbul');
                    hideImage('Lisbon');
                    hideImage('Bern');
                break;
                
                case 'Marrakech':
                    hideImage('Lyon');
                    hideImage('Atlanta');
                    showImage('Marrakech');
                    hideImage('Istanbul');
                    hideImage('Lisbon');
                    hideImage('Bern');
                break;
                    
                case 'Istanbul':
                    hideImage('Lyon');
                    hideImage('Atlanta');
                    hideImage('Marrakech');
                    showImage('Istanbul');
                    hideImage('Lisbon');
                    hideImage('Bern');
                break;
                
                case 'Lisbon':
                    hideImage('Lyon');
                    hideImage('Atlanta');
                    hideImage('Marrakech');
                    hideImage('Istanbul');
                    showImage('Lisbon');
                    hideImage('Bern');
                break;
                
                case 'Bern':
                    hideImage('Lyon');
                    hideImage('Atlanta');
                    hideImage('Marrakech');
                    hideImage('Istanbul');
                    hideImage('Lisbon');
                    showImage('Bern');
            }
        }

$(document).ready(function() {
   $("#clear").click(function() {
      $("img").css("visibility", "hidden"); 
   });
});

$(document).ready(function() {
    $("#showLyon").click(function() {
       showThisImage("Lyon");    
    });
});

$(document).ready(function() {
    $("#showAtlanta").click(function() {
       showThisImage("Atlanta");    
    });
});

$(document).ready(function() {
    $("#showMarrakech").click(function() {
       showThisImage("Marrakech");    
    });
});

$(document).ready(function() {
    $("#showIstanbul").click(function() {
       showThisImage("Istanbul");    
    });
});

$(document).ready(function() {
    $("#showLisbon").click(function() {
       showThisImage("Lisbon");    
    });
});

$(document).ready(function() {
    $("#showBern").click(function() {
       showThisImage("Bern");    
    });
});