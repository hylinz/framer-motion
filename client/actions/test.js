const fs = require("fs");
const path = require("path");
const filePath = "config/test.txt";

export function createFile() {
    const dirname = path.dirname(filePath);
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
    }

    fs.access(filePath, fs.F_OK, (err) => {
        err
            ? fs.writeFile(filePath, "Hello World! \r\n", (err) => { return; })
            : fs.appendFile(filePath, "Hello World! \r\n", (err) => { return; });    
        });
}
