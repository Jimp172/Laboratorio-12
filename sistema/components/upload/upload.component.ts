// upload.component.ts

import { Component } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  uploadFiles: Array<File> = [];
  imageUrls: string[] = [];

  constructor(private uploadService: UploadService) { }

  onUpload() {
    let formData = new FormData();
    for (let i = 0; i < this.uploadFiles.length; i++) {
      formData.append("uploads[]", this.uploadFiles[i], this.uploadFiles[i].name)
    }

    // Call Service Upload
    this.uploadService.uploadFile(formData).subscribe((response: any) => {
      console.log('Response:', response);
      // Assuming the server returns an array of image URLs
      this.imageUrls = response.imageUrls; // Adjust based on the actual response
    });
  }

  onFileChange(e: any) {
    this.uploadFiles = e.target.files;
  }
}
