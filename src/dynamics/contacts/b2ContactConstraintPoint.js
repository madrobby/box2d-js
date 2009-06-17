var b2ContactConstraintPoint = Class.create();
b2ContactConstraintPoint.prototype = 
{
	localAnchor1: new b2Vec2(),
	localAnchor2: new b2Vec2(),
	normalImpulse: null,
	tangentImpulse: null,
	positionImpulse: null,
	normalMass: null,
	tangentMass: null,
	separation: null,
	velocityBias: null,
	initialize: function() {
		// initialize instance variables for references
		this.localAnchor1 = new b2Vec2();
		this.localAnchor2 = new b2Vec2();
		//
}};
