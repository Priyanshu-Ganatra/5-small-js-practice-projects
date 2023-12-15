// let elem1 = document.querySelector('#elem1')
// let elemimg = document.querySelector('#elem1 img')

// elem1.addEventListener('mousemove', (e) => {
//     elemimg.style.left = e.x + 'px'
//     elemimg.style.top = e.y + 'px'
// })

// elem1.addEventListener('mouseenter', (e) => {
//     elemimg.style.opacity = '1'
// })

// elem1.addEventListener('mouseleave', (e) => {
//     elemimg.style.opacity = '0'
// })

let elem = document.querySelectorAll('.elem')

elem.forEach((val) => {
    val.addEventListener('mouseenter', (e) => {
        val.childNodes[3].style.opacity = 1
    })
    val.addEventListener('mouseleave', (e) => {
        val.childNodes[3].style.opacity = 0
    })
    val.addEventListener('mousemove', (e) => {
        val.childNodes[3].style.left = e.x + 'px'
        // val.childNodes[3].style.top = e.y + 'px'
    })
})