const fs = require("fs");
const path = require("path");
const filePath = "config/config.js";

export function createFile(data) {
    const dirname = path.dirname(filePath);
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
    }

    if (fs.existsSync(filePath)) {
        console.log("File already exists, overwriting...");
    }

    try {
        fs.writeFileSync(filePath, "export const config = " + data);
        console.log("File written successfully.");
    } catch (error) {
        console.log("Error writing configuration file: ", error);
    }
}
