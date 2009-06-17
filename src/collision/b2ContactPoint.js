// We use contact ids to facilitate warm starting.
var b2ContactPoint = Class.create();
b2ContactPoint.prototype = 
{
	position: new b2Vec2(),
	separation: null,
	normalImpulse: null,
	tangentImpulse: null,
	id: new b2ContactID(),
	initialize: function() {
		// initialize instance variables for references
		this.position = new b2Vec2();
		this.id = new b2ContactID();
		//
}};
