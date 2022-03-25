const GetService = require('../MicroService/GetService')

class GetController {
    async getGame(id) {
        const req_game = await GetService.game(id);
        const res_game = req_game.rows[0]
        return {...res_game};
    }
    async getPublisher(pub) {
        const req_pub = await GetService.publisher(pub);
        const res_pub = req_pub.rows[0];
        return {...res_pub};
    }
    async getPublisherById(pub_id) {
        const req_pub = await GetService.publisherById(pub_id);
        const res_pub = req_pub.rows[0];
        return {...res_pub};
    }
    async getPublisherBinderByGameId(game_id) {
        const req_pub_binder = await GetService.publisherBinderByGameId(game_id);
        const res_pub_binder = req_pub_binder.rows;
        return [...res_pub_binder]
    }

    async getDeveloper(dev) {
        const req_dev = await GetService.developer(dev);
        const res_dev = req_dev.rows[0];
        return {...res_dev};
    }
    async getDevById(dev_id) {
        const req_dev = await GetService.developerById(dev_id);
        const res_dev = req_dev.rows[0];
        return {...res_dev};
    }
    async getDeveloperBinderByGameId(id) {
        const req_dev_binder = await GetService.developerBinderByGameId(id);
        const res_dev_binder = req_dev_binder.rows;
        return [...res_dev_binder]
    }

    async getLabel(label) {
        const req_label = await GetService.label(label);
        const res_label = req_label.rows[0];
        return {...res_label};
    }
    async getLabelById(label_id) {
        const req_label = await GetService.labelById(label_id);
        const res_label = req_label.rows[0];
        return {...res_label};
    }
    async getLabelBinderByGameId(game_id) {
        const req_label_binder = await GetService.labelBinderByGameId(game_id);
        const res_label_binder = req_label_binder.rows;
        return [...res_label_binder];
    }

    async getTag(tag) {
        const req_tag = await GetService.tag(tag);
        const res_tag = req_tag.rows[0];
        return {...res_tag};
    }
    async getTagById(tag_id) {
        const req_tag = await GetService.tagById(tag_id);
        const res_tag = req_tag.rows[0];
        return {...res_tag};
    }
    async getTagBinderByGameId(game_id) {
        const req_tag_binder = await GetService.tagBinderByGameId(game_id);
        const res_tag_binder = req_tag_binder.rows;
        return [...res_tag_binder];
    }


    async getGenre(genre) {
        const red_genre = await GetService.genre(genre);
        const gn = red_genre.rows[0];
        return {...gn};
    }
    async getGenreById(id) {
        const req_genre = await GetService.GenreById(id);
        const res_genre = req_genre.rows[0];
        return {...res_genre}
    }
    async getGenreBinderByGameId(id) {
        const reg_genre_binder = await GetService.genreBinderByGameId(id);
        const res_genre_binder = reg_genre_binder.rows;
        return [...res_genre_binder]
    }


    async getPlatform(platform) {
        const req_pf = await GetService.platform(platform);
        const pf = req_pf.rows[0];
        return {...pf};
    }
    async getPlatformById(platform_id) {
        const req_pf = await GetService.platformById(platform_id);
        const res_pf = req_pf.rows[0];
        return {...res_pf};
    }
    async getPlatformBinderByGameId(game_id) {
        const req_pf_binder = await GetService.platformBinderByGameId(game_id);
        const res_pf_binder = req_pf_binder.rows;
        return [...res_pf_binder];
    }
}

module.exports = new GetController();