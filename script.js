document.addEventListener("DOMContentLoaded", function() {
    // FORM HANDLING (index.html)
    let form = document.getElementById("main-form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form refresh

            let firstName = document.getElementById("firstName").value.trim();
            let lastName = document.getElementById("lastName").value.trim();
            let email = document.getElementById("email").value.trim();
            let address = document.getElementById("address").value.trim();
            let city = document.getElementById("city").value.trim();
            let province = document.getElementById("province").value.trim();
            let membership = document.querySelector("input[name='membership']:checked").value;

            if (!firstName || !lastName || !email || !address || !city || !province) {
                alert("Please fill in all required fields.");
                return;
            }

            document.getElementById("output").innerHTML = `
                <p><strong>Full Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Address:</strong> ${address}, ${city}, ${province}</p>
                <p><strong>Membership:</strong> ${membership}</p>`;
        });
    }

    // CALCULATOR FUNCTION (excel.html)
    let calcBtn = document.getElementById("calculateBtn");
    if (calcBtn) {
        calcBtn.addEventListener("click", function() {
            let numbersStr = document.getElementById("numbers").value.trim();

            if (!numbersStr) {
                alert("Please enter numbers.");
                return;
            }

            
            let numberArr = numbersStr.split(/\s+/).map(Number).filter(n => !isNaN(n));

            if (numberArr.length === 0) {
                alert("Please enter valid numbers.");
                return;
            }

            let selectedFunction = document.querySelector("input[name='function']:checked").value;
            let result;

            if (selectedFunction === "sum") {
                result = numberArr.reduce((acc, num) => acc + num, 0);
            } else if (selectedFunction === "average") {
                result = numberArr.reduce((acc, num) => acc + num, 0) / numberArr.length;
            } else if (selectedFunction === "max") {
                result = Math.max(...numberArr);
            } else {
                result = Math.min(...numberArr);
            }

            document.getElementById("result").innerHTML = `<strong>Result:</strong> ${result}`;
        });
    }
});
