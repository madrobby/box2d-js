var b2DistanceJointDef = Class.create();
Object.extend(b2DistanceJointDef.prototype, b2JointDef.prototype);
Object.extend(b2DistanceJointDef.prototype, 
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
		this.anchorPoint1 = new b2Vec2();
		this.anchorPoint2 = new b2Vec2();
		//

		this.type = b2Joint.e_distanceJoint;
		//this.anchorPoint1.Set(0.0, 0.0);
		//this.anchorPoint2.Set(0.0, 0.0);
	},

	anchorPoint1: new b2Vec2(),
	anchorPoint2: new b2Vec2()});

