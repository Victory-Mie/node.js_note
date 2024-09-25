# chapter2 read and write files

* 以下是一些文件操作

```js
fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "nice to meet you",
  (err) => {
    if (err) throw err;
    console.log("writing to the file");

    fs.appendFile(
      path.join(__dirname, "files", "reply.txt"),
      "\n\nYes it is.",
      (err) => {
        if (err) throw err;
        console.log("Append complete");

        fs.rename(
          path.join(__dirname, "files", "reply.txt"),
          path.join(__dirname, "files", "newReply.txt"),
          (err) => {
            if (err) throw err;
            console.log("Rename complete");
          }
        );
      }
    );
  }
);
```

* 它看起来是一个回调地狱,我们可以使用promises，async/await

```js
const fsPromises = require("fs").promises;

const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);
    await fsPromises.unlink(path.join(__dirname,"files","newReply.txt"));
    console.log("Unlink completed.")
    await fsPromises.writeFile(
      path.join(__dirname, "files", "reply.txt"),
      "nice to meet you!!!"
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "reply.txt"),
      path.join(__dirname, "files", "newReply.txt")
    );
  } catch (err) {
    console.error(err);
  }
};
fileOps();
```

* 流文本

```js
const fs = require("fs");
const rs = fs.createReadStream("./files/lorem.txt", { encoding: "utf8" });
const ws = fs.createWriteStream("./files/new-lorem.txt");

// rs.on('data',(dataChunk)=>{
//     ws.write(dataChunk);
// })
//faster:
rs.pipe(ws);
```

* 新建目录

```js
const fs = require("fs");
if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("Direction created");
  });
}
```
