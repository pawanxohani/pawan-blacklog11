const router = require("express").Router();
const EditModel = require("../models/editDriver");
const bcrypt = require("bcryptjs");
const multer = require('multer')
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/userImage'), function (error) {
            if (error) throw error
        })
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name, function (error, success) {
            if (error) throw error
        })
    }
})

const upload = multer({ storage: storage })

router.post("/editprofile", upload.single("image"), async (req, res) => {

    try {
        const { firstName, lastName, email, joiningDate, mobile, password, gender, dateOfBirth, education, address, image } = req.body;
        const imagePath = req.file ? req.file.path : null;
        const user = await EditModel.findOne({ email }, { firstName });

        if (user) {
            return res.json({
                error: "User Allready Exist..."
            }, { status: 400 })
        }
        const newPassword = await bcrypt.hash(password, 10);
        const userData = new EditModel({
            firstName, lastName, email, joiningDate, mobile, gender, dateOfBirth, education, address,
            password: newPassword,
            image: imagePath
        })
        console.log("newPassword", userData);

        const response = await userData.save();

        return res.json({
            success: true,
            message: "Driver Profile Created Successfully...",
            response
        })
    } catch (error) {
        res.status(404).send({ success: false, msg: error.message });
    }
})


module.exports = router;