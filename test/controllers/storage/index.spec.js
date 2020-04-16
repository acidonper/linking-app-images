var assert = require("assert");
const storageLib = require("../../../src/controllers/storage/index");

describe("Storage controller library test", function () {
  const user = "test01";
  const base64test = "SE9MQUFBQUFBQUFBQUFhCg==";
  process.env.LINKING_APP_IMAGES_SERVICE = "http://localhost";
  const service = process.env.LINKING_APP_IMAGES_SERVICE;
  const random = Math.floor(Date.now() / 1000);
  const url = `${service}/public/${user}-${random}.png`;

  it("should create a new file with string base64 decoded content", async function () {
    try {
      const storeBase64 = await storageLib.new(user, base64test);

      assert.equal(storeBase64, url);
    } catch (error) {
      throw error;
    }
  });

  it("should delete the previous file", async function () {
    try {
      const storeBase64 = await storageLib.delete(url);

      assert.equal(storeBase64, `File ${url} Deleted`);
    } catch (error) {
      throw error;
    }
  });
});
