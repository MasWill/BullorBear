
// list of stonks
const getStonks = async (req,res) => {
    req.get({
        url: url,
        json: true,
        headers: {'User Agent': 'request'}
    }, (err,res,data) => {
        if(err) {
            console.log(err);
        } else if(res.statusCode != 200) {
            console.log('Status: ', res.statusCode)
        } else {
            console.log(data)
        }
    });
}

module.exports = getStonks