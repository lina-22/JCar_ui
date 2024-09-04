import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-car',
  templateUrl: './post-car.component.html',
  styleUrl: './post-car.component.css',
})
export class PostCarComponent {
  postCarForm!: FormGroup;
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
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.postCarForm = this.fb.group({
      name: [null, Validators.required],
      brand: [null, Validators.required],
      type: [null, Validators.required],
      color: [null, Validators.required],
      transmission: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
      year: [null, Validators.required],
    });
  }
  previewImage() {
    if (this.selectedFile) {
      // Check if selectedFile is not null
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      console.error('No file selected');
    }
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }
}
