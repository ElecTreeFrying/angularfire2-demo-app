export class Upload {

  file: File;
  name: string;
  url: string;
  progress: number;

  constructor(file: File) {
    this.file = file;
  }

}
