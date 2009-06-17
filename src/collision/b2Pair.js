// The pair manager is used by the broad-phase to quickly add/remove/find pairs
// of overlapping proxies. It is based closely on code provided by Pierre Terdiman.
// http:





var b2Pair = Class.create();
b2Pair.prototype = 
{


	SetBuffered: function()	{ this.status |= b2Pair.e_pairBuffered; },
	ClearBuffered: function()	{ this.status &= ~b2Pair.e_pairBuffered; },
	IsBuffered: function(){ return (this.status & b2Pair.e_pairBuffered) == b2Pair.e_pairBuffered; },

	SetRemoved: function()		{ this.status |= b2Pair.e_pairRemoved; },
	ClearRemoved: function()	{ this.status &= ~b2Pair.e_pairRemoved; },
	IsRemoved: function(){ return (this.status & b2Pair.e_pairRemoved) == b2Pair.e_pairRemoved; },

	SetFinal: function()		{ this.status |= b2Pair.e_pairFinal; },
	IsFinal: function(){ return (this.status & b2Pair.e_pairFinal) == b2Pair.e_pairFinal; },

	userData: null,
	proxyId1: 0,
	proxyId2: 0,
	next: 0,
	status: 0,

	// STATIC

	// enum

	initialize: function() {}};
b2Pair.b2_nullPair = b2Settings.USHRT_MAX;
b2Pair.b2_nullProxy = b2Settings.USHRT_MAX;
b2Pair.b2_tableCapacity = b2Settings.b2_maxPairs;
b2Pair.b2_tableMask = b2Pair.b2_tableCapacity - 1;
b2Pair.e_pairBuffered = 0x0001;
b2Pair.e_pairRemoved = 0x0002;
b2Pair.e_pairFinal = 0x0004;
