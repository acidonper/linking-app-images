const fs = require("fs");

module.exports = {
    new: async (user, photoBase64) => {
        try {
            const host = process.env.LINKING_APP_IMAGES_SERVICE;
            const port = process.env.LINKING_APP_IMAGES_SERVICE_PORT;
            const random = Math.floor(Date.now() / 1000);
            const path = process.cwd() + `/public/${user}-${random}.png`;

            let photo = Buffer.from(photoBase64, "base64");
            await fs.writeFileSync(path, photo);

            return `http://${host}:${port}/public/${user}-${random}.png`;
        } catch (error) {
            throw "Error saving photo";
        }
    },
    delete: async photo => {
        try {
            const url = new URL(photo);
            const path = process.cwd() + url.pathname;
            await fs.unlinkSync(path);
            return `File ${photo} Deleted`;
        } catch (error) {
            throw error;
        }
    }
};
