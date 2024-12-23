let btn = document.querySelector("button")
function sayHi() {
    alert('Привет');
    btn.style.display = "none"
  }
btn.addEventListener('click', function(){
    anime({
        targets: 'button',
        keyframes: [
            {borderRadius: 0},
            {borderRadius: '50% 50%'},
            {borderRadius: '50% 20%'},
            {borderRadius: '20% 20%'},
            {borderRadius: '50% 50%'},
            {borderRadius: '0% 0%'}
        ],
        duration: 2000,
        easing: 'linear',
    })
    
      
      setTimeout(sayHi, 2000);
      let img = document.querySelector(".img")
      img.style.display = "none"

      
})
