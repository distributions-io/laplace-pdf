/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	partial = require( './../lib/partial.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'number pdf', function tests() {

	var mu = 0,
		b = 1;

	it( 'should export a function', function test() {
		expect( partial ).to.be.a( 'function' );
	});

	it( 'should partially apply the Laplace pdf for given parameter values', function test() {
		var pdf;
		pdf = partial( mu, b);
		expect( pdf ).to.be.a( 'function' );
	});

	it( 'should return a function which evaluates the Laplace probability density function', function test() {
		var pdf;
		pdf = partial( mu, b);
		assert.closeTo( pdf( 2, mu, b ), 0.06766764161830635, 1e-14 );
	});


});
