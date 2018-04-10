let fs = require('fs');
let path = require('path');
let singers = fs.readFileSync('./data/storage.json');
let singStor = JSON.parse(singers);

exports.get = function(req, res) {
	res.status(200).send(singStor);
};

exports.getById = function(req, res) {
	let rockstar = singStor.find(function(st) {
		return st.id === Number(req.params.id);
	});
	if(!rockstar) {
		return res.status(404).send('Musician has been not found');
	}
	res.status(200).send(rockstar);
};

exports.post = function(req, res) {
	let rockstar = singStor.find(function(st) {
		return st.name === req.body.name
	});
	if(rockstar) {
		return res.status(409).send({'message':'This rockstar already exist'});
	}else {
		let rockstars = {
			id:singStor.length + 1,
			name:req.body.name,
			band:req.body.band,
			instrument:req.body.instrument
		};
		singStor.push(rockstars);
		res.send(rockstars).status(201);
	};
};

exports.put = function(req, res) {
	let rockstar = singStor.find(function(st) {
		return st.id === ParseInt(req.params.id);
	});
	if(!rockstar) {
		return res.status(404).send('Not found any musician with this ID')
	}
	rockstar.name = req.body.name;
	rockstar.band = req.body.band;
	rockstar.instrument = req.body.instrument;
	res.status(200).send(rockstar);
}

exports.delete = function(req, res) {
	let rockstar = singStor(function(st) {
		return st.id === ParseInt(req.params.id)
	});
	if(!rockstar) {
		return	res.status(404).send('Not found');
	}else {
		let index = singStor.indexOf(rockstar);
		singStor.splice(index, 1);
		res.status(200).send({ "message": "Musician has been successfully removed"})
	};
}