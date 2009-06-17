var b2RevoluteJointDef = Class.create();
Object.extend(b2RevoluteJointDef.prototype, b2JointDef.prototype);
Object.extend(b2RevoluteJointDef.prototype, 
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

		this.type = b2Joint.e_revoluteJoint;
		this.anchorPoint = new b2Vec2(0.0, 0.0);
		this.lowerAngle = 0.0;
		this.upperAngle = 0.0;
		this.motorTorque = 0.0;
		this.motorSpeed = 0.0;
		this.enableLimit = false;
		this.enableMotor = false;
	},

	anchorPoint: null,
	lowerAngle: null,
	upperAngle: null,
	motorTorque: null,
	motorSpeed: null,
	enableLimit: null,
	enableMotor: null});

