var assert = require("assert");
const authLib = require("../../../src/controllers/auth/index");

describe("Auth controller library test", function() {
    it("should authenticate images management user", function() {
        const user = process.env.LINKING_APP_IMAGES_USER;
        const pass = process.env.LINKING_APP_IMAGES_PASS;

        const auth = authLib.plain(user, pass);

        assert.equal(auth, "OK - Valid credentials");
    });
});
