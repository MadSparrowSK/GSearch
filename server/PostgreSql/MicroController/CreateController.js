const CreateService = require('../MicroService/CreateService')

class CreateController {
    async createLabel(label) {
        const req_lbl = await CreateService.label(label.toLowerCase());
        const res_lbl = req_lbl.rows[0];
        return {...res_lbl};
    }

    async createPublisher(publisher) {
        const req_pub = await CreateService.publisher(publisher);
        const res_pub = req_pub.rows[0];
        return {...res_pub};
    }

    async createDeveloper(developer) {
        const req_dev = await CreateService.developer(developer);
        const res_dev = req_dev.rows[0];
        return {...res_dev};
    }
}

module.exports = new CreateController();