const button = document.querySelectorAll('.btn')
const submitBtn = document.getElementById('submit')
const back = document.getElementById('backPage')
const rate = document.getElementById('rate')

button.forEach((btn) =>{
    btn.addEventListener('click', () => {
        getRate(btn.value)

    })
})

function getRate(btn) {
    rate.innerText = btn
   
    submitBtn.addEventListener('click', () =>{
        back.classList.add('active')
        
    })
}