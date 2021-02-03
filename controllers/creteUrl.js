import Url from '../model/Url.js';
import shortHash from "shorthash2";

export const creteUrl = async (req, res) => {

    const { url } = req.body;
    const surl = shortHash(url);
    try {
        if (!url) return res.status(401).json({ message: `Incorrect request` });
        const exist = await Url.findOne({ url: url }).exec();
        if (exist) return res.status(201).json({ newurl: `${process.env.DOMAIN}/${surl}` });
        await Url.create({ url, surl });
        res.status(201).json({ newurl: `${process.env.DOMAIN}/${surl}` });
    } catch (error) {
        res.status(500).json({ error: `Server error` });
    }

}

