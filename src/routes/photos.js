const express = require("express");
const router = express.Router();
const authLib = require("../controllers/auth/index");
const storageLib = require("../controllers/storage/index");

router.post("/", async (req, res) => {
    try {
        const { username, password, id, photo } = req.body;

        if (!username || !password || !id || !photo)
            res.status(400).json({
                message: { error: "Bad parameters" }
            });

        authLib.plain(username, password);
        const newPhoto = await storageLib.new(id, photo);
        res.status(200).json({
            photo: newPhoto
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

router.delete("/", async (req, res) => {
    try {
        const { username, password, id, photo } = req.body;

        if (!username || !password || !id || !photo)
            res.status(400).json({
                message: { error: "Bad parameters" }
            });

        authLib.plain(username, password);
        const deletePhotoConfirmation = await storageLib.delete(photo);
        res.status(200).json(deletePhotoConfirmation);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

module.exports = router;
