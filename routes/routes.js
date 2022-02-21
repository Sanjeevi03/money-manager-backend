const express = require('express')
const router = express.Router()
const {addDataModule,getModule,delModule} = require('../modules/module')

router.get('/', (req, res) => {
   res.send("Home Page");
 })

router.post('/add',addDataModule)
router.get('/get',getModule)
router.delete('/del/:id',delModule)
module.exports = router