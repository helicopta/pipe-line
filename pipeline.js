const commands=require('./commands');
function pipeline(str){
	var result=commands.value;
	var pipe=str.split(' | ');
	for(var i=0;i<pipe.length;i++){
		var command=pipe[i].split(' ');
		var keys=Object.keys(commands);
		if(keys.indexOf(command[0])>=0){
			result=commands[command[0]](Number(command[1]))
		}
	}
	return result;
};

module.exports=pipeline;