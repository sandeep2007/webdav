const { createClient } = require("webdav");

(async function () {
    const client = createClient(
        "http://localhost:2000/data",
        {
            digest: true,
            username: "username",
            password: "password"
        }
    );
    const directoryItems = await client.getDirectoryContents("/");

    const buff = await client.getFileContents("/info.zip");
    const download = await client.getFileDownloadLink("/info.zip");

    // console.log(download)
})()


