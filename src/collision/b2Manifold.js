// A manifold for two touching convex shapes.
var b2Manifold = Class.create();
b2Manifold.prototype = 
{
	initialize: function(){
		this.points = new Array(b2Settings.b2_maxManifoldPoints);
		for (var i = 0; i < b2Settings.b2_maxManifoldPoints; i++){
			this.points[i] = new b2ContactPoint();
		}
		this.normal = new b2Vec2();
	},
	points: null,
	normal: null,
	pointCount: 0};
