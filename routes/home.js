//moved to index.js ti support the routse.home referance at the app.js file
/*exports.home = function(req, res) {
	var arrInput = req.body.input.split(",");
	var sort = function(list) {
		for (var i = 0, swapping; i < list.length - 1; i++) {
			for (var j = 0; j < list.length - i; j++) {
				if (list[j] > list[j + 1]) {

					swapping = list[j + 1];

					list[j + 1] = list[j];
					list[j] = swapping;
				};
			}
		};
		return list;
	};
	res.send(sort(arrInput).join(","));
}*/