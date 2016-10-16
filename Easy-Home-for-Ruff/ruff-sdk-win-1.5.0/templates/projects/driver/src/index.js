'use strict';

var Level = require('gpio').Level;
var driver = require('ruff-driver');

module.exports = driver({
    /**
     * @param {Object} inputs A map of assigned interfaces according to `driver.json`.
     * @param {Object} context Context of this instance to attach.
     * @param {string} context.id ID of the device.
     * @param {string} context.model Model of the device.
     * @param {Object} context.args A map of device arguments.
     * @param {Function} callback If the third parameter is added, it's the callback for asyncrhonous attaching.
     */
    attach: function (inputs, context/*, callback */) {
        // Get assigned GPIO interface and set property `_gpio`.
        // See https://ruff.io/zh-cn/api/gpio.html for more information about GPIO interfaces.
        this._gpio = inputs['gpio'];
    },
    exports: {
        turnOn: function (callback) {
            this._gpio.write(Level.high, callback);
        },
        turnOff: function (callback) {
            this._gpio.write(Level.low, callback);
        }
    }
});
