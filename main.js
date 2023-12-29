let myImg = document.querySelector("#slideshow")
let images = ['pics/1.jpg', 'pics/2.png', 'pics/3.jpg', 'pics/4.jpg']
let i = 0

function slideshow() {
    myImg.setAttribute('src', images[i])

    if( i == images.length - 1 ) {
        i=0
    } else{
        i++
    }
    setTimeout(function() {
        slideshow()
    }, 2000)
}
slideshow()
