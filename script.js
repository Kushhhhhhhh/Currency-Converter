// Light / Dark Mode

let curr_mode = 'light';
let mode_btn = document.querySelector('.mode');
mode_btn.addEventListener('click', () => {
    if (curr_mode == 'light') {
        curr_mode = 'dark';
        document.querySelector('body').style.backgroundColor = '#293321';
        document.getElementsByClassName('container')[0].style.backgroundColor = '#629460';
        document.querySelector('body').style.color = '#fff';
    } else {
        curr_mode = 'light';
        document.querySelector('body').style.backgroundColor = '#629460';
        document.getElementsByClassName('container')[0].style.backgroundColor = '#293321';
    }
})

