const scrSize = document.getElementById("wh");

// buttons (confirm)
const contButton = document.getElementById("continue");
const confButton = document.getElementById("button");

//card inputs
const cardName = document.getElementById("cardName");
const cardNumber = document.getElementById("cardNumber");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");

//card preview
const cname = document.getElementById("name");
const cardNumPreview = document.getElementById("cardNumPreview");
const expDate = document.getElementById("expDate");
const cvv = document.getElementById("cvv");

const form = document.getElementById("details-form");
const success = document.getElementById("success")

function size () {
    let h = window.innerHeight;
    let w = window.innerWidth;
    scrSize.innerHTML = w + "x" + h + " wxh";
}

//submit button
confButton.addEventListener("click", function() {
    form.style.display = "none";
    success.style.display = "flex";
    cname.innerHTML = cardName.value;
    cardNumPreview.innerHTML = cardNumber.value;
    expDate.innerHTML = month.value + "/" + year.value;
    cvv.innerHTML = cvc.value;
})

//continue /  resets page
contButton.addEventListener("click", function() {
    location.reload();
    success.style.display = "none"
})



