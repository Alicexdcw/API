const shareButton = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const shareModal = document.querySelector('.share');

const title = window.document.title;
const url = window.document.location.href;

shareButton.addEventListener('click',()=>{
    if(navigator.share){
        navigator.share({
            title:`$(title)`,
            url:`$(url)`
        }).then(()=>{
            console.log('Thanks for sharining!');
        })
        .catch(console.error);
    }else{
        overlay.classList.add('show-share');
        shareModal.classList.add('show-share');
    }
})