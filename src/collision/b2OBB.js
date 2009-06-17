// A manifold for two touching convex shapes.
var b2OBB = Class.create();
b2OBB.prototype = 
{
	R: new b2Mat22(),
	center: new b2Vec2(),
	extents: new b2Vec2(),
	initialize: function() {
		// initialize instance variables for references
		this.R = new b2Mat22();
		this.center = new b2Vec2();
		this.extents = new b2Vec2();
		//
}};
