
//deposit btn
document.getElementById('deposit-btn').addEventListener('click', function(){

    //deposit option
    const inputFieldD =document.getElementById('input-Field-deposit').value
    const newAmount =parseFloat(inputFieldD)
    console.log(typeof newAmount)
    const depositTotal = document.getElementById('deposit').innerText
    const previousAmount = parseFloat(depositTotal)
    console.log(typeof previousAmount)
    const currentAmount = newAmount+previousAmount
    document.getElementById('deposit').innerText = currentAmount
    document.getElementById('input-Field-deposit').value = ''

    //get the balance total
    const balanceTotal = document.getElementById('balance').innerText
    const balanceNumber = parseFloat(balanceTotal)

    //balance set 
    const currentBalance = newAmount+balanceNumber
    console.log(currentBalance)
    document.getElementById('balance').innerText = currentBalance
})