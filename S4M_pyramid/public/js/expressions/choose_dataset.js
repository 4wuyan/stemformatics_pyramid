

$(document).ready(function() {


    $('a').click(function(){
        
        opener.window.location = $(this).attr('href');
        
        window.close();    
        
    });
    
    
    
    
});
