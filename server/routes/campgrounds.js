const axios = require('axios')
const { Router } = require('express');
const router = Router();


router.get('/searchByState', (req,res)=>{
  const { state } = req.query

  const params = {
    state: state,
    apikey:'a0252faf-589b-41a2-b30e-2faa64eae779',
    
  }
  
  axios.get('https://ridb.recreation.gov/api/v1/facilities', { params: params })
 .then((response)=>{
  console.log('succesful get from server')
  res.send(response.data).status(200)
})
.catch((err)=>{
  res.sendStatus(500)
  console.log('couldnt get',err)
})

});




module.exports = router