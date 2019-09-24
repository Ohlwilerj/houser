module.exports = {
    addHouse: async (req,res) => {
        const db = req.app.get('db')
        const {name, address, city, state, zip, img, monthlyMortgage, monthlyRent} = req.body
        console.log(req.body)
        const addHouse = await db.add_house([name, address, city, state, zip, img, monthlyMortgage, monthlyRent])
        if (addHouse) {
            res.status(200).send('House added')
        } else {
            res.status(500).send('Our bad. Something went wrong on the backend.')
        }
    },

    getHouses: async (req, res) => {
        const db = req.app.get('db')
        const allHouse = await db.get_all_houses()
        res.status(200).send(allHouse)
    },

    deleteHouse: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        console.log(id)
         const allHouse = await db.delete_house([id])
        res.status(200).send(allHouse)
    }
}