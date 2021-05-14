const express = require('express')
const multer = require('multer')
//const sharp = require('sharp')
const path = require('path')
const cors = require("cors");
//const tf = require('@tensorflow/tfjs')

const app = express()
const port = process.env.PORT || 3000

app.use(cors());

const publicDirectoryPath = path.join(__dirname, './public')
// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.use(express.json())

const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image'))
        }

        cb(undefined, true)
    }
})

app.post('/upload', upload.single('avatar'), async (req, res) => {
    try {
        //const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).jpeg().toBuffer()
        // const model = await tf.loadLayersModel('http://localhost:3000/model.json');
        // console.log(`===============model===================`,model)
        // req.user.avatar = buffer
        // await req.user.save()
        res.send({
            success:true,
            //model:model,
            output:req.file.buffer
        })
    } catch (e) {
        console.log(`e`,e)
        res.status(400).send(e)
    }
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})