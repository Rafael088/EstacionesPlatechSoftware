const onError = (res, success ,error) =>{
    if(error != NaN){
        res.status(200).send(success)
    }else{
        res.status(500).send(error)
    }
}

module.exports = {onError}