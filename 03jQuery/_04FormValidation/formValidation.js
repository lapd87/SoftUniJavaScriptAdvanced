function validate() {

    let username = $("#username");
    let email = $("#email");
    let password = $("#password");
    let confirmPassword = $("#confirm-password");
    let companyCheckbox = $("#company");
    let companyInfo =$("#companyInfo");
    let companyNumber = $("#companyNumber");
    let submitBtn = $("#submit");
    let validDiv = $("#valid");

    let isValid = true;
    let hasCompany = false;

    companyCheckbox.on('change', function (e) {
        if (companyCheckbox.is(':checked')) {
            companyInfo.show();
            hasCompany = true;
        } else {
            companyInfo.hide();
            hasCompany = false;
        }
    });

    submitBtn.on('click', function (e) {
        e.preventDefault();

        validateFields();

        if (isValid) {
            validDiv.css("display", "block");
        } else {
            validDiv.css("display", "none");
        }
    });

    function validateFields() {
        if (hasCompany) {
            validateField(companyNumber, /^[1-9]\d{3}$/);
        }

        validateField(username, /^[A-Za-z\d]{3,20}$/);
        validateField(email, /^.*@.*\..*$/);
        validateField(password, /^[\w]{5,15}$/);
        validateField(confirmPassword, /^[\w]{5,15}$/);

        if (password.val() !== confirmPassword.val()) {
            confirmPassword.css("border-color", "red");
            password.css("border-color", "red");
            isValid = false;
        }

        function validateField(field, regex) {
            if (field.val().match(regex)) {
                field.css("border-color", "");
            } else {
                field.css("border-color", "red");
                isValid = false;
            }
        }
    }
}
