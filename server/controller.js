module.exports = {


   getAll: ( req, res ) => {
       const db = req.app.get('db');
       db.get_inventory().then( products => {
           res.status(200).json(products)}).catch(error => {
               res.status(500).json({ errormessage: 'Unable to grab the products!'});
               console.log(error)
           })
   },

   createProduct: ( req, res ) => {
      
       const db = req.app.get('db');
       let { name, price, img  } = req.body;
       
       db.post_product( {name, price, img} ).then(product => {
           res.status(200).json(product)}).catch(error => {
               res.status(500).json( { errormessage: 'Unable to post your item!' } )
               console.log(error)
           })
   },



    editProduct: ( req, res ) => {
        const db = req.app.get('db');
        let { name, price, img } = req.body;
        let { id } = req.params

        db.edit_product( [id, name, price, img] ).then(product => {
            res.status(200).json(product)}).catch(error => {
                res.status(500).json( {errormessage: 'Unable to edit your item at this time!'})
                console.log(error)
            })
    },

    deleteProduct: ( req, res ) => {
        const db = req.app.get('db');
        let { params } = req;
        

        db.delete_product( [params.id] ).then( (response) => res.status(200).json(response) ).catch(error => {
            res.status(500).json( {errormessage: 'Oops, can\'t delete your item right now!'} );
            console.log(error)
        })
        

    }
}