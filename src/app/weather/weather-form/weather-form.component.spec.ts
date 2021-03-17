import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WeatherFormComponent} from './weather-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

describe('WeatherFormComponent', () => {
  let component: WeatherFormComponent;
  let fixture: ComponentFixture<WeatherFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherFormComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form', () => {
    expect(component.form.get('cityId')).toBeTruthy();
    expect(component.form.get('units')).toBeTruthy();
  });

  describe('Validate Form', () => {
    it('should be not valid on create', () => {
      expect(component.form.valid).toBeFalse();
    });
    it('should validate units input', () => {
      const unitsInput = component.form.get('units');
      unitsInput?.setValue('test');
      component.isSubmitted = true;

      expect(component.form.valid).toBeFalsy();
      expect(unitsInput?.errors?.unitValid).toBeTrue();
    });

    it('should be valid', async () => {
      component.form.get('cityId')?.setValue(333);
      component.form.get('units')?.setValue('Fahrenheit');
      component.onSubmit();
      expect(component.form.valid).toBeTrue();
    });
  });
});
