/**
 * core url
 * @author ydr.me
 * @create 2016-04-09 16:35
 */


'use strict';

var compatible = require('blear.utils.compatible');

var win = window;
var location = win.location;
var history = win.history;
var replaceState = compatible.js('replaceState', history);


/**
 * 是否支持操作历史记录
 * @type {boolean}
 */
exports.supportHistory = Boolean(replaceState);


/**
 * 替换当前 hash
 * @param hash
 */
exports.replaceHash = function (hash) {
    if (replaceState) {
        history[replaceState](null, null, '#' + hash);
    } else {
        location.hash = hash;
    }
};
