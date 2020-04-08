import mongoose from 'mongoose';
const Document = mongoose.model('Document');

module.exports.create = function (req, res) {
    console.log('creating Document');

    const createdBy = req.user.id;
    const data = req.body.data;
    const permitedUser = [].push(createdBy);

    Document.create({
        createdBy: createdBy,
        data: data,
        permitedUser: permitedUser
    }, function (err, document) {
        if (err) {
            console.log(err);
            res.status(400).json(err);
        } else {
            console.log('Document created', document);
            res.status(201).json(document);
        }
    });
};

module.exports.get = function (req, res) {
    console.log('creating Document');

    const user = req.user.id;
    const id = req.params.id

    Document.findOne({
        id: id,
        permitedUser: mongoose.Schema.ObjectId(user),
    }, function (err, document) {
        if (err) {
            console.log(err);
            res.status(400).json(err);
        } else {
            // console.log('Document created', document);
            res.status(200).json(document);
        }
    });
};

module.exports.getAll = function (req, res) {
    console.log('creating Document');

    Document.find({}, function (err, documents) {
        if (err) {
            console.log(err);
            res.status(400).json(err);
        } else {
            // console.log('Document created', document);
            res.status(200).json(documents);
        }
    });
};