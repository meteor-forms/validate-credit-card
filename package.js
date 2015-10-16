Package.describe({
    name: 'forms:validate-credit-card',
    version: '0.0.1',
    summary: 'Validate Credit Card Fields in Meteor Forms',
    git: 'https://github.com/meteor-forms/validate-credit-card',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.0.2');
    api.use(['skinnygeek1010:validate-form@1.0.0']);
    api.export('ValidateForm', 'client');
    api.addFiles('validate-credit-card.js', 'client');
});

Package.onTest(function(api) {
    api.use('tinytest');
    api.use('forms:validate-credit-card');
    api.addFiles('validate-credit-card-tests.js');
});
