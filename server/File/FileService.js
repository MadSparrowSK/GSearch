const fs = require('fs')
const path = require('path');

class FileService {
    async uploadImage(file, folderTitle) {
        const fileName = file.image.name;
        if(!fs.existsSync(path.resolve('static', folderTitle))) {
            fs.mkdirSync(path.resolve('static', folderTitle));
        }
        const filePath = path.resolve('static', folderTitle, fileName);
        await file.image.mv(filePath);

        return fileName;
    }
}

module.exports = new FileService();