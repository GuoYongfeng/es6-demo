'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function () {
    function Animal(name) {
        _classCallCheck(this, Animal);

        this.name = name;
    }
    // type = 'water'这里的意思是当type未传值的时候默认是'water'


    _createClass(Animal, [{
        key: 'drink',
        value: function drink() {
            var _this = this;

            var type = arguments.length <= 0 || arguments[0] === undefined ? 'water' : arguments[0];

            // 使用了箭头函数
            setInterval(function () {
                // 模板字符串
                console.log(_this.name + ' want to drink ' + type);
            }, 1000);
        }
    }]);

    return Animal;
}();

var pig = new Animal('pig');

console.log(pig.drink('milk'));