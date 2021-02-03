import Url from '../model/Url.js';

export const redirectRoute = async (req, res) => {

  const { surl } = req.params;
  try {
    const exist = await Url.findOne({ surl: surl });
    if(!exist) return res.status(404).send("Not Found");
    res.redirect(exist.url);
  } catch (error) {
    res.status(500).json({ error: `Server error` });
  }

}

