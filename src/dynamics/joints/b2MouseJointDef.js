var b2MouseJointDef = Class.create();
Object.extend(b2MouseJointDef.prototype, b2JointDef.prototype);
Object.extend(b2MouseJointDef.prototype, 
{
	initialize: function()
	{
		// The constructor for b2JointDef
		this.type = b2Joint.e_unknownJoint;
		this.userData = null;
		this.body1 = null;
		this.body2 = null;
		this.collideConnected = false;
		//

		// initialize instance variables for references
		this.target = new b2Vec2();
		//

		this.type = b2Joint.e_mouseJoint;
		this.maxForce = 0.0;
		this.frequencyHz = 5.0;
		this.dampingRatio = 0.7;
		this.timeStep = 1.0 / 60.0;
	},

	target: new b2Vec2(),
	maxForce: null,
	frequencyHz: null,
	dampingRatio: null,
	timeStep: null});

