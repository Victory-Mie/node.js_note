const fs = require("fs");
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
// fs.readFile("./files/starter.txt",(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString())
// })
//equals to:
// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

console.log("hello...");

// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "nice to meet you",
//   (err) => {
//     if (err) throw err;
//     console.log("writing to the file");

//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\n\nYes it is.",
//       (err) => {
//         if (err) throw err;
//         console.log("Append complete");

//         fs.rename(
//           path.join(__dirname, "files", "reply.txt"),
//           path.join(__dirname, "files", "newReply.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("Rename complete");
//           }
//         );
//       }
//     );
//   }
// );

//exit on uncaught errors
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error:${err}`);
  process.exit(1);
});
