/**
 * 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var url = require('../src/index.js');

describe('测试文件', function () {
    it('.replaceHash', function () {
        url.replaceHash('123');
        expect(location.hash).toEqual('#123');
    });
});
