import Addons from '../models/addons';

export async function getAll(req, res, next) {
    try {
        var addons = await Addons.find({});

    } catch ({message}) {
        return next({
            status: 400,
            message
        });
    }

    res.json(addons);
}

export async function getOne(req, res, next) {
    try {
        var addons = await Addons.findOne({});

    } catch ({message}) {
        return next({
            status: 400,
            message
        });
    }


    res.json('get all');
}