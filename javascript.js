//Make Toast notification work
const button = document.getElementById("submitBaby");
const toastElement = document.getElementById("formToast")

const toast = new bootstrap.Toast(toastElement);

button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("I'm triggered");
    toast.show();
    
});

//Make an array for baby names and attributes


let twoDimensionalArray = [["Little Timmy", "Sally", "Bert", "Sal Monilla", "Helga", "Galaknor the Destroyer"], ["Male", "Female", "Male", "Male", "Female", "N/A"], ["no belly button", "smells bad", "bald", "gross egg-shaped head", "unibrow", "⸸ ⚚ ☍ ⌖ ⍟ ✠ ⚶ 𓂀 𐍈 ꙮ"]];
console.log(twoDimensionalArray);


//allow users to add to the array (PUSH)
let babyName = document.getElementById("nameForm");
console.log(nameform);

/* string manipulation of the user input
    take data from foundBabiesForm
    nameForm genderForm notableFeaturesForm
    trim off extra spaces(trim), modify casing, and handle exceptions(gender)
*/

//email validation
const emailValidation = (email) =>{  
    return email.includes("@") && email.includes(".") ? email : "email not valid";  
} 
// test email
console.log(emailValidation("[hamburger@cheeseburger.com](mailto:hamburger@cheeseburger.com)"));  
console.log("email part ran");



//allow users to add to the array (PUSH)