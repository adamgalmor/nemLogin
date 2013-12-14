/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('index', {
		title: 'Express'
	});
};


exports.login = function(db) {
	return function(req, res) {
		var collection = db.get('usercollection');
		collection.findOne({username : req.body.userName , password : req.body.password}).on('success', function (doc) {
		if(doc){
			res.cookie('logged', true);
			res.send("/home");
			}
		});
	};
};


exports.home = function(req, res) {
	function returnInt(element) {
		return parseInt(element, 10);
	}
	var arrInput = req.body.input.split(",");
	var parsedArr = arrInput.map(returnInt);
	
	var sort = function(list) {
		var i, j;
		var swapped;

		var swap = function(j, k) {
			var temp = list[j];
			list[j] = list[k];
			list[k] = temp;
			return (true);
		}
		for (i = 1; i < list.length; i++) {
			swapped = false;
			for (j = 0; j < list.length - i; j++) {
				if (list[j + 1] < list[j]) {
					swapped = swap(j, j + 1);
				}
			}
			if (!swapped) break;
		}
		return (list)
	}

	res.send(sort(parsedArr).join(","));
}