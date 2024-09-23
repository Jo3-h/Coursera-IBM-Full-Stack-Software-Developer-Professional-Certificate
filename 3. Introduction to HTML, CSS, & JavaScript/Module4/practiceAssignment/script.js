function updateRate() {

    // retrieve current rate value
    var rateval = document.getElementById("rate").value
    document.getElementById("rate_val").innerText = rateval

}

function compute() {

    // initialise variables 
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementById("result");
    var year = new Date().getFullYear() + parseInt(years);

    // validate input to principle field
    if (principal <= 0){
        alert("Please enter valid principle");
        document.getElementById("principle").focus();
    } else {
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
    }

    
}
        