module.exports = {
    addHouse: (req,res) => {
        const {name, address, city, state, zip} = req.body
        const db = req.app.get('db')
        db.add_house([name, address, city, state, zip])
        .then(() => {
            res.status(200).send('House was added!')
        }).catch(err => console.log(err))
    }

    getHouses: (req, res) =>{
        
    }
}