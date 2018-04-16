import { assert } from 'chai';
import { toBool } from '../src';

// tslint:disable:only-arrow-functions

describe('toBool', () => {
    it('should properly handle boolean values', function() {
        expected({
            true: [true],
            false: [false],
        });
    });

    it('should properly handle number values', function() {
        expected({
            true: [1, -1],
            false: [NaN, 0],
        });
    });

    it('should properly handle object values', function() {
        expected({
            true: [{some: 'key'}, [1,2]],
            false: [null, {}, []],
        });
    });

    it('should properly handle string values', function() {
        expected({
            true: ['t', 'true', 'y', 'yes', 'on', '1'],
            false: [
                '',
                'tr', 'truely',
                'yo', 'yes-sir',
                'only', '2', '-1', '0',
            ],
        });
    });

    it('should return `false` for `undefined`', function() {
        assert.isFalse(toBool(void 0));
    });
});

function expected(values: {true: any[], false: any[]}) {
    for (const value of values.true) {
        assert.isTrue(toBool(value));
        if (typeof value === 'string') {
            assert.isTrue(toBool(value.toUpperCase()));
        }
    }
    for (const value of values.false) {
        assert.isFalse(toBool(value));
        if (typeof value === 'string') {
            assert.isFalse(toBool(value.toUpperCase()));
        }
    }
}
