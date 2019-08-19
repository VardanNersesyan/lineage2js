function Player() {
	this.socket = null;
	this.xor = null;
	
	this.objectId = null;
	this.target = null;
	this.login = null;
    this.characterName = null;
    this.title = "";
    this.level = 1;
	this.gender = null;
	this.hairStyle = null;
	this.hairColor = null;
	this.face = null;
	this.heading = 0;
    this.accessLevel = 0;
    this.online = false;
    this.onlineTime = 0;
	this.clanId = 0;
	this.exp = 0;
	this.sp = 0;
	this.waitType = 1; // 1 - is stands, 0 - is sitting
	this.moveType = 1; // 1 - is running, 0 - is walks

    this.pvp = 0;
    this.pk = 0;
    this.karma = 0;

	this.classId = null;
	this.className = null;
	this.raceId = null;
	
	this.str = null;
 	this.dex = null;
	this.con = null;
	this.int = null;
	this.wit = null;
	this.men = null;
	this.hp = null;
	this.maximumHp = null;
	this.mp = null;
	this.maximumMp = null;

	this.pAtk = null;
	this.pDef = null;
	this.mAtk = null;
	this.mDef = null;
	this.pSpd = null;
	this.mSpd = null;
	this.accuracy = null;
	this.critical = null;
	this.evasion = null;
	this.moveSpd = null;
	this.maximumLoad = null;
	
	this.x = null;
	this.y = null;
	this.z = null;
	
	this.canCraft = null;
	
	this.maleMovementMultiplier = null;
	this.maleAttackSpeedMultiplier = null;
	this.maleCollisionRadius = null;
	this.maleCollisionHeight = null;
	
	this.femaleMovementMultiplier = null;
	this.femaleAttackSpeedMultiplier = null;
	this.femaleCollisionRadius = null;
	this.femaleCollisionHeight = null;
}

Player.prototype.saveState = function() {
	return this._player[key];
}

Player.prototype.getVisiblePlayers = function(players, handler) {
	var radius = 2000;

	for(var i = 0; i < players.length; i++) {
		if(players[i].socket !== this.socket) {
			if(players[i].online && checkPointInCircle(this.x, this.y, players[i].x, players[i].y, radius)) {
				handler(players[i]);
			}
		}
	}
}

Player.prototype.fillData = function(data){
	for(key in data) {
		this[key] = data[key];
	}
}

function checkPointInCircle(x1, y1, x2, y2, radius) {
	var dx = x2 - x1;
	var dy = y2 - y1;
	var sqrtDist = dx*dx + dy*dy;
	var sqrtRadius = radius*radius;

	return sqrtDist < sqrtRadius;
}

module.exports = Player;