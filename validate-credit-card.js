ValidateForm.addValidator('data-credit-card', function ($el, instance) {
    var value = $el.val().split(' ').join('');

    var Visa = /^4[0-9]{12}(?:[0-9]{3})?$/gm;
    var MasterCard = /^(5[1-5][0-9]{14}|3[47][0-9]{13})$/gm;
    var AmericanExpress = /^3[47][0-9]{13}?$/gm;
    var DinersClub = /^3(?:0[0-5]|[68][0-9])[0-9]{11}?/gm;
    var Discover = /^6(?:011|5[0-9]{2})[0-9]{12}?/gm;
    var JCB = /^(?:2131|1800|35\d{3})\d{11}?/gm;

    var creditCards = [Visa, MasterCard, AmericanExpress, DinersClub, Discover, JCB];

    var isValid = creditCards.some(function(creditCard) {
        return value.match(creditCard);
    });

    if (isValid) {
        instance._showSuccess();
        instance.log("[ValidateForm] credit card success", instance.el);
    } else {
        instance._showError("Credit card don't match.");
        instance.log("[ValidateForm] credit card failed", instance.el);
    }

    instance._validations.push(isValid);
});
