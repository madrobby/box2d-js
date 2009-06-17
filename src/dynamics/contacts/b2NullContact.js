var b2NullContact = Class.create();
Object.extend(b2NullContact.prototype, b2Contact.prototype);
Object.extend(b2NullContact.prototype, 
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
},
	Evaluate: function() {},
	GetManifolds: function(){ return null; }});

