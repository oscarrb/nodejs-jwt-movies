const Favourite = require('../../../models/favourite')

/* 
    GET /api/favourite/list
*/

exports.list = (req, res) => {

    Favourite.findByUsername(req.decoded.username)
    .then(
        favourites => res.json(favourites.map((favourite => favourite.imdbID)))
    ).catch(
        (err) => { res.status(404).json({message: err.message})}
    )
}


/*
    POST /api/favourite/add/:imdbID
*/
exports.add = (req, res) => {
    Favourite.add(req.decoded.username, req.params.imdbID)
    .then(
        res.json({
            success: true
        })
    ).catch(
        (err) => { res.status(404).json({message: err.message})}
    )
}