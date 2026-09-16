// loginBtn functonality
document.getElementById("login-btn").addEventListener("click",function(e){
    e.preventDefault();
    const mobileNumber=123456789
    const pinNumber = 1234
  const mobileNumberValue = document.getElementById("mobile-number").value
  const mobilNumberValueConvert= parseInt(mobileNumberValue);

  const pinNumberValue=document.getElementById("pin-number").value
  const pinNumberValueConvert = parseInt(pinNumberValue)
    
  if(mobilNumberValueConvert === mobileNumber
    && pinNumberValueConvert === pinNumber
  ){
    window.location.href="./homePage.html"
  }
  else{
   alert("vul hoiseeee mammaaaa")
  }
})