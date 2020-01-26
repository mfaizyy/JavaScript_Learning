//This program tells about the logical operators 
//&& AND operator, all condition should be true to get into the executable code
//|| OR operator, any of the condition should be true to get into the executable code

let isVerified = false
let isLoggedin = true
let hasPaymentToken = true
let isGuest = false

if (isVerified && isLoggedin && hasPaymentToken) {
    console.log("Greeting message to the user,You have access to the couse")
} else if (isVerified || isGuest) {
    console.log("Hey allow free preview")
} else {
    console.log('MESSAGE: pleae contact to the admin')
}