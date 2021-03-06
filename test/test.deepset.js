/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	pdf = require( './../lib/deepset.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'deepset pdf', function tests() {

	var mu = 0,
		b = 3;

	it( 'should export a function', function test() {
		expect( pdf ).to.be.a( 'function' );
	});

	it( 'should compute the Laplace pdf and deep set', function test() {
		var data, expected, i;

		data = [
			{'x':-3},
			{'x':-2},
			{'x':-1},
			{'x':0},
			{'x':1},
			{'x':2},
			{'x':3}
		];

		data = pdf( data, mu, b, 'x' );

		expected = [
			{'x':0.06131324019524039},
			{'x':0.08556951983876533},
			{'x':0.1194218850956315},
			{'x':0.1666666666666667},
			{'x':0.1194218850956315},
			{'x':0.08556951983876533},
			{'x':0.06131324019524039}
		];

		for ( i = 0; i < data.length; i++ ) {
			assert.closeTo( data[ i ].x, expected[ i ].x, 1e-7 );
		}

		// Custom separator...
		data = [
			{'x':[9,-3]},
			{'x':[9,-2]},
			{'x':[9,-1]},
			{'x':[9,0]},
			{'x':[9,1]},
			{'x':[9,2]},
			{'x':[9,3]}
		];

		data = pdf( data, mu, b, 'x/1', '/' );
		expected = [
			{'x':[9,0.06131324019524039]},
			{'x':[9,0.08556951983876533]},
			{'x':[9,0.1194218850956315]},
			{'x':[9,0.1666666666666667]},
			{'x':[9,0.1194218850956315]},
			{'x':[9,0.08556951983876533]},
			{'x':[9,0.06131324019524039]}
		];

		for ( i = 0; i < data.length; i++ ) {
			assert.closeTo( data[ i ].x[ 1 ], expected[ i ].x[ 1 ], 1e-7, 'custom separator' );
		}
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( pdf( [], mu, b, 'x' ), [] );
		assert.deepEqual( pdf( [], mu, b, 'x', '/' ), [] );
	});

	it( 'should handle non-numeric values by setting the element to NaN', function test() {
		var data, actual, expected;

		data = [
			{'x':true},
			{'x':null},
			{'x':[]},
			{'x':{}}
		];
		actual = pdf( data, mu, b, 'x' );

		expected = [
			{'x':NaN},
			{'x':NaN},
			{'x':NaN},
			{'x':NaN}
		];

		assert.deepEqual( data, expected );
	});

});
