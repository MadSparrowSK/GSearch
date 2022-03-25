const GetController = require('./GetController')
const LinkService = require('../MicroService/LinkService')
const CreateController = require('./CreateController')

class LinkController {
    async platform(game_id,platform) {
        const platforms = [];
        for(let i = 0; i < platform.length; i++) {
            const req_pt = await GetController.getPlatform(platform[i]);
            if(req_pt) {
                await LinkService.platformLink(game_id, req_pt.id);
                platforms.push(req_pt);
            }
        }
        return [...platforms];
    }

    async genre(game_id, genre) {
        const genres = [];
        for(let i = 0; i < genre.length; ++i) {
            const req_genre = await GetController.getGenre(genre[i]);
            if(req_genre) {
                await LinkService.genreLink(game_id, req_genre.id);
                genres.push(req_genre);
            }
        }
        return [...genres];
    }

    async tag(game_id, tag) {
        const tags = [];
        for(let i = 0; i < tag.length; ++i) {
            const req_tag = await GetController.getTag(tag[i]);
            if(req_tag) {
                await LinkService.tagLink(game_id, req_tag.id);
                tags.push(req_tag)
            }
        }
        return [...tags];
    }

    async label(game_id, label) {
        const labels = [];
        for(let i = 0; i < label.length; ++i) {
            const req_label = await GetController.getLabel(label[i].toLowerCase());
            if(req_label) {
                await LinkService.labelLink(game_id, req_label.id);
                labels.push(req_label);
            } else {
                const new_label = await CreateController.createLabel(label[i]);
                await LinkService.labelLink(game_id, new_label.id);
                labels.push(new_label);
            }
        }
        return [...labels];
    }

    async developer(game_id, dev) {
        const devs = [];
        for(let i = 0; i < dev.length; ++i) {
            const req_dev = await GetController.getDeveloper(dev[i]);
            if(req_dev) {
                await LinkService.devLink(game_id, req_dev.id);
                devs.push(req_dev);
            } else {
                const new_dev = await CreateController.createDeveloper(dev[i]);
                await LinkService.devLink(game_id, new_dev.id)
                devs.push(new_dev);
            }
        }
        return [...devs];
    }

    async publisher(game_id, pub) {
        const pubs = [];
        for(let i = 0; i < pub.length; ++i) {
            const req_pub = await GetController.getPublisher(pub[i]);
            if(req_pub) {
                await LinkService.pubLink(game_id, req_pub.id);
                pubs.push(req_pub);
            } else {
                const new_pub = await CreateController.createPublisher(pub[i])
                await LinkService.pubLink(game_id, new_pub.id)
                pubs.push(new_pub)
            }
        }
        return [...pubs];
    }
}

module.exports = new LinkController();