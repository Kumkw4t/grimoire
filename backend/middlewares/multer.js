const multer = require("multer");

const MIME_TYPES = {
	"image/jpg": "jpg",
	"image/jpeg": "jpeg",
	"image/png": "png"
};

const validator = (req, file, callback) => {
	const book = JSON.parse(req.body.book);

	if (!book.title || !book.author || !book.year || !book.genre) {
		return callback(null, false);
	}

	if ( !parseInt(book.year,10) ) {
		return callback(null, false);
	}
	callback(null, true);
};

const storage = multer.diskStorage({
	destination: (req,file, callback) => {
		callback(null, 'images');
	},
	filename: (req,file,callback) => {
		const name = file.originalname.split(".")[0].split(" ").join("_");
		const extension = MIME_TYPES[file.mimetype];
		callback(null, name + Date.now() + "." + extension);
	}
});

module.exports = multer({storage: storage, fileFilter: validator}).single("image");
