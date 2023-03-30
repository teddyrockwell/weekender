const axios = require('axios')
const REC_KEY= process.env.REC_KEY;
const { Router } = require('express');
const router = Router();


router.get('/searchByState', (req,res)=>{
  const { state } = req.query

  const params = {
    state: state,
    apikey:REC_KEY,
    
  }
  
  axios.get('https://ridb.recreation.gov/api/v1/facilities', { params: params })
 .then((response)=>{
  res.send(response.data).status(200)
})
.catch((err)=>{
  res.sendStatus(500)
  console.error('couldnt get',err)
})

});




module.exports = router