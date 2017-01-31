module.exports={
	value:0,
	set: (args)=>{
		this.value=args;
		return this.value;
	},
	add: (args)=>{
    	this.value+=args;
    	return this.value;
	},
	multiply: (args)=>{
    	this.value*=args;
    	return this.value;
	},
	divide: (args)=>{
    	this.value/=args;
    	return this.value;
	},
	negate: ()=>{
    	this.value=0-this.value
    	return this.value;
	}
}