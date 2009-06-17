var b2PolyContact = Class.create();
Object.extend(b2PolyContact.prototype, b2Contact.prototype);
Object.extend(b2PolyContact.prototype, 
{

		initialize: function(s1, s2) {
		// The constructor for b2Contact
		// initialize instance variables for references
		this.m_node1 = new b2ContactNode();
		this.m_node2 = new b2ContactNode();
		//
		this.m_flags = 0;

		if (!s1 || !s2){
			this.m_shape1 = null;
			this.m_shape2 = null;
			return;
		}

		this.m_shape1 = s1;
		this.m_shape2 = s2;

		this.m_manifoldCount = 0;

		this.m_friction = Math.sqrt(this.m_shape1.m_friction * this.m_shape2.m_friction);
		this.m_restitution = b2Math.b2Max(this.m_shape1.m_restitution, this.m_shape2.m_restitution);

		this.m_prev = null;
		this.m_next = null;

		this.m_node1.contact = null;
		this.m_node1.prev = null;
		this.m_node1.next = null;
		this.m_node1.other = null;

		this.m_node2.contact = null;
		this.m_node2.prev = null;
		this.m_node2.next = null;
		this.m_node2.other = null;
		//

		// initialize instance variables for references
		this.m0 = new b2Manifold();
		this.m_manifold = [new b2Manifold()];
		//

		//super(shape1, shape2);
		//b2Settings.b2Assert(this.m_shape1.m_type == b2Shape.e_polyShape);
		//b2Settings.b2Assert(this.m_shape2.m_type == b2Shape.e_polyShape);
		this.m_manifold[0].pointCount = 0;
	},
	//~b2PolyContact() {}

	// store temp manifold to reduce calls to new
	m0: new b2Manifold(),

	Evaluate: function(){
		var tMani = this.m_manifold[0];
		// replace memcpy
		// memcpy(&this.m0, &this.m_manifold, sizeof(b2Manifold));
		//this.m0.points = new Array(tMani.pointCount);
		var tPoints = this.m0.points;

		for (var k = 0; k < tMani.pointCount; k++){
			var tPoint = tPoints[k];
			var tPoint0 = tMani.points[k];
			//tPoint.separation = tPoint0.separation;
			tPoint.normalImpulse = tPoint0.normalImpulse;
			tPoint.tangentImpulse = tPoint0.tangentImpulse;
			//tPoint.position.SetV( tPoint0.position );

			tPoint.id = tPoint0.id.Copy();

			/*this.m0.points[k].id.features = new Features();
			this.m0.points[k].id.features.referenceFace = this.m_manifold[0].points[k].id.features.referenceFace;
			this.m0.points[k].id.features.incidentEdge = this.m_manifold[0].points[k].id.features.incidentEdge;
			this.m0.points[k].id.features.incidentVertex = this.m_manifold[0].points[k].id.features.incidentVertex;
			this.m0.points[k].id.features.flip = this.m_manifold[0].points[k].id.features.flip;*/
		}
		//this.m0.normal.SetV( tMani.normal );
		this.m0.pointCount = tMani.pointCount;

		b2Collision.b2CollidePoly(tMani, this.m_shape1, this.m_shape2, false);

		// Match contact ids to facilitate warm starting.
		if (tMani.pointCount > 0)
		{
			var match = [false, false];

			// Match old contact ids to new contact ids and copy the
			// stored impulses to warm start the solver.
			for (var i = 0; i < tMani.pointCount; ++i)
			{
				var cp = tMani.points[ i ];

				cp.normalImpulse = 0.0;
				cp.tangentImpulse = 0.0;
				var idKey = cp.id.key;

				for (var j = 0; j < this.m0.pointCount; ++j)
				{

					if (match[j] == true)
						continue;

					var cp0 = this.m0.points[j];
					var id0 = cp0.id;

					if (id0.key == idKey)
					{
						match[j] = true;
						cp.normalImpulse = cp0.normalImpulse;
						cp.tangentImpulse = cp0.tangentImpulse;
						break;
					}
				}
			}

			this.m_manifoldCount = 1;
		}
		else
		{
			this.m_manifoldCount = 0;
		}
	},

	GetManifolds: function()
	{
		return this.m_manifold;
	},

	m_manifold: [new b2Manifold()]});

b2PolyContact.Create = function(shape1, shape2, allocator){
		//void* mem = allocator->Allocate(sizeof(b2PolyContact));
		return new b2PolyContact(shape1, shape2);
	};
b2PolyContact.Destroy = function(contact, allocator){
		//((b2PolyContact*)contact)->~b2PolyContact();
		//allocator->Free(contact, sizeof(b2PolyContact));
	};
