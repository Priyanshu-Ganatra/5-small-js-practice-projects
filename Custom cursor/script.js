let main = document.querySelector('#main')
let crsr = document.querySelector('.cursor')

main.addEventListener('mousemove', (e) => {
    crsr.style.left = e.x - 10  + 'px' 
    crsr.style.top = e.y - 10 + 'px'
})