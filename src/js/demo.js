const like = document.querySelector('.like')
const svg = document.querySelector('.svg')

like.addEventListener ('click', () => {
    console.log('clicou');
    svg.style.fill = '#CF3031'
   
})
console.log(like);
