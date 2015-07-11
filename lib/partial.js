'use strict';

// FUNCTIONS //

var abs = Math.abs,
	exp = Math.exp,
	ln = Math.log;


// PARTIAL //

/**
* FUNCTION: partial( mu, b )
*	Partially applies location parameter `mu` and scale parameter `b` and returns a function for evaluating the probability density function (PDF) for a Laplace distribution.
*
* @param {Number} mu - location parameter
* @param {Number} b - scale parameter
* @returns {Function} PDF
*/
function partial( mu, b ) {
	var lnb = ln( 2 * b );
	/**
	* FUNCTION: pdf( x )
	*	Evaluates the probability density function (PDF) for a Laplace distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated PDF
	*/
	return function pdf( x ) {
		var lnl = - lnb - abs( x - mu ) / b;
		return exp( lnl );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
