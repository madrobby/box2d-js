// We use contact ids to facilitate warm starting.
var b2ContactID = Class.create();
b2ContactID.prototype = 
{
	initialize: function(){
		// initialize instance variables for references
		this.features = new Features();
		//

		this.features._m_id = this;

	},
	Set: function(id){
		this.set_key(id._key);
	},
	Copy: function(){
		var id = new b2ContactID();
		id.set_key(this._key);
		return id;
	},
	get_key: function(){
		return this._key;
	},
	set_key: function(value) {
		this._key = value;
		this.features._referenceFace = this._key & 0x000000ff;
		this.features._incidentEdge = ((this._key & 0x0000ff00) >> 8) & 0x000000ff;
		this.features._incidentVertex = ((this._key & 0x00ff0000) >> 16) & 0x000000ff;
		this.features._flip = ((this._key & 0xff000000) >> 24) & 0x000000ff;
	},
	features: new Features(),
	_key: 0};
