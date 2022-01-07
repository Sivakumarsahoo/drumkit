for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    
    document.querySelectorAll(".drum")[i].addEventListener("click",touch);
   
    function touch()
    {
        var buttininnerhtml=this.innerHTML;
       makeSound(buttininnerhtml);
       animbutton(buttininnerhtml);
        
    }
    
}
document.addEventListener("keydown",function(e){makeSound(e.key)
                                                animbutton(e.key)});

function makeSound(key)
{
    switch(key)
        {
            case "A":var audio = new Audio("tom-1.mp3");
                      audio.play();
                      break;
            case "S":var audio = new Audio("tom-2.mp3");
                      audio.play();
                      break;
            case "D":var audio = new Audio("tom-3.mp3");
                      audio.play();
                      break;
             case "V":var audio = new Audio("tom-4.mp3");
                      audio.play();
                      break;
            case "J":var audio = new Audio("tom-5.mp3");
                      audio.play();
                      break;
            case "K":var audio = new Audio("tom-6.mp3");
                      audio.play();
                      break;
            case "L":var audio = new Audio("tom-7.mp3");
                      audio.play();
                      break;
        }
}

function animbutton(hkey)
{
    var activebtn=document.querySelector("."+hkey);
    activebtn.classList.add("press");
    setTimeout(function(){activebtn.classList.remove("press")},100)
}