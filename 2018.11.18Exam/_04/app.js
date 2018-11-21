function realEstateAgency() {
    let message = $("#message");

    let regOfferButton = $("button[name*='regOffer']");
    regOfferButton.on('click', function (e) {

        let apartmentRent = $("input[name*='apartmentRent']");
        let apartmentType = $("input[name*='apartmentType']");
        let agencyCommission = $("input[name*='agencyCommission']");

        let apartmentRentValue = +apartmentRent.val();
        let agencyCommissionValue = +agencyCommission.val();
        let apartmentTypeValue = apartmentType.val();

        if (isNaN(apartmentRentValue)
            || apartmentRentValue <= 0
            || isNaN(agencyCommissionValue)
            || agencyCommissionValue < 0
            || agencyCommissionValue > 100
            || apartmentTypeValue === ""
            || apartmentTypeValue.includes(":")) {

            message.text('Your offer registration went wrong, try again.');
        } else {
            let building = $("#building");

            let offer = $("<div class='apartment'>")
                .append($("<p>")
                    .text(`Rent: ${apartmentRentValue}`))
                .append($("<p>")
                    .text(`Type: ${apartmentTypeValue}`))
                .append($("<p>")
                    .text(`Commission: ${agencyCommissionValue}`));

            building.append(offer);

            message.text('Your offer was created successfully.');
        }

        apartmentRent.val('').blur();
        apartmentType.val('').blur();
        agencyCommission.val('').blur();
    });


    let findOfferButton = $("button[name*='findOffer']");
    findOfferButton.on('click', function (e) {

        let familyBudget = $("input[name*='familyBudget']");
        let familyApartmentType = $("input[name*='familyApartmentType']");
        let familyName = $("input[name*='familyName']");

        let familyBudgetValue = +familyBudget.val();
        let familyApartmentTypeValue = familyApartmentType.val();
        let familyNameValue = familyName.val();

        if (isNaN(familyBudgetValue)
            || familyBudgetValue <= 0
            || familyApartmentTypeValue === ""
            || familyNameValue === "") {

            message.text('We were unable to find you a home, so sorry :(');
        } else {
            let offers = $(".apartment");

            let isFound = false;
            for (let offer of offers) {
                if (isFound) {
                    break;
                }

                let offerData = offer.childNodes;

                let apartmentRent = +$(offerData[0]).text()
                    .split(": ")[1];
                let apartmentType = $(offerData[1]).text()
                    .split(": ")[1].trim();
                let agencyCommission = +$(offerData[2]).text()
                    .split(": ")[1];

                let budgetNeeded = apartmentRent + apartmentRent * agencyCommission / 100;

                let isMatch = true;

                if (apartmentType !== familyApartmentTypeValue
                    || budgetNeeded > familyBudgetValue) {
                    isMatch = false;
                }

                if (isMatch) {
                    let profit = $("#roof > h1");

                    let profitValue = +profit.text()
                        .split(": ")[1]
                        .split(" lv.")[0];

                    profitValue += 2 * apartmentRent * agencyCommission / 100;

                    profit.text(`Agency profit: ${profitValue} lv.`);

                    let buttonMoveOut = $("<button>");
                    buttonMoveOut.text("MoveOut");


                    console.log(buttonMoveOut);

                    buttonMoveOut.on("click", function () {

                        $(this).parent('div').remove();

                        message.text(`They had found cockroaches in ${familyNameValue}'s apartment`);

                    });

                    let newOffer = $(`<div class="apartment" style="border: 2px solid red;">`)
                        .append($("<p>")
                            .text(`${familyNameValue}`))
                        .append($("<p>")
                            .text(`live here now`))
                        .append(buttonMoveOut);

                    $(offer).replaceWith(newOffer);

                    isFound = true;
                    break;
                }
            }

            if (!isFound) {
                message.text('We were unable to find you a home, so sorry :(');
            } else {
                message.text('Enjoy your new home! :))');
            }

        }

        familyBudget.val('').blur();
        familyApartmentType.val('').blur();
        familyName.val('').blur();
    });
}