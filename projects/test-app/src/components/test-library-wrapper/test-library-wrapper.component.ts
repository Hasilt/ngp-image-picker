import { Component, OnInit } from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';

@Component({
  selector: 'app-test-library-wrapper',
  templateUrl: './test-library-wrapper.component.html',
  styleUrls: ['./test-library-wrapper.component.scss'],
})
export class TestLibraryWrapperComponent implements OnInit {
  config2: ImagePickerConf = {
    borderRadius: '8px',
    language: 'es',
    width: '320px',
    height: '240px',
    objectFit: 'contain',
    aspectRatio: 4 / 3,
    editOptions: 'crop-only',
    compressInitial: null,
  };
  initialImage: string = '';
  imageSrc: any = '';
  constructor() {}

  ngOnInit(): void {}

  onImageChanged(dataUri) {
    this.imageSrc = dataUri;
  }

  onUploadClicked(){
    console.log('upload click');
  }
}
