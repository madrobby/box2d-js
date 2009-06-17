// The pulley joint is connected to two bodies and two fixed ground points.
// The pulley supports a ratio such that:
// length1 + ratio * length2 = constant
// Yes, the force transmitted is scaled by the ratio.
// The pulley also enforces a maximum length limit on both sides. This is
// useful to prevent one side of the pulley hitting the top.

var b2PulleyJointDef = Class.create();
Object.extend(b2PulleyJointDef.prototype, b2JointDef.prototype);
Object.extend(b2PulleyJointDef.prototype, 
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
		this.groundPoint1 = new b2Vec2();
		this.groundPoint2 = new b2Vec2();
		this.anchorPoint1 = new b2Vec2();
		this.anchorPoint2 = new b2Vec2();
		//

		this.type = b2Joint.e_pulleyJoint;
		this.groundPoint1.Set(-1.0, 1.0);
		this.groundPoint2.Set(1.0, 1.0);
		this.anchorPoint1.Set(-1.0, 0.0);
		this.anchorPoint2.Set(1.0, 0.0);
		this.maxLength1 = 0.5 * b2PulleyJoint.b2_minPulleyLength;
		this.maxLength2 = 0.5 * b2PulleyJoint.b2_minPulleyLength;
		this.ratio = 1.0;
		this.collideConnected = true;
	},

	groundPoint1: new b2Vec2(),
	groundPoint2: new b2Vec2(),
	anchorPoint1: new b2Vec2(),
	anchorPoint2: new b2Vec2(),
	maxLength1: null,
	maxLength2: null,
	ratio: null});

