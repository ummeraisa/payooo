// add money
const validPin = 1234
const transactionData = [];




// get input value
function getInputValue(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue ;
}

// get input field values number
function getInputValueNumber(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
    return inputFieldValueNumber ;
}


// get input value innertext
function getInnerText(id){
    const element = document.getElementById(id)
    const elementInnerText = element.innerText
    const elementInnerTextNumber = parseInt(elementInnerText)
    return elementInnerTextNumber ;
}


// inner text set
function setInnerText(value){
    const currentValue = document.getElementById("current-balance")
    currentValue.innerText = value;
}


// function toggole
function toggoleHandlerSet(id){
const forms = document.getElementsByClassName("form")


  for(const form of forms){
  form.style.display = "none"
  }

  document.getElementById(id).style.display = "block"
}


// card btn toggole style
function btnToggoleStyle(id){
    const cardButtons = document.getElementsByClassName("card-btn")


    for(const btn of cardButtons){
        btn.classList.remove("border-[#0874F2]","bg-[#e6ecf3]")
        btn.classList.add("border-gray-300");
    }


    document.getElementById(id).classList.remove("border-gray-300");
    document.getElementById(id).classList.add("border-[#0874F2]" , "bg-[#e6ecf3]");

}

// add money
document.getElementById("add-money-btn").addEventListener("click", function(e){
    e.preventDefault()
    const bankName = getInputValue("bank");
    const addAccount = getInputValue("account-number");
    const addAmount = getInputValueNumber("add-amount");

     if(addAmount <= 0){
        alert("invalid add amount")
        return;
     }

    const pinNumber = getInputValueNumber("pin-number")
    const currentBalance = getInnerText("current-balance")

 if(addAccount.length < 11){
    alert("please enter valid number")
    return;
 }

 if(pinNumber !== validPin){
    alert("Enter valid pin")
    return;
 }

    const newTotalCurrentBalance = addAmount + currentBalance
    setInnerText(newTotalCurrentBalance)

   const data = {
    name:"Add Money",
    date:new Date().toLocaleTimeString()
   }

   transactionData.push(data); 
   console.log(transactionData);
})


// cash out money
const cashOutPin = 12345
document.getElementById("withdraw-money-btn").addEventListener("click", function(e){
    e.preventDefault()
    const withdrawAccount = getInputValue("withdraw-account")
    const withdrAmount = getInputValueNumber("withdraw-amount")
    const currentBalance = getInnerText("current-balance")

   if(withdrAmount <= 0 || withdrAmount > currentBalance){
    alert("invalid withdraw amount")
    return;
   }

    const withdrawPin = getInputValueNumber("withdraw-pin")

    if(withdrawAccount.length < 11){
        alert("11 digit lagbe mama")
        return;
    }

    if(withdrawPin !== cashOutPin){
        alert("Enter valid pin")
        return;
    }

const newTotalCurentbalance = currentBalance - withdrAmount 
setInnerText(newTotalCurentbalance)


   const data = {
    name:"Cash Out",
    date:new Date().toLocaleTimeString()
   }

   transactionData.push(data); 
 console.log(transactionData)
})



// transaction
document.getElementById("transaction-card").addEventListener("click",function(){
    const transactionContainer = document.getElementById("transaction-container")
      transactionContainer.innerText = ""

    for(const data of transactionData){
        const div = document.createElement("div")


        div.innerHTML = `

        <div class=" flex justify-between  bg-white p-3 rounded-2xl my-4">
            <!-- left  -->
            <div class="flex items-center">
                <div class=" p-3 rounded-full bg-[#e6ecf3]"> 
                <img src="./images/wallet1.png" alt=""class="mx-auto">
                </div>

                <!-- left text -->
                <div class="ml-3">
                <h1 class="text-[16px] font-bold text-[#080808]">${data.name}</h1>
                 <p>${data.date}</p>
                </div>
            </div>

             <i class="fa-solid fa-ellipsis rotate-90 mr-3"></i>
        </div>


        `

        transactionContainer.appendChild(div)
    }
})



// toggole 

document.getElementById("add-money-card").addEventListener("click", function(){
toggoleHandlerSet("add-money-parent");
btnToggoleStyle("add-money-card");
})

// cash out
document.getElementById("cash-out-card").addEventListener("click", function(){
  toggoleHandlerSet("cash-out-parent");
  btnToggoleStyle("cash-out-card")
})

// transfer 
document.getElementById("treansfer-card").addEventListener("click", function(){
    toggoleHandlerSet("transfer-money-parent");
    btnToggoleStyle("treansfer-card")
})

    

// get bonus
document.getElementById("bonus-card").addEventListener("click", function(){
toggoleHandlerSet("get-bonus-parent");
btnToggoleStyle("bonus-card")
})



// pay bill
document.getElementById("bill-card").addEventListener("click", function(){
toggoleHandlerSet("get-bill-parent");
btnToggoleStyle("bill-card")
})


// transaction
document.getElementById("transaction-card").addEventListener("click", function(){
toggoleHandlerSet("transaction-parent");
btnToggoleStyle("transaction-card")
})