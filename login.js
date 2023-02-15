


//form element
const emailField = document.getElementById('email')
const passField = document.getElementById('pass')
const btn = document.getElementById('btn').addEventListener('click', function(){
   if(emailField.value === 'baperhotel@ggg' && passField.value ==='ok'){
    console.log('vallid')
    window.location.href = 'http://127.0.0.1:5500/bank.html'
   }else{
    alert('invalid user')
   }
})