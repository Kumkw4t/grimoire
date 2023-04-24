const express = require("express");
const router = express.Router();

const bookCtrl = require("../controllers/books");
const auth = require("../middlewares/auth");
const multer = require("../middlewares/multer");

router.get("/",bookCtrl.getAllBooks);
router.post("/", auth, multer, bookCtrl.createBook);
router.get("/:id", bookCtrl.getOneBook);
router.put("/:id", auth, multer, bookCtrl.updateBook);
router.delete("/:id", auth, bookCtrl.deleteBook);

module.exports = router;