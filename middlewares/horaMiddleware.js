module.exports = (req, res, next) => {
    const now = new Date();
    const hh = now.getHours();
    const mm = now.getMinutes();
    req.hh = hh;
    req.time = `${hh}:${mm}`;
    next();
};