module.exports = function (err, req, res, next) {
    console.log('error', err.message, err);
    res.status(500).send('Server-side error!');
}