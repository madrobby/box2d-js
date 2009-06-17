var b2ShapeDef = Class.create();
b2ShapeDef.prototype = 
{
	initialize: function()
	{
		this.type = b2Shape.e_unknownShape;
		this.userData = null;
		this.localPosition = new b2Vec2(0.0, 0.0);
		this.localRotation = 0.0;
		this.friction = 0.2;
		this.restitution = 0.0;
		this.density = 0.0;
		this.categoryBits = 0x0001;
		this.maskBits = 0xFFFF;
		this.groupIndex = 0;
	},

	//virtual ~b2ShapeDef() {}

	ComputeMass: function(massData)
	{

		massData.center = new b2Vec2(0.0, 0.0)

		if (this.density == 0.0)
		{
			massData.mass = 0.0;
			massData.center.Set(0.0, 0.0);
			massData.I = 0.0;
		};

		switch (this.type)
		{
		case b2Shape.e_circleShape:
			{
				var circle = this;
				massData.mass = this.density * b2Settings.b2_pi * circle.radius * circle.radius;
				massData.center.Set(0.0, 0.0);
				massData.I = 0.5 * (massData.mass) * circle.radius * circle.radius;
			}
			break;

		case b2Shape.e_boxShape:
			{
				var box = this;
				massData.mass = 4.0 * this.density * box.extents.x * box.extents.y;
				massData.center.Set(0.0, 0.0);
				massData.I = massData.mass / 3.0 * b2Math.b2Dot(box.extents, box.extents);
			}
			break;

		case b2Shape.e_polyShape:
			{
				var poly = this;
				b2Shape.PolyMass(massData, poly.vertices, poly.vertexCount, this.density);
			}
			break;

		default:
			massData.mass = 0.0;
			massData.center.Set(0.0, 0.0);
			massData.I = 0.0;
			break;
		}
	},

	type: 0,
	userData: null,
	localPosition: null,
	localRotation: null,
	friction: null,
	restitution: null,
	density: null,

	// The collision category bits. Normally you would just set one bit.
	categoryBits: 0,

	// The collision mask bits. This states the categories that this
	// shape would accept for collision.
	maskBits: 0,

	// Collision groups allow a certain group of objects to never collide (negative)
	// or always collide (positive). Zero means no collision group. Non-zero group
	// filtering always wins against the mask bits.
	groupIndex: 0};
