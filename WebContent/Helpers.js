//Helper element

function onClick_getAllDtcResultsSync(){
	var data = getAllDtcResultsSync();
	$("#getAllDtcResultsSyncOutput").text("Status: " + data.status + " System List: " + data.systemList);
}

function onClick_getConnectedVciSync(){
	var data = getConnectedVciSync();
	$("#getConnectedVciSyncOutput").text("Vendor: " + data.vendor + " WindownName: " + data.windownName);
}

function onClick_getAllDtcResults(){
	var promise = getAllDtcResults();
	promise.always(function(data, errorText, errorCode){
		$("#getAllDtcResultsOutput").text("Status: " + data.status + " System List: " + data.systemList);
	});
}

function onClick_getConnectedVci(){
	var promise = getConnectedVci();
	promise.always(function(data, errorText, errorCode){
		$("#getConnectedVciOutput").text("Vendor: " + data.vendor + " WindownName: " + data.windownName);
	});
}

//API begins here. See Notes.txt
var GetConnectedVci = "http://localhost:9999/api/getConnectedVci";
var GetAllDtcResults = "http://localhost:9999/api/getAllDtcResults"; 

var SUCCESS = 1;
var WARNING = 2;
var FAIL = 3;

function getAllDtcResultsSync(){
	var result = FAIL;
	
	$.ajax(GetAllDtcResults, {
		type : 'GET',
		async : false,
		success : function(data){
			result = data;
		},
		error : function(promise, textStatus, errorThrown){
			//Failed
			alert("fail: " + textStatus + " " + errorThrown);
			result = FAIL;
		}
	});
	
	return result;
}

function getConnectedVciSync(){
	var result = FAIL;
	
	$.ajax(GetConnectedVci, {
		type : 'GET',
		async : false,
		success : function(data){
			result = data;
		},
		error : function(promise, textStatus, errorThrown){
			//Failed
			alert("fail: " + textStatus + " " + errorThrown);
			result = FAIL;
		}
	});
	
	return result;
}

function getAllDtcResults(){
	
	return $.ajax(GetAllDtcResults, {
		type : 'GET',
		success : function(data){
			result = data;
		},
		error : function(promise, textStatus, errorThrown){
			//Failed
			alert("fail: " + textStatus + " " + errorThrown);
			result = FAIL;
		}
	});
}

function getConnectedVci(){

	return $.ajax(GetConnectedVci, {
		type : 'GET',
		success : function(data){
			result = data;
		},
		error : function(promise, textStatus, errorThrown){
			//Failed
			alert("fail: " + textStatus + " " + errorThrown);
			result = FAIL;
		}
	});
}