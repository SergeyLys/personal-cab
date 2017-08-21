import News from '../models/news';

export async function create(req, res, next) {
    res.json('create');
}

export async function getAll(req, res, next) {
    try {
        var news = await News.find({});
    } catch ({message}) {
        return next({
            status: 500,
            message
        });
    }

    res.json(news);
}

export async function getOne(req, res, next) {
    try {
        var newsItem = await News.findOne({url: req.url.split('/').pop()});
    } catch ({message}) {
        return next({
            status: 404,
            message
        });
    }

    res.json(newsItem);
}