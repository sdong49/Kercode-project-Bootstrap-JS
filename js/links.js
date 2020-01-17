let fadeTop = document.getElementById('navbar');
let fade = document.getElementById('mainWrapper');

function fadeOut(elem, speed) 
{
    elem.style.opacity = 1;
    let outInterval = setInterval(function() 
    {
        elem.style.opacity -= 0.05;
        if (elem.style.opacity <= 0)
        {
			clearInterval(outInterval);
        }
	}, speed);
} 
document.getElementById("btnAccueil").addEventListener("click", function() 
{
    console.log('fadeOut');
    fadeOut(fade, 50);
    setTimeout(fadeOut(fadeTop, 100), 1000);
    setTimeout('location.href = "test.html"', 1500);
});
document.getElementById("btnApropos").addEventListener("click", function() 
{
    console.log('fadeOut');
    fadeOut(fade, 50);
    setTimeout(fadeOut(fadeTop, 100), 1000);
    setTimeout('location.href = "apropos.html"', 1500);
});
document.getElementById("btnContact").addEventListener("click", function() 
{
    console.log('fadeOut');
    fadeOut(fade, 50);
    setTimeout(fadeOut(fadeTop, 100), 1000);
    setTimeout('location.href = "contact.html"', 1500);
});

/*
 setTimeout('document.getElementById("btnAcceueil").style.display="none"', 100);
    setTimeout('document.getElementById("btnApropos").style.display="none"', 500);
    setTimeout('document.getElementById("btnBoutique").style.display="none"', 1000);    
    setTimeout('document.getElementById("btnBlog").style.display="none"', 1500);
    setTimeout('document.getElementById("btnContact").style.display="none"', 2000);
    setTimeout('document.getElementById("imageWrapper").style.display="none"', 2300);
    */