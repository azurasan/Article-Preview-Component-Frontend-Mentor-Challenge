const iconShare = document.querySelector('.icon-share');
const share = document.querySelector('.share');
const author = document.querySelector('.author');
const right = document.querySelector('.right');

iconShare.addEventListener('click',function(){
    iconShare.classList.toggle('active');
    right.classList.toggle('active');
    share.classList.toggle('active');
});