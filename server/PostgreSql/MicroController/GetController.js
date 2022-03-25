const GetService = require('../MicroService/GetService')

class GetController {
    async getPublisher(pub) {
        const req_pub = await GetService.publisher(pub);
        const res_pub = req_pub.rows[0];
        return res_pub;
    }

    async getDeveloper(dev) {
        const req_dev = await GetService.developer(dev);
        const res_dev = req_dev.rows[0];
        return res_dev;
    }

    async getLabel(label) {
        const req_label = await GetService.label(label);
        const res_label = req_label.rows[0];
        return res_label;
    }

    async getTag(tag) {
        const req_tag = await GetService.tag(tag);
        const res_tag = req_tag.rows[0];
        return res_tag;
    }

    async getGenre(genre) {
        const red_genre = await GetService.genre(genre);
        const gn = red_genre.rows[0];
        return gn;
    }

    async getPlatform(platform) {
        const req_pf = await GetService.platform(platform);
        const pf = req_pf.rows[0];
        return pf;
    }
}

module.exports = new GetController();