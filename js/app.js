$(document).ready(function(){
    $('#fadeIn').animate({
    opacity: 0,
    }, 2000, function(){
        $('#fadeIn').css('display', 'none');
    });
    
});

var bg_count = 1;
var container_bg = document.getElementById('mainContainer-bg');

function changeBG(){ 
    
    if(bg_count == 1){
        
        container_bg.setAttribute('style', "background-image: url('img/bg01.jpg')"); 
        bg_count++;
    
    } else if (bg_count == 2){

        container_bg.setAttribute('style', "background-image: url('img/bg02.jpg'); background-position: right;");
        bg_count++;

    } else if (bg_count == 3){

        container_bg.setAttribute('style', "background-image: url('img/bg03.jpg'); background-position: center;");
        bg_count++;

    } else if (bg_count == 4){
        
        container_bg.setAttribute('style', "background-image: url('img/bg04.jpg')");
        bg_count = 1;
    }
}
setTimeout(()=>{setInterval(()=> {changeBG();}, 10000);},4000);