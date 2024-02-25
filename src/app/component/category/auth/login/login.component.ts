import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import { Global } from 'src/app/shared/services/golbal';
import Validation from 'src/app/shared/validitions/validate-password';
import { AuthService } from '../auth.service';

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
  loginForm:FormGroup;
  strMsg: string;
  constructor(private formBuilder: FormBuilder,private cd: ChangeDetectorRef,private _dataService:DataService,
    private _authgService:AuthService ) {
      this.strMsg = "";
    }

  ngOnInit(): void {
    this.createLoginForm();
    this.form = this.formBuilder.group(
      {
        // file: [null],
        name: ['', Validators.required],
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
        // acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  get f():{ [key: string]: AbstractControl }{
    return this.form.controls;
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login() {
    debugger;
    if (this.loginForm.get('userName').value == "") {
      // this._toastr.error("UserName is required !!", "Login");
    } else if (this.loginForm.get('password').value == "") {
      // this._toastr.error("Password is required !!", "Login");
    } else {
      if (this.loginForm.valid) {
        this._dataService.post(Global.BASE_API_PATH + "/login", this.loginForm.value).subscribe(res => {
          if (res) {
            this._authgService.login(res);
  
            this.strMsg = this._authgService.getMessage();
            if (this.strMsg !== "") {
              // this._toastr.error(this.strMsg, "Login");
              this.onReset();
            }
          } else {
            // this._toastr.error(res.errors[0], "Login");
            this.onReset();
          }
        });
      } else {
        // this._toastr.error("Invalid Crendiantial!!", "Login");
        this.onReset();
      }
    }
  
   }



register(formData: any) {
  this.submitted = true;
  // const postData = { ...formData.value };

  //   delete postData.confirmPassword;
  //   delete postData.password;
console.log("form",formData)

  if (this.form.invalid) {
    alert("unsuc")
    return;
  }

  this._dataService.post(Global.BASE_API_PATH + "/register", formData.value).subscribe(res => {
    if (res) {
      // this._toastr.success("Registration has been done !!", "Register");
      alert("sufff")
      this.form.reset();
      this.submitted = false;
      // this.elname.select('logintab');
    } else {
      alert("uunnsuchh")
      // this._toastr.error(res.errors[0], "Register");
    }
})
  

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



   @ViewChild('fileInput') el: ElementRef;
   imageUrl: any = '/assets/dummy-user.jpg';
   
   uploadFile(event) {
     let reader = new FileReader(); // HTML5 FileReader API
     let file = event.target.files[0];
     if (event.target.files && event.target.files[0]) {
       reader.readAsDataURL(file);
       // When file uploads set it to file formcontrol
       reader.onload = () => {
         this.imageUrl = reader.result;
         this.form.patchValue({
           file: reader.result
         });
         this.editFile = false;
         this.removeUpload = true;
       }
       // ChangeDetectorRef since file is loading outside the zone
       this.cd.markForCheck();        
     }
   }
   // Function to remove uploaded file
   removeUploadedFile() {
     let newFileList = Array.from(this.el.nativeElement.files);
     this.imageUrl = '/assets/dummy-user.jpg';
     this.editFile = true;
     this.removeUpload = false;
     this.form.patchValue({
       file: [null]
     });
   }


   
}
