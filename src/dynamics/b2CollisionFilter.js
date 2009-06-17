var b2CollisionFilter = Class.create();
b2CollisionFilter.prototype = 
{

	// Return true if contact calculations should be performed between these two shapes.
	ShouldCollide: function(shape1, shape2){
		if (shape1.m_groupIndex == shape2.m_groupIndex && shape1.m_groupIndex != 0)
		{
			return shape1.m_groupIndex > 0;
		}

		var collide = (shape1.m_maskBits & shape2.m_categoryBits) != 0 && (shape1.m_categoryBits & shape2.m_maskBits) != 0;
		return collide;
	},


	initialize: function() {}};
b2CollisionFilter.b2_defaultFilter = new b2CollisionFilter;
