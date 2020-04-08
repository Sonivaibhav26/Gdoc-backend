import mongoose from 'mongoose';
const Views = mongoose.model('Views');

module.exports.create = function (req, res) {
    console.log('creating Document');

    const viewer = req.user.id;
    const document = req.body.document;

    Views.create({
        viewer: viewer,
        document: document,
    }, function (err, views) {
        if (err) {
            console.log(err);
            res.status(400).json(err);
        } else {
            console.log('Views created', views);
            res.status(201).json(views);
        }
    });
};

module.exports.get = function (req, res) {
    console.log('creating Document')
    const document = req.params.document;

    Views.find({
        document: document
    }, function (err, views) {
        if (err) {
            console.log(err);
            res.status(400).json(err);
        } else {
            console.log('Views', views);
            res.status(201).json(views);
        }
    });
};