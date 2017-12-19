/*
Code by Dan Taro
12.1.17
Outputs for channel four of audio (Channels 6 and 7)
*/

//Global Variables
var numObjects = 0; //starts with no FX (dry)
var channelLeft = 6;
var channelRight = 7;
var fxNameArray = ["bp.Chorus","bp.Retuner","bp.Freeverb","bp.Smoothdelay", "sendLeft", "sendRight"];
var matrixChannelOut;
var toObject;
var inletOfToObject;

//patch cord connect args: from object, outlet, to-object, inlet
function disconnectHelper(matrixChannelOut, toObject, inletOfToObject){
	this.patcher.disconnect(this.patcher.getnamed("sendMatrix"), matrixChannelOut, this.patcher.getnamed(toObject), inletOfToObject);
}

function connectHelper(matrixChannelOut, toObject, inletOfToObject){
	this.patcher.connect(this.patcher.getnamed("sendMatrix"), matrixChannelOut, this.patcher.getnamed(toObject), inletOfToObject);
}

function dry(){
//disconnects any other FX modules on specified channel
for(var i = 0; i < 6; i++){
	//checks if the object takes stereo inputs
	if(fxNameArray[i] === "bp.Freeverb"){
		disconnectHelper(channelLeft, fxNameArray[i], 0);
		disconnectHelper(channelRight, fxNameArray[i], 1);
	} else {
		disconnectHelper(channelLeft, fxNameArray[i], 0);
		disconnectHelper(channelRight, fxNameArray[i], 0);
	}
}
//connections to the main output matrix
connectHelper(channelLeft, "sendLeft", 0);
connectHelper(channelRight, "sendRight", 0);
}

function chorus(){
//disconnects all other connections on that channel
for(var i = 0; i < 6; i++){
	//checks if the object takes stereo inputs
	if(fxNameArray[i] === "bp.Freeverb"){
		disconnectHelper(channelLeft, fxNameArray[i], 0);
		disconnectHelper(channelRight, fxNameArray[i], 1);
	} else {
		disconnectHelper(channelLeft, fxNameArray[i], 0);
		disconnectHelper(channelRight, fxNameArray[i], 0);
	}
}
//connections to the main output matrix
connectHelper(channelLeft, "bp.Chorus", 0);
connectHelper(channelRight, "bp.Chorus", 0);
}

function retuner(){
	//disconnects all other connections on that channel
	for(var i = 0; i < 6; i++){
		//checks if the object takes stereo inputs
		if(fxNameArray[i] === "bp.Freeverb"){
			disconnectHelper(channelLeft, fxNameArray[i], 0);
			disconnectHelper(channelRight, fxNameArray[i], 1);
		} else {
			disconnectHelper(channelLeft, fxNameArray[i], 0);
			disconnectHelper(channelRight, fxNameArray[i], 0);
		}
	}
	//connections to the main output matrix
	connectHelper(channelLeft, "bp.Retuner", 0);
	connectHelper(channelRight, "bp.Retuner", 0);
}


function freeverb(){
	//disconnects all other connections on that channel
	for(var i = 0; i < 6; i++){
		//checks if the object takes stereo inputs
		if(fxNameArray[i] === "bp.Freeverb"){
			disconnectHelper(channelLeft, fxNameArray[i], 0);
			disconnectHelper(channelRight, fxNameArray[i], 1);
		} else {
			disconnectHelper(channelLeft, fxNameArray[i], 0);
			disconnectHelper(channelRight, fxNameArray[i], 0);
		}
	}
	//connections to the main output matrix
	connectHelper(channelLeft, "bp.Freeverb", 0);
	connectHelper(channelRight, "bp.Freeverb", 1);
	}


function smoothdelay(){
	//disconnects all other connections on that channel
	for(var i = 0; i < 6; i++){
		//checks if the object takes stereo inputs
		if(fxNameArray[i] === "bp.Freeverb"){
			disconnectHelper(channelLeft, fxNameArray[i], 0);
			disconnectHelper(channelRight, fxNameArray[i], 1);
		} else {
			disconnectHelper(channelLeft, fxNameArray[i], 0);
			disconnectHelper(channelRight, fxNameArray[i], 0);
		}
	}
	//connections to the main output matrix
	connectHelper(channelLeft, "bp.Smoothdelay", 0);
	connectHelper(channelRight, "bp.Smoothdelay", 0);
	}
