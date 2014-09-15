Package.describe({
  summary: "stripe client side scripts for meteor",
  version: "1.0.0",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.add_files(['client/stripe_client.js', 'client/stripe_checkout.js'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('stratogee:stripe-client');
  api.addFiles('stratogee:stripe-client-tests.js');
});
