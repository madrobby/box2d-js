/*!
* Copyright (c) 2006-2007 Erin Catto
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked, and must not be
* misrepresented the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/

//= require <common/b2Settings>
//= require <common/math/b2Vec2>
//= require <common/math/b2Mat22>
//= require <common/math/b2Math>
//= require <collision/b2AABB>
//= require <collision/b2Bound>
//= require <collision/b2BoundValues>
//= require <collision/b2Pair>
//= require <collision/b2PairCallback>
//= require <collision/b2BufferedPair>
//= require <collision/b2PairManager>
//= require <collision/b2BroadPhase>
//= require <collision/b2Collision>
//= require <collision/Features>
//= require <collision/b2ContactID>
//= require <collision/b2ContactPoint>
//= require <collision/b2Distance>
//= require <collision/b2Manifold>
//= require <collision/b2OBB>
//= require <collision/b2Proxy>
//= require <collision/ClipVertex>
//= require <collision/shapes/b2Shape>
//= require <collision/shapes/b2ShapeDef>
//= require <collision/shapes/b2BoxDef>
//= require <collision/shapes/b2CircleDef>
//= require <collision/shapes/b2CircleShape>
//= require <collision/shapes/b2MassData>
//= require <collision/shapes/b2PolyDef>
//= require <collision/shapes/b2PolyShape>
//= require <dynamics/b2Body>
//= require <dynamics/b2BodyDef>
//= require <dynamics/b2CollisionFilter>
//= require <dynamics/b2Island>
//= require <dynamics/b2TimeStep>
//= require <dynamics/contacts/b2ContactNode>
//= require <dynamics/contacts/b2Contact>
//= require <dynamics/contacts/b2ContactConstraint>
//= require <dynamics/contacts/b2ContactConstraintPoint>
//= require <dynamics/contacts/b2ContactRegister>
//= require <dynamics/contacts/b2ContactSolver>
//= require <dynamics/contacts/b2CircleContact>
//= require <dynamics/contacts/b2Conservative>
//= require <dynamics/contacts/b2NullContact>
//= require <dynamics/contacts/b2PolyAndCircleContact>
//= require <dynamics/contacts/b2PolyContact>
//= require <dynamics/b2ContactManager>
//= require <dynamics/b2World>
//= require <dynamics/b2WorldListener>
//= require <dynamics/joints/b2JointNode>
//= require <dynamics/joints/b2Joint>
//= require <dynamics/joints/b2JointDef>
//= require <dynamics/joints/b2DistanceJoint>
//= require <dynamics/joints/b2DistanceJointDef>
//= require <dynamics/joints/b2Jacobian>
//= require <dynamics/joints/b2GearJoint>
//= require <dynamics/joints/b2GearJointDef>
//= require <dynamics/joints/b2MouseJoint>
//= require <dynamics/joints/b2MouseJointDef>
//= require <dynamics/joints/b2PrismaticJoint>
//= require <dynamics/joints/b2PrismaticJointDef>
//= require <dynamics/joints/b2PulleyJoint>
//= require <dynamics/joints/b2PulleyJointDef>
//= require <dynamics/joints/b2RevoluteJoint>
//= require <dynamics/joints/b2RevoluteJointDef>