'use strict';

// FUNCTIONS //

var abs = Math.abs,
	exp = Math.exp,
	ln = Math.log;


// PDF //

/**
* FUNCTION: pdf( x, mu, b )
*	Evaluates the probability density function (PDF) for a Laplace distribution with location parameter `mu` and scale parameter `b` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} mu - location parameter
* @param {Number} b - scale parameter
* @returns {Number} evaluated PDF
*/
function pdf( x, mu, b ) {
	var lnb = ln( 2 * b );
	var logd = - lnb - abs( x - mu ) / b;
	return exp( logd );
} // end FUNCTION pdf()


// EXPORTS //

module.exports = pdf;
