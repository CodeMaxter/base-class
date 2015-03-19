'use strict';

var BaseClass = function(definition) {
    var base = definition.extend || Object,
        construct = definition.construct || definition.extend || function() {},
        key;

    var newClass = function() {
        this.super = base;
        construct.apply(this, arguments);
    }

    if (definition.extend) {
        var func = function() {};
        func.prototype = definition.extend.prototype;
        newClass.prototype = new func();
        newClass.prototype.constructor = newClass;
        newClass.super = definition.extend.prototype;
    }

    if (definition.statics) {
        for (key in definition.statics) {
            newClass[key] = definition.statics[key];
        }
    }

    if (definition.members) {
        for (key in definition.members) {
            newClass.prototype[key] = definition.members[key];
        }
    }

    return newClass;
}

module.exports = BaseClass;