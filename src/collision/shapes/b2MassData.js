var b2MassData = Class.create();
b2MassData.prototype = 
{
	mass: 0.0,
	center: new b2Vec2(0,0),
	I: 0.0,

	initialize: function() {
		// initialize instance variables for references
		this.center = new b2Vec2(0,0);
		//
}}
