// A gear joint is used to connect two joints together. Either joint
// can be a revolute or prismatic joint. You specify a gear ratio
// to bind the motions together:
// coordinate1 + ratio * coordinate2 = constant
// The ratio can be negative or positive. If one joint is a revolute joint
// and the other joint is a prismatic joint, then the ratio will have units
// of length or units of 1/length.
//
// RESTRICITON: The revolute and prismatic joints must be attached to
// a fixed body (which must be body1 on those joints).

var b2GearJointDef = Class.create();
Object.extend(b2GearJointDef.prototype, b2JointDef.prototype);
Object.extend(b2GearJointDef.prototype, 
{
	initialize: function()
	{
		this.type = b2Joint.e_gearJoint;
		this.joint1 = null;
		this.joint2 = null;
		this.ratio = 1.0;
	},

	joint1: null,
	joint2: null,
	ratio: null});

