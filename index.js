// const scrSize = document.getElementById("wh");

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
const monthPrev = document.getElementById("monthPrev");
const yearPrev = document.getElementById("yearPrev");

//err msgs
const emptyNameMsg = document.getElementById("emptyNameMsg");
const emptyNumMsg = document.getElementById("emptyNumMsg");
const emptyDate = document.getElementById("emptyDate");
const emptycvc = document.getElementById("emptycvc");
const regExp = /^[0-9]+$/;

const form = document.getElementById("details-form");
const success = document.getElementById("success");
const validColor = "hsl(270, 3%, 87%)";
const errorColor = "hsl(0, 100%, 66%)";
const wrongFormatMsg = "Wrong format, Numbers only";

// function size () {
//     let h = window.innerHeight;H
//     let w = window.innerWidth;
//     scrSize.innerHTML = w + "x" + h + " wxh";
// }

//submit button
confButton.addEventListener("click", function() {

        if(cardName.value == "") {
            emptyNameMsg.innerHTML = "Can't be blank";
            cardName.style.borderColor = errorColor;
            
        } else {
            emptyNameMsg.innerHTML = "";
            cardName.style.borderColor = validColor;
        }
        
        if(cardNumber.value == ""){
            emptyNumMsg.innerHTML = "Can't be blank";
            cardNumber.style.borderColor = errorColor;
        } else if(cardNumber.value.match(regExp)) {
            emptyNumMsg.innerHTML = "";
            cardNumber.style.borderColor = validColor;
        } else {
            emptyNumMsg.innerHTML = wrongFormatMsg;
            cardNumber.style.borderColor = errorColor;
            
        }
    
        if(month.value == "" && year.value == "") {
        emptyDate.innerHTML = "Can't be blank";
        month.style.borderColor = errorColor;
        year.style.borderColor = errorColor;
        } else if(year.value !="" && month.value == "") {
            emptyDate.innerHTML = "Can't be blank";
            year.style.borderColor = validColor;
            month.style.borderColor = errorColor;
            
        } else if(year.value =="" && month.value != "") {
            emptyDate.innerHTML = "Can't be blank";
            year.style.borderColor = errorColor;
            month.style.borderColor = validColor;
        
        //date format checker 
        } else if(month.value != "" && year.value != "") {
            if(month.value.match(regExp) && year.value.match(regExp)) {
                emptyDate.innerHTML = "";
                month.style.borderColor = validColor;
                year.style.borderColor = validColor;
                
            } else  if(!month.value.match(regExp) && !year.value.match(regExp)) {
                emptyDate.innerHTML = "Wrong format,Numbers only";
                month.style.borderColor = errorColor;
                year.style.borderColor = errorColor;

            } else  if(!month.value.match(regExp)) {
                    emptyDate.innerHTML = "Wrong format,Numbers only";
                    month.style.borderColor = errorColor;
                    year.style.borderColor = validColor;

            } else if(!year.value.match(regExp)) {
                emptyDate.innerHTML = "Wrong format,Numbers only";
                year.style.borderColor = errorColor;
                month.style.borderColor = validColor;
            }
                    

        } else {
            emptyDate.innerHTML = "";
            month.style.borderColor = validColor;
            year.style.borderColor = validColor;
        }

        if(cvc.value == ""){
            emptycvc.innerHTML = "Can't be blank";
            cvc.style.borderColor = errorColor;
        } else if(!cvc.value.match(regExp)) {
            emptycvc.innerHTML = wrongFormatMsg;
            cvc.style.borderColor = errorColor;
        }
         else {
            emptycvc.innerHTML = "";
            cvc.style.borderColor = validColor;
        }

        if(cardName.value != "" && cardNumber.value != "" && month.value !="" && year.value != "" && cvc.value != "") 
        { if(!cardNumber.value.match(regExp) || !year.value.match(regExp) || !month.value.match(regExp) || !cvc.value.match(regExp)) {
            return;
            } else {
            confirmSuccess();}
        } else {
            console.log("somethign wrong");
            return;
        }

})

//continue /  resets page
contButton.addEventListener("click", function() {
    location.reload();
    success.style.display = "none"
})

function updateName() {
    cname.innerHTML = cardName.value;
}

cardNumber.addEventListener("keyup", function() {
    const cardNumPrevMatch = cardNumber.value;
    //adding spaces every 4 chars
    const updatePrevNum = cardNumPrevMatch.match(/.{1,4}/g);
    cardNumPreview.innerHTML = updatePrevNum.join(" ");

   })

month.addEventListener("keyup", function() {
    monthPrev.innerHTML = month.value;
   
})

year.addEventListener("keyup", function() {
    yearPrev.innerHTML = year.value;
})

cvc.addEventListener("keyup", function() {
    cvv.innerHTML = cvc.value;

})

function confirmSuccess() {
    form.style.display = "none";
    success.style.display = "flex";
    expDate.innerHTML = month.value + "/" + year.value;
    cvv.innerHTML = cvc.value;
}

