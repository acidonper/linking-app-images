module.exports = {
    plain: (username, password) => {
        const user = process.env.LINKING_APP_IMAGES_USER;
        const pass = process.env.LINKING_APP_IMAGES_PASS;

        if (username !== user || password !== pass) throw "Invalid Credentials";

        return "OK - Valid credentials";
    }
};
