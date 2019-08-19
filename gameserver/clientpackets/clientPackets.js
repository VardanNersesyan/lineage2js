var ProtocolVersion = require("./ProtocolVersion.js");
var RequestAuthLogin = require("./RequestAuthLogin.js");
var NewCharacter = require("./NewCharacter.js");
var Logout = require("./Logout.js");
var CharacterCreate = require("./CharacterCreate.js");
var CharacterSelected = require("./CharacterSelected.js");
var RequestQuestList = require("./RequestQuestList.js");
var EnterWorld = require("./EnterWorld.js");
var MoveBackwardToLocation = require("./MoveBackwardToLocation.js");
var RequestSocialAction = require("./RequestSocialAction.js");
var Say2 = require("./Say2.js");
var StopMove = require("./StopMove.js");
var RequestActionUse = require("./RequestActionUse.js");
var Action = require("./Action.js");
var RequestTargetCanceled = require("./RequestTargetCanceled.js");

module.exports = {
	ProtocolVersion: ProtocolVersion,
	RequestAuthLogin: RequestAuthLogin,
	NewCharacter: NewCharacter,
	Logout: Logout,
	CharacterCreate: CharacterCreate,
	CharacterSelected: CharacterSelected,
	RequestQuestList: RequestQuestList,
	EnterWorld: EnterWorld,
	MoveBackwardToLocation: MoveBackwardToLocation,
	RequestSocialAction: RequestSocialAction,
	Say2: Say2,
	StopMove: StopMove,
	RequestActionUse: RequestActionUse,
	Action: Action,
	RequestTargetCanceled: RequestTargetCanceled
}