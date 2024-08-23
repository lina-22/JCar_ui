import { Component } from '@angular/core';

@Component({
  selector: 'app-post-car',
  templateUrl: './post-car.component.html',
  styleUrl: './post-car.component.css',
})
export class PostCarComponent {
  isSpinning: boolean = false;
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  listOfOption: Array<{ label: string; value: string }> = [];
  listOFBrands = [
    'BMW',
    'AUDI',
    'FERRARI',
    'VOLVO',
    'TOYOTA',
    'HONDA',
    'FORD',
    'NAISSAN',
    'HYUNDAI',
    'LEXUS',
    'KIA',
  ];
  listOFType = ['Petrol', 'Hybrid', 'Diesel', 'Electric', 'CNG'];
  listOfColor = ['Red', 'White', 'Blue', 'Black', 'Oragne', 'Grey', 'Silver'];
  listOfTransmission = ['Manual', 'Automatic'];
  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    // reader.readAsDataURL(this.selectedFile);
  }
  onFileSelected($event: any) {
    // this.selectedFile = event.target.files[0];
    this.previewImage();
  }
}
