var b2Jacobian = Class.create();
b2Jacobian.prototype = 
{
	linear1: new b2Vec2(),
	angular1: null,
	linear2: new b2Vec2(),
	angular2: null,

	SetZero: function(){
		this.linear1.SetZero(); this.angular1 = 0.0;
		this.linear2.SetZero(); this.angular2 = 0.0;
	},
	Set: function(x1, a1, x2, a2){
		this.linear1.SetV(x1); this.angular1 = a1;
		this.linear2.SetV(x2); this.angular2 = a2;
	},
	Compute: function(x1, a1, x2, a2){

		//return b2Math.b2Dot(this.linear1, x1) + this.angular1 * a1 + b2Math.b2Dot(this.linear2, x2) + this.angular2 * a2;
		return (this.linear1.x*x1.x + this.linear1.y*x1.y) + this.angular1 * a1 + (this.linear2.x*x2.x + this.linear2.y*x2.y) + this.angular2 * a2;
	},
	initialize: function() {
		// initialize instance variables for references
		this.linear1 = new b2Vec2();
		this.linear2 = new b2Vec2();
		//
}};
