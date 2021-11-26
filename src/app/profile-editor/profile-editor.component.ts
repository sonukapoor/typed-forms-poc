import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
})
export class ProfileEditorComponent {
  /*
   * Generated type for the form
  (property) ProfileEditorComponent.profileForm: FormGroup<{
    firstName: AbstractControl<string, string>;
    lastName: AbstractControl<string, string>;
    address: AbstractControl<Partial<{
        houseNumber: number;
        street: string;
        city: string;
        state: string;
        zip: string;
        isApartment: boolean;
    }> | undefined, Partial<...> | undefined>;
    */

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      houseNumber: 0,
      street: [''],
      city: [''],
      state: [''],
      zip: 0,
      isApartment: [false],
    }),
  });

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      lastName: 'Fancy',
      address: {
        houseNumber: 14,
        street: 'Drew Street',
        city: 'New York',
        state: 'New York',
        zip: 10012,
        isApartment: true,
      },
    });
  }
}
