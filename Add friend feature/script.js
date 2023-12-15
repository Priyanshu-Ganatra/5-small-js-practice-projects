let statuss = document.querySelector('h5')
let add = document.querySelector('#add')
let check = 0

add.addEventListener('click', () => {
    if (check == 0) {
        statuss.innerHTML = 'Friend'
        statuss.style.color = 'green'
        check = 1
        add.innerHTML = 'Remove Friend'
        add.style.backgroundColor = '#dadada'
        add.style.color = '#000'
    } else {
        statuss.innerHTML = 'Stranger'
        statuss.style.color = 'red'
        add.innerHTML = 'Add Friend'
        add.style.backgroundColor = 'cadetblue'
        check = 0
    }
})

