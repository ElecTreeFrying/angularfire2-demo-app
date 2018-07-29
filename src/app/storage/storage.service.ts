import { Injectable } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask
} from 'angularfire2/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: AngularFireStorage) { }

  uploadFile(file: File) {
    this.storage.ref(file.name).put(file);
  }

  deleteFile(file: File) {
    this.storage.ref(file.name).delete();
  }

  getDownloadURL(file: File) {
    return this.storage.ref(file.name).getDownloadURL();
  }

}
