

// with-draw option 
document.getElementById('withDraw-Btn').addEventListener('click', function(){
    // get the  all Element 
    const withDrawFieldString = document.getElementById('withDrawField').value
    const withDrawFieldNumber = parseFloat(withDrawFieldString)
    const withDrawDisplayString = document.getElementById('withDraw').innerText
    const withDrawDisplayNumber = parseFloat(withDrawDisplayString)
    const totalWithDraw = withDrawDisplayNumber+withDrawFieldNumber 
    // set the value 
    document.getElementById('withDraw').innerText = totalWithDraw



    // balance
    const balanceTotal = document.getElementById('balance').innerText
    const balanceNumber = parseFloat(balanceTotal)
    const mainBalance = balanceNumber-totalWithDraw
    document.getElementById('balance').innerText = mainBalance
    document.getElementById('withDrawField').value = ''
})