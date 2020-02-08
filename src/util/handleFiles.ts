/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';

type IFile = {
  [x in string | number]: any;
};

export const saveJSON = (filename: string, obj: IFile, message?: string) => {
  fs.writeFile(filename, JSON.stringify(obj), err => {
    if (err) throw err;
    console.log(message && 'Saved!');
  });
};
