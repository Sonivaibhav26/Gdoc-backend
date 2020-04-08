import mongoose from 'mongoose';
const User = mongoose.model('User');
const Document = mongoose.model('Document');
const bcrypt = require('bcrypt-nodejs');

const createUser = async () => {
    let user;
    try {
        user = await User.create({
            username: "admin",
            email: "admin@admin.com",
            contactNo: "9123456789",
            password: bcrypt.hashSync("admin", bcrypt.genSaltSync(10))
        })
    } catch (error) {
        console.log(error);
    }

    return user;
}

const seed = async (req, res) => {
    console.log("seeding data");
    let user;
    let noofdocument = 0;
    try {
        user = await User.findOne({ username: "admin" });
        let documents = await Document.find({});
        noofdocument =documents.length;
    } catch (error) {
        console.log(error)
    }

    if (!user) {
        user = await createUser();
    }
    if (noofdocument === 0) {
        const createdBy = user.id;
        const data = "http://www.ikozmik.com/Content/Images/uploaded/its-free-featured.jpg";
        const permitedUser = [user.id];
        console.log(createdBy, permitedUser);

        Document.create({
            createdBy: createdBy,
            data: data,
            permitedUser: permitedUser
        }, function (err, document) {
            if (err) {
                console.log(err);
            } else {
                console.log('Document created', document);
            }
        });
    }

};

module.exports.seed = seed;