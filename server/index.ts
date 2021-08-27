import express from "express";
// import * as fs from "fs";
import path from "path";
import cors from "cors";
import fs from "fs";

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());

interface IFolder {
  path: string;
  children: Array<IFolder>;
}

app.get("/", (req, res) => {
  const rootPath = (req.query.name as string).trim();
  console.log(`input: ${req.query.name}`);

  let depth = 0;

  const _getAllFilesFromFolder = (dir: string) => {
    const obj: IFolder = { path: "", children: [] };
    console.log(obj);
    obj.path = dir;
    console.log(`Dir: ${dir}`); //     /Users/davimello/Desktop/Reginaldo

    const stats = fs.statSync(dir);
    if (stats && stats.isDirectory()) {
      console.log(`Dir: ${dir}`);

      fs.readdirSync(dir).forEach((file) => {
        const filePath = dir + "/" + file;

        obj.children.push(_getAllFilesFromFolder(filePath));
      });
    }
    return obj;
  };

  res.send(_getAllFilesFromFolder(rootPath as string));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
