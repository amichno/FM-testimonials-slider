function Toggler(){
    const text1 = document.querySelector('.text_1');
    const text2 = document.querySelector('.text_2');
    const photo = document.querySelector('.photo');

    const text1DisplayCSS = window.getComputedStyle(text1).display;
    const text2DisplayCSS = window.getComputedStyle(text2).display;
    const photoURLBackground = window.getComputedStyle(photo).backgroundImage;


    if(text1DisplayCSS == "block")
    {   
        text1.style.display = "none";
        text2.style.display = "block";
        photo.style.backgroundImage = "url(images/image-john.jpg)";
    }
    else
    {
        if(text2DisplayCSS == "block")
        {
            text1.style.display = "block"
            text2.style.display = "none";
            photo.style.backgroundImage = "url(images/image-tanya.jpg)";
        }
    }
   
}