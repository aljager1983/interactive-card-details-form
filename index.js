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

// function size () {
//     let h = window.innerHeight;
//     let w = window.innerWidth;
//     scrSize.innerHTML = w + "x" + h + " wxh";
// }

//submit button
confButton.addEventListener("click", function() {

        if(cardName.value == "") {
            emptyNameMsg.innerHTML = "Can't be blank";
            cardName.style.borderColor = "red";
            
        } else {
            emptyNameMsg.innerHTML = "";
            cardName.style.borderColor = "hsl(270, 3%, 87%)";
        }
        
        if(cardNumber.value == ""){
            emptyNumMsg.innerHTML = "Can't be blank";
            cardNumber.style.borderColor = "red";
        } else if(cardNumber.value.match(regExp)) {
            emptyNumMsg.innerHTML = "";
            cardNumber.style.borderColor = "hsl(270, 3%, 87%)";
        } else {
            emptyNumMsg.innerHTML = "Wrong format, Numbers only";
            cardNumber.style.borderColor = "red";
            
        }
    
        if(month.value == "" && year.value == "") {
        emptyDate.innerHTML = "Can't be blank";
        month.style.borderColor = "red";
        year.style.borderColor = "red";
        } else if(year.value !="" && month.value == "") {
            emptyDate.innerHTML = "Can't be blank";
            year.style.borderColor = "hsl(270, 3%, 87%)";
            month.style.borderColor = "red";
            
        } else if(year.value =="" && month.value != "") {
            emptyDate.innerHTML = "Can't be blank";
            year.style.borderColor = "red";
            month.style.borderColor = "hsl(270, 3%, 87%)";
        
        //date format checker 
        

        
        // } else if(regExp.test(month.value) && regExp.test(year.value)) {
        //     emptyDate.innerHTML = "Wrong format, Numbers only";
        //     month.style.borderColor = "red";
        //     year.style.borderColor = "red";
        
        
        // } else if(regExp.test(month.value)) {
        //     emptyDate.innerHTML = "Wrong format,Numbers only";
        //     month.style.borderColor = "red";
        // }else if(regExp.test(year.value)) {
        //     emptyDate.innerHTML = "Wrong format,Numbers only";
        //     year.style.borderColor = "red";
        //     console.log("error");
        } else if(month.value != "" && year.value != "") {
            if(month.value.match(regExp) && year.value.match(regExp)) {
                emptyDate.innerHTML = "";
                month.style.borderColor = "hsl(270, 3%, 87%)";
                year.style.borderColor = "hsl(270, 3%, 87%)";
                
            } else  if(!month.value.match(regExp) && !year.value.match(regExp)) {
                emptyDate.innerHTML = "Wrong format,Numbers only";
                month.style.borderColor = "red";
                year.style.borderColor = "red";

            } else  if(!month.value.match(regExp)) {
                    emptyDate.innerHTML = "Wrong format,Numbers only";
                    month.style.borderColor = "red";
                    year.style.borderColor = "hsl(270, 3%, 87%)";

            } else if(!year.value.match(regExp)) {
                emptyDate.innerHTML = "Wrong format,Numbers only";
                year.style.borderColor = "red";
                month.style.borderColor = "hsl(270, 3%, 87%)";
            }
                    
                

        } else {
            emptyDate.innerHTML = "";
            month.style.borderColor = "hsl(270, 3%, 87%)";
            year.style.borderColor = "hsl(270, 3%, 87%)";
        }


       
       

        
        if(cvc.value == ""){
            emptycvc.innerHTML = "Can't be blank";
            cvc.style.borderColor = "red";
        }

        if(cardName.value != "" && cardNumber.value != "" && month.value !="" && year.value != "" && cvc.value != "") 
        { if(regExp.test(cardNumber.value) || regExp.test(year.value) || regExp.test(month.value) || regExp.test(cvc.value)) {
            return;
            } else {
            confirmSuccess();}
        } else {
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

    //trim / limit the inputs
    if(cardNumber.value.length > 16) {
        cardNumber.value = cardNumber.value.slice(0, 15)
        // cardNumPrevMatch.slice(0,16);
    }
    
    console.log(cardNumPrevMatch);
})

month.addEventListener("keyup", function() {
    monthPrev.innerHTML = month.value;
   
})

year.addEventListener("keyup", function() {
    yearPrev.innerHTML = year.value;
})

cvc.addEventListener("keyup", function() {
    cvv.innerHTML = cvc.value;

    
     if(regExp.test(cvc.value)) {
        emptycvc.innerHTML = "Wrong format, Numbers only";
        cvc.style.borderColor = "red";
    }
     else {
        emptycvc.innerHTML = "";
        cvc.style.borderColor = "hsl(270, 3%, 87%)";
        console.log("no error for cvc regex test");
    }

})

function confirmSuccess() {
    form.style.display = "none";
    success.style.display = "flex";
    expDate.innerHTML = month.value + "/" + year.value;
    cvv.innerHTML = cvc.value;
}

