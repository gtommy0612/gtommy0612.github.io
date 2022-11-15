var btn = document.getElementById('btn');
const toggleBtnRight = document.getElementsByClassName('toggle-btn-right');
const toggleBtnLeft = document.getElementsByClassName('toggle-btn-left');

function leftClick() {
	btn.style.left = '0px'
}

function rightClick() {
	btn.style.left = '68px'
}