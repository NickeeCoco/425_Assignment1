b13 = true;
b10 = false;
cost = true;

function checkValue() {
    let price = document.getElementById('price').value;
    // get value of price from form
    // If price < 50 && >500 error display
    let errorCost;
    if (price < 50 && price !== 0 || price > 500 && price !== 0) {
        errorCost = "The Price must be between 50.00$ and 500.00$";
        document.getElementById("cost").innerHTML = errorCost;
        return false;
    } else {
        errorCost = " ";
        document.getElementById("cost").innerHTML = errorCost;
        return true;
    }
}

function testB10() {
    let isbn10 = document.getElementById("ISBN10").value;
    // Get the value of the input field with id="ISBN10"
    let len10 = isbn10.length;
    error10;
    // If x is Not a Number or less than one or greater than 10
    if (len10 === 0) {
        error10 = "ISBN-10 is mandatory. Please enter a 10 digits.";
        document.getElementById("error10").innerHTML = error10;
        b10 = false;
        return;
    }
    if (len10 !== 10) {
        error10 = "You have entered " + len10 + " digits. Please enter 10.";
        document.getElementById("error10").innerHTML = error10;
        b10 = false;
        return;
    }
    if (len10 === 10) {
        error10 = "All Good " + isbn10 + " " + len10;
        document.getElementById("error10").innerHTML = error10;
        b10 = true;

    }
}

function testB13() {
    let isbn13 = document.getElementById("ISBN13").value;
    // Get the value of the input field with id="ISBN10"
    let len13 = isbn13.length;
    let error13;
    if (isbn13 === null || len13 === 0) {
        error13 = "";
        b13 = true;
        document.getElementById("error13").innerHTML = error13;
        return;
    }
    if (len13 === 13) {
        error13 = " " + b13 + b10 + cost;
        document.getElementById("error13").innerHTML = error13;
        b13 = true;
        return;
    }
    if (len13 !== 13) {
        error13 = "You have entered " + len13 + " digits. Please enter 13.";
        document.getElementById("error13").innerHTML = error13;

    }

}

function submitForm() {
    if (!(b13 && b10 && cost)) {
        document.getElementById("bookForm").addEventListener("submit", function (forSub) {
            forSub.preventDefault();
            errorForm = "Please verify all of your entries. " + cost + " " + b10 + " " + b13;
            document.getElementById("errorForm").innerHTML = errorForm;
        }, false);
    }
}