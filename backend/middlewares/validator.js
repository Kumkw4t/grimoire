function validator (req,res,next) {

	if ( !req.body ) {
		next();
	}

	const book = req.file ? JSON.parse(req.body.book) : req.body;

	if (!book.title || !book.author || !book.year || !book.genre) {
		res.status(400).json({message: "Formulaire invalide."});
		console.log("Un champ est vide");
		return;
	}

	if ( !parseInt(book.year,10) ) {
		res.status(400).json({message: "Formulaire invalide."});
		console.log("L'année doit être un nombre");
		return;
	}

	next();
}

module.exports = validator;