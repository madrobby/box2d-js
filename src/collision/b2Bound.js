var b2Bound = Class.create();
b2Bound.prototype = {
	IsLower: function(){ return (this.value & 1) == 0; },
	IsUpper: function(){ return (this.value & 1) == 1; },
	Swap: function(b){
		var tempValue = this.value;
		var tempProxyId = this.proxyId;
		var tempStabbingCount = this.stabbingCount;

		this.value = b.value;
		this.proxyId = b.proxyId;
		this.stabbingCount = b.stabbingCount;

		b.value = tempValue;
		b.proxyId = tempProxyId;
		b.stabbingCount = tempStabbingCount;
	},

	value: 0,
	proxyId: 0,
	stabbingCount: 0,

	initialize: function() {}}
