const obj = {
	number: [4, 5, 6, 7],
	getNumber() {
		this.number.forEach(function(n){
			console.log(this,n);
		});
	},
};

obj.getNumber();