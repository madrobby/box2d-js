var b2Proxy = Class.create();
b2Proxy.prototype = {
	GetNext: function(){ return this.lowerBounds[0]; },
	SetNext: function(next) { this.lowerBounds[0] = next; },

	IsValid: function(){ return this.overlapCount != b2BroadPhase.b2_invalid; },

	lowerBounds: [0,0],
	upperBounds: [0,0],
	overlapCount: 0,
	timeStamp: 0,

	userData: null,

	initialize: function() {
		// initialize instance variables for references
		this.lowerBounds = [0,0];
		this.upperBounds = [0,0];
		//
}}
