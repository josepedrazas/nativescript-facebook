﻿import * as application from 'application';
var nsFacebook = require('nativescript-facebook');

application.on(application.launchEvent, function (args) {
    nsFacebook.init("1771472059772879");
});

application.start({ moduleName: "main-page" });

