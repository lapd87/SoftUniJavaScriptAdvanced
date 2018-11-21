function acceptance() {

    let shippingCompany = $("input[name*='shippingCompany']");
    let productName = $("input[name*='productName']");
    let productQuantity = $("input[name*='productQuantity']");
    let productScrape = $("input[name*='productScrape']");

    if (shippingCompany.val() !== ""
        && productName.val() !== ""
        && !isNaN(+productQuantity.val())
        && !isNaN(+productScrape.val())
        && +productQuantity.val() - +productScrape.val() > 0) {

        let text = `[${shippingCompany.val()}] ${productName.val()} - ${+productQuantity.val() - +productScrape.val()} pieces`;
        let button = $(`<button type="button">Out of stock</button>`)
            .on("click", function () {
                $(this.parentNode).remove()
            });

        let product = $(`<div>`)
            .append($(`<p>${text}</p>`))
            .append(button);

        console.log(product);
        $("#warehouse").append(product);

        shippingCompany.val('').blur();
        productName.val('').blur();
        productQuantity.val('').blur();
        productScrape.val('').blur();
    }
}

