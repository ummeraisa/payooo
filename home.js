// add money
const validPin = 1234

document.getElementById("add-money-btn").addEventListener("click", function(e){
    e.preventDefault()
    const bankName = document.getElementById("bank").value
    const addAccount = parseInt(document.getElementById("account-number").value)
    const addAmount = parseInt(document.getElementById("add-amount").value) ;
    const pinNumber = document.getElementById("pin-number").value;
    const currentBalance = parseInt(document.getElementById("current-balance").innerText)

 if(addAccount.length < 11){
    alert("please enter valid number")
    return;
 }

 if(pinNumber !== validPin){
    alert("emne hoibo na bondhu")
    return;
 }

    const newTotalCurrentBalance = addAmount + currentBalance
    document.getElementById("current-balance").innerText = newTotalCurrentBalance
    console.log(newTotalCurrentBalance)
})




// cash out money
const cashOutPin = 12345
document.getElementById("withdraw-money-btn").addEventListener("click", function(e){
    e.preventDefault()
    const withdrawAccount = parseInt(document.getElementById("withdraw-account").value)
    const withdrAmount = parseInt(document.getElementById("withdraw-amount").value)
    const withdrawPin = document.getElementById("withdraw-pin").value
    const currentBalance = parseInt(document.getElementById("current-balance").innerText)

    if(withdrawAccount.length < 11){
        alert("11 digit lagbe mama")
        return;
    }

    if(withdrawPin !== cashOutPin){
        alert("5 digit daw bondhu")
        return;
    }

const newTotalCurentbalance = currentBalance - withdrAmount 
document.getElementById("current-balance").innerText = newTotalCurentbalance
console.log(newTotalCurentbalance)
})



// toggole 

document.getElementById("add-money-btn").addEventListener("click", function(){
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
})
document.getElementById("cash-out-btn").addEventListener("click", function(){
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
})