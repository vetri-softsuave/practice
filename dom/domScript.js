const foot = document.querySelector('.football');
const basketBall = document.querySelector('.basketball');
const cricket = document.querySelector('.cricket');
const tennis = document.querySelector('.tennis');
const boxing = document.querySelector('.boxing');

foot.addEventListener('click', changeBackground);
basketBall.addEventListener('click',changeBackground);
cricket.addEventListener('click',changeBackground);
tennis.addEventListener('click', changeBackground);
boxing.addEventListener('click',changeBackground);

function changeBackground(element){
    console.log(element.target.innerText," clicked");
    element.target.style.backgroundColor = 'lightgrey';

}