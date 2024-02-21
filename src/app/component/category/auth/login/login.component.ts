import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from 'src/app/shared/validitions/validate-password';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  ReadMore:boolean = true;
  visible:boolean = false;
  form: FormGroup;
  submitted = false;
  editFile: boolean = true;
  removeUpload: boolean = false;

  constructor(private formBuilder: FormBuilder,private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        // file: [null],
        fullname: ['', Validators.required],
        // username: [
        //   '',
        //   [
        //     Validators.required,
        //     Validators.minLength(6),
        //     Validators.maxLength(20)
        //   ]
        // ],
        mob: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  get f():{ [key: string]: AbstractControl }{
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      console.log("INvalid data ",this.form.value);
      return;
    }
    console.log("valid data ",this.form.value);

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
   //onclick toggling both
   onclick()
   {
     this.ReadMore = !this.ReadMore; //not equal to condition
     this.visible = !this.visible
   }



  //  @ViewChild('fileInput') el: ElementRef;
  //  imageUrl: any = '/assets/dummy-user.jpg';
   
  //  uploadFile(event) {
  //    let reader = new FileReader(); // HTML5 FileReader API
  //    let file = event.target.files[0];
  //    if (event.target.files && event.target.files[0]) {
  //      reader.readAsDataURL(file);
  //      // When file uploads set it to file formcontrol
  //      reader.onload = () => {
  //        this.imageUrl = reader.result;
  //        this.form.patchValue({
  //          file: reader.result
  //        });
  //        this.editFile = false;
  //        this.removeUpload = true;
  //      }
  //      // ChangeDetectorRef since file is loading outside the zone
  //      this.cd.markForCheck();        
  //    }
  //  }
  //  // Function to remove uploaded file
  //  removeUploadedFile() {
  //    let newFileList = Array.from(this.el.nativeElement.files);
  //    this.imageUrl = '/assets/dummy-user.jpg';
  //    this.editFile = true;
  //    this.removeUpload = false;
  //    this.form.patchValue({
  //      file: [null]
  //    });
  //  }
}
