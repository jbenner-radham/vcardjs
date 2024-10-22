const chai = require('chai');

// function chaiClass(_, utils) {
//     // Allows you to make assertions like: `expect(value).to.be.a.class`
//     utils.addProperty(chai.Assertion.prototype, 'class', function () {
//         this.assert(
//             this._obj.prototype.constructor.toString().startsWith('class') === true,
//             'expected #{this} to be a class',
//             'expected #{this} to not be a class'
//         );
//     });
// }

// function chaiClass() {
//     // Allows you to make assertions like: `expect(value).to.be.a.class`
//     chai.Assertion.addProperty('class', function () {
//         this.assert(
//             this._obj?.prototype?.constructor?.toString()?.startsWith('class') === true,
//             'expected #{this} to be a class',
//             'expected #{this} to not be a class'
//         );
//     });
// }

function chaiClass() {
    // Allows you to make assertions like: `expect(value).to.be.a('class')`
    chai.Assertion.overwriteChainableMethod(
        'a',
        function (_super) {
            return function assert(type) {
                if (typeof type === 'string' && type.toLowerCase() === 'class') {
                    const constructor = this._obj?.prototype?.constructor ?? this._obj?.constructor;

                    this.assert(
                        constructor?.toString()?.startsWith('class') === true,
                        'expected #{this} to be a class',
                        'expected #{this} to not be a class'
                    );
                } else {
                    _super.apply(this, arguments);
                }
            };
        },
        function (_super) {
            return function chain() {
                _super.call(this);
            };
        }
    );
}

chai.use(chaiClass);
