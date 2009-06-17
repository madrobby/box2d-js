var b2ContactConstraint = Class.create();
b2ContactConstraint.prototype = 
{
	initialize: function(){
		// initialize instance variables for references
		this.normal = new b2Vec2();
		//

		this.points = new Array(b2Settings.b2_maxManifoldPoints);
		for (var i = 0; i < b2Settings.b2_maxManifoldPoints; i++){
			this.points[i] = new b2ContactConstraintPoint();
		}


	},
	points: null,
	normal: new b2Vec2(),
	manifold: null,
	body1: null,
	body2: null,
	friction: null,
	restitution: null,
	pointCount: 0};
