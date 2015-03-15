'use strict';

var BaseClass = function(definition) {
    var base = definition.extend || Object;
    var construct = definition.construct || definition.extend || function() {};

    var newClass = function() {
        this.super = base;
        construct.apply(this, arguments);
    }

    if (definition.extend) {
        var func = function() {};
        func.prototype = definition.extend.prototype;
        newClass.prototype = new func();
        newClass.prototype.constructor = newClass;
        // newClass._extend_ = definition.extend;
        newClass.super = definition.extend.prototype;
    }

    if (definition.statics) {
        for (var n in definition.statics) newClass[n] = definition.statics[n];
    }

    if (definition.members) {
        newClass.prototype = definition.members;
    }

    return newClass;
}

module.exports = BaseClass;