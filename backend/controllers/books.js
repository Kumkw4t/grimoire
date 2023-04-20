const Book = require("../models/book");

exports.getAllBooks = (req,res,next) => {
	Book.find()
		.then( things => res.status(200).json(things))
		.catch( error => res.status(400).json({error}));

	// const stuff = [
	// 	{
	// 		userId: 'oeihfzeoi',
	// 		title: 'Livre1',
	// 		author: 'Michel Michel',
	// 		imageUrl: 'https://cdn.pixabay.com/photo/2020/03/15/13/49/temple-4933682_960_720.jpg',
	// 		year: 1993,
	// 		genre: 'thriller',
	// 		rating: [{userId: 'ohdsgh',grade: 3}],
	// 		averageRating: 4
	// 	},
	// 	{
	// 		userId: 'oeifgsdgr',
	// 		title: 'Livre 2',
	// 		author: 'Truc Tric',
	// 		imageUrl: 'https://cdn.pixabay.com/photo/2019/07/21/13/11/portrait-4352745_960_720.jpg',
	// 		year: 2004,
	// 		genre: 'drame',
	// 		rating: [{userId: 'ohgoieoh',grade: 3}],
	// 		averageRating: 5
	// 	},
	// ];
	// res.status(200).json(stuff);
};

exports.createBook = (req,res,next) => {
	console.log(req.body);
	delete req.body._id;
	const book = new Book({
		...req.body
	});
	book.save()
		.then( () => res.status(201).json({message: "Livre enregistré."}))
		.catch( error => res.status(400).json({ error }));
};

exports.getOneBook = (req,res,next) => {
	Book.findOne({_id: req.params.id})
		.then(book => res.status(200).json(book))
		.catch(error => res.status(404).json({error}));
};

exports.updateBook = (req,res,next) => {
	Book.findOne({_id: req.params.id})
		.then(book => res.status(200).json(book))
		.catch(error => res.status(404).json({error}));
};

exports.deleteBook = (req,res, next) => {
	Book.deleteOne({_id: req.params.id})
		.then( () => res.status(200).json({message: "Livre supprimé."}))
		.catch( error => res.status(400).json({error}));
};