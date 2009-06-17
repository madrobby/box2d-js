var b2PolyDef = Class.create();
Object.extend(b2PolyDef.prototype, b2ShapeDef.prototype);
Object.extend(b2PolyDef.prototype, 
{
	initialize: function()
	{
		// The constructor for b2ShapeDef
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
		//

		// initialize instance variables for references
		this.vertices = new Array(b2Settings.b2_maxPolyVertices);
		//

		this.type = b2Shape.e_polyShape;
		this.vertexCount = 0;

		for (var i = 0; i < b2Settings.b2_maxPolyVertices; i++){
			this.vertices[i] = new b2Vec2();
		}
	},

	vertices: new Array(b2Settings.b2_maxPolyVertices),
	vertexCount: 0});

