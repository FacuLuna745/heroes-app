import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-heroes',
  templateUrl: './new-heroes.component.html',
  styleUrls: ['./new-heroes.component.scss'],
})
export class NewHeroesComponent {
  public heroForm: FormGroup;

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  public constructor(private formBuilder: FormBuilder) {
    this.heroForm = this.formBuilder.group({
      id: [''],
      superhero: [''],
      publisher: [''],
      alter_ego: [''],
      first_appearance: [''],
      characters: [''],
      alt_img: [''],
    });
  }

  public onSubmit() {
    console.log('Guarde');
  }
}
