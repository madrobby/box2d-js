var b2PrismaticJointDef = Class.create();
Object.extend(b2PrismaticJointDef.prototype, b2JointDef.prototype);
Object.extend(b2PrismaticJointDef.prototype, 
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

		this.type = b2Joint.e_prismaticJoint;
		this.anchorPoint = new b2Vec2(0.0, 0.0);
		this.axis = new b2Vec2(0.0, 0.0);
		this.lowerTranslation = 0.0;
		this.upperTranslation = 0.0;
		this.motorForce = 0.0;
		this.motorSpeed = 0.0;
		this.enableLimit = false;
		this.enableMotor = false;
	},

	anchorPoint: null,
	axis: null,
	lowerTranslation: null,
	upperTranslation: null,
	motorForce: null,
	motorSpeed: null,
	enableLimit: null,
	enableMotor: null});

