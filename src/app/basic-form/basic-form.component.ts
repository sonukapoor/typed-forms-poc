import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent {
  name = new FormControl<string>('Sonu Kapoor');
  age = new FormControl<number>(40);

  updateName() {
    this.name.setValue('Dylan Hunn'); // type string

    // this.name.setValue(10); // typescript error

    const name = this.name.value; // type string
  }

  updateAge() {
    this.age.setValue(41); // type number

    // this.age.setValue('Sonu Kapoor'); // typescript error

    const age = this.age.value; // type number
  }
}
