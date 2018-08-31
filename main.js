function decodeUriArray(url){
var decoded = decodeURIComponent(url);
var splited = decoded.split('&');
var json ={};
splited.forEach(function(val,k){
	var arg = val.split("=");
  var key = arg[0];
  var value = arg[1];
  var virginKey = key.replace('[]','');
  if(key.indexOf('[]')>=0){
  	if(Array.isArray(json[virginKey]) == false || typeof json[virginKey] == "undefined"){
    	json[virginKey]=[];
    }
    json[virginKey].push(value);
  }else{
  		json[virginKey]=value;
  }
})
return json;
}
