cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.splashscreen/www/splashscreen.js",
        "id": "org.apache.cordova.splashscreen.SplashScreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/InAppBrowser.js",
        "id": "org.apache.cordova.inappbrowser.InAppBrowser",
        "clobbers": [
            "window.open"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.PhoneDialer/www/PhoneDialer.js",
        "id": "org.apache.cordova.PhoneDialer.PhoneDialer",
        "clobbers": [
            "navigator.PhoneDialer"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.EmailComposer/www/EmailComposer.js",
        "id": "org.apache.cordova.EmailComposer.EmailComposer",
        "clobbers": [
            "navigator.EmailComposer"
        ]
    }
]
});