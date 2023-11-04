const router = require("express").Router();
const gyroModel = require("../models/gyro");

//POST REQ
router.post("/addGyro", async (req, res) => {
    try {
        const data = req.body;
        const gyroPostData = new gyroModel(data);
        await gyroPostData.save().then(() => {
            res.status(200).json({ message: "GyroData Added Successfully" });
        })
    } catch (error) {
        console.log(error);
    }
})

// GET REQ
router.get("/fetchGyro", async (req, res) => {
    try {
        const data = await gyroModel.find();
        res.status(200).json({ data });
    } catch (error) {
        console.log(error);
    }
})


//GET REQ WITH ID
router.get("/fetchGyro/id", async (req, res) => {
    let data;
    const id = req.query.id;
    try {
        data = await gyroModel.findById(id);
        res.status(200).json({ data });

    } catch (error) {
        console.log(error);
    }
})

//UPDATE BOOK BY ID
router.patch("/updateGyro/id", async (req, res) => {
    const id = req.query.id;
    let data;
    try {
        data = await gyroModel.findByIdAndUpdate(id, req.body);
        await data.save()
            .then(() =>
                res.json({ message: "Data Updated Successfully" }))

    } catch (error) {
        console.log(error);
    }
})

// DELETE BOOK BY ID 
router.delete("/deleteGyro/id", async (req, res) => {
    const id = req.query.id;
    try {
        const data = await gyroModel.findByIdAndDelete(id)
            .then(() => res.status(201).json({ message: "Data Deleted Successfully" }))
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
