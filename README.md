#Traveller Character Generator

Open source character generator for the Traveller RPG system (2008). Built in React - server-side uses CodeIgniter.

*I know what you're thinking -- PHP?! What is this, 2005?* 

I don't pretend to be a backend developer, and I like CI's Helper classes: deal with it.

##To run app
Assumming you have PHP configured correctly, the app will be available in the root `/` index (default route in CI). See `application/views/app.php` for details.

Note: you will have to update the `base_url` config in `application/config/config.php` before it will run.

##App code 
Located in `client/core`. Run `npm install` then `webpack` in parent dir to compile.

##To run tests
Uses Jasmine located in `client/core/tests`. Run `webpack` in test dir to compile.

Jasmine SpecRuner GUI available at: `[root]/client/core/test/SpecRunner.html`
