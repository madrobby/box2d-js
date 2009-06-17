var b2BodyDef = Class.create();
b2BodyDef.prototype = 
{
	initialize: function()
	{
		// initialize instance variables for references
		this.shapes = new Array();
		//

		this.userData = null;
		for (var i = 0; i < b2Settings.b2_maxShapesPerBody; i++){
			this.shapes[i] = null;
		}
		this.position = new b2Vec2(0.0, 0.0);
		this.rotation = 0.0;
		this.linearVelocity = new b2Vec2(0.0, 0.0);
		this.angularVelocity = 0.0;
		this.linearDamping = 0.0;
		this.angularDamping = 0.0;
		this.allowSleep = true;
		this.isSleeping = false;
		this.preventRotation = false;
	},

	userData: null,
	shapes: new Array(),
	position: null,
	rotation: null,
	linearVelocity: null,
	angularVelocity: null,
	linearDamping: null,
	angularDamping: null,
	allowSleep: null,
	isSleeping: null,
	preventRotation: null,

	AddShape: function(shape)
	{
		for (var i = 0; i < b2Settings.b2_maxShapesPerBody; ++i)
		{
			if (this.shapes[i] == null)
			{
				this.shapes[i] = shape;
				break;
			}
		}
	}};
