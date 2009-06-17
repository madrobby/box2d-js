// A manifold for two touching convex shapes.
var b2AABB = Class.create();
b2AABB.prototype = 
{
	IsValid: function(){
		//var d = b2Math.SubtractVV(this.maxVertex, this.minVertex);
		var dX = this.maxVertex.x;
		var dY = this.maxVertex.y;
		dX = this.maxVertex.x;
		dY = this.maxVertex.y;
		dX -= this.minVertex.x;
		dY -= this.minVertex.y;
		var valid = dX >= 0.0 && dY >= 0.0;
		valid = valid && this.minVertex.IsValid() && this.maxVertex.IsValid();
		return valid;
	},

	minVertex: new b2Vec2(),
	maxVertex: new b2Vec2(),
	initialize: function() {
		// initialize instance variables for references
		this.minVertex = new b2Vec2();
		this.maxVertex = new b2Vec2();
		//
}};
