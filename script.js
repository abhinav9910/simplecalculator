const screen = document.querySelector('.screen');
const theme = document.querySelector('.toggle-theme');
const themeText = document.querySelector('.theme-text');
const body = document.querySelector('body');
const section = document.querySelector('section');
const btn = document.querySelectorAll('.btn');
const btnNum = document.querySelectorAll('.btn-num');
const name = document.querySelector('.name');

const display = (val) => {
	screen.value+=val;
}
const solve = () => {
	let x = screen.value;
	let y = eval(x);
	screen.value = y;
}
const clr = () => {
	screen.value = "";
}
const themeChange = () => {
	if(theme.checked == true) {
		themeText.innerHTML = "Light";
		themeText.style.color = "#222"
		body.style.background = "#D3E1F7";
		section.style.background = "linear-gradient(315deg, #eef9ff, #c8d2e3)";
		section.style.boxShadow = "-14px -14px 28px #818792, 14px 14px 28px #999999";
		screen.style.background = "linear-gradient(315deg, #c2d1b5, #a3b098)";
		screen.style.boxShadow = " -5px -5px 10px #697162, 5px 5px 10px #fffff0";
		screen.style.border = "5px solid #797F78";
		screen.style.color = "#222222";
		for (var i=0; i<btn.length; i++) {
			btn[i].style.background = "linear-gradient(45deg, #f9ffff, #d2d9e3)";
			btn[i].style.boxShadow = "9px -9px 18px #6b6f74, -9px 9px 18px #eeeeee";
		}
		for (var i=0; i<btnNum.length; i++)	{
			btnNum[i].style.color = "#658EFF";
		}		
		name.style.color = "#851bcb";
	} else {
		themeText.innerHTML = "Dark";
		themeText.style.color = "#eee"
		body.style.background = "#000079";
		section.style.background = "linear-gradient(315deg, #000081, #00006d)";
		section.style.boxShadow = "-14px -14px 28px #000030, 14px 14px 28px #0000c2";
		screen.style.background = "linear-gradient(315deg, #252532, #2c2c3c)";
		screen.style.boxShadow = " -5px -5px 10px #121218, 5px 5px 10px #404058";
		screen.style.border = "5px solid #797F78";
		screen.style.color = "#eeeeee";
		for (var i=0; i<btn.length; i++) {
			btn[i].style.background = "linear-gradient(45deg, #000081, #00006d)";
			btn[i].style.boxShadow = " 9px -9px 18px #000056, -9px 9px 18px #00009c";
		}
		for (var i=0; i<btnNum.length; i++)	{
			btnNum[i].style.color = "#aeaeae";
		}
		name.style.color = "#00ffff";
	}
} 