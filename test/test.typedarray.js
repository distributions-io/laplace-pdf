/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	pdf = require( './../lib/typedarray.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'typed-array pdf', function tests() {

	var mu = -0.5,
		b = 2;

	it( 'should export a function', function test() {
		expect( pdf ).to.be.a( 'function' );
	});

	it( 'should evaluate the Laplace pdf', function test() {
		var data, actual, expected, i;

		data = new Float64Array([
			1e-306,
			-1e-306,
			1e-299,
			-1e-299,
			0.8,
			-0.8,
			1,
			-1,
			10,
			-10,
			2,
			-2,
			3,
			-3
		]);
		actual = new Float64Array( data.length );

		actual = pdf( actual, data, mu, b );

		// Evaluated in R:
		expected = new Float64Array([
			0.1947001957678512,
			0.1947001957678512,
			0.1947001957678512,
			0.1947001957678512,
			0.130511444190254,
			0.2151769941062645,
			0.1180916381852537,
			0.1947001957678512,
			0.001311879599795346,
			0.002162923800780159,
			0.07162619921504752,
			0.1180916381852537,
			0.04344348586261128,
			0.07162619921504752
		]);

		for ( i = 0; i < actual.length; i++ ) {
			assert.closeTo( actual[ i ], expected[ i ], 1e-7 );
		}
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( pdf( new Int8Array(), new Int8Array(), mu, b ), new Int8Array() );
	});

});
