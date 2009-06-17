var b2PairCallback = Class.create();
b2PairCallback.prototype = 
{
	//virtual ~b2PairCallback() {}

	// This returns the new pair user data.
	PairAdded: function(proxyUserData1, proxyUserData2){return null},

	// This should free the pair's user data. In extreme circumstances, it is possible
	// this will be called with null pairUserData because the pair never existed.
	PairRemoved: function(proxyUserData1, proxyUserData2, pairUserData){},
	initialize: function() {}};


