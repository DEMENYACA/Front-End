
document.getElementById("sub1").addEventListener("click",displayThankYou);

function displayThankYou(){
  document.getElementById("name").innerHTML = ThankYou();
} 



document.getElementById("sub2").addEventListener("click",displayGreatAge)

function displayGreatAge(){
  document.getElementById("age").innerHTML = GreatAge();

}
document.getElementById("sub3").addEventListener("click",displayGreatHobby)

function displayGreatHobby(){
  document.getElementById("hobby").innerHTML = GreatHobby();

}