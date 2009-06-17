var b2JointDef = Class.create();
b2JointDef.prototype = 
{

	initialize: function()
	{
		this.type = b2Joint.e_unknownJoint;
		this.userData = null;
		this.body1 = null;
		this.body2 = null;
		this.collideConnected = false;
	},

	type: 0,
	userData: null,
	body1: null,
	body2: null,
	collideConnected: null}
