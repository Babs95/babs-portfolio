import { Component, OnInit } from "@angular/core";
import { TokenStorageService } from "./_services/token-storage.service";
import { User } from "./models/user.model";
import { DomSanitizer } from "@angular/platform-browser";
import { AuthService } from './_services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  DateNow;
  user: User;
  avatar = "assets/img/avatars/user.png";
  hidden = false;
  hiddenlogin = false;
  form: any = {};
  isLoginFailed = false;
  errorMessage = '';
  constructor(
    private tokenStorageService: TokenStorageService,
    private authService: AuthService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.DateNow = new Date().getFullYear();
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.hiddenlogin = true;
      this.user = this.tokenStorageService.getUser();
      this.user.role = [];
      for (let r of this.user.roles) {
        if (r.name == "ROLE_ADMIN") {
          this.user.role.push("Admin");
        }
        if (r.name == "ROLE_MODERATOR") {
          this.user.role.push("Modérateur");
        }
      }

      //this.roles = user.roles;
      //this.showAdminBoard = this.roles.includes("ROLE_ADMIN");
      //this.showModeratorBoard = this.roles.includes("ROLE_MODERATOR");
      //this.username = user.username;
    }
  }

  ShowAppAfterLogin() {
    this.hidden = !this.hidden;
  }
  ShowLoggin() {
    this.hiddenlogin = !this.hiddenlogin;
  }
  onSubmit() {
    console.log(this.form);
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorageService.saveToken(data.accessToken);
        this.tokenStorageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;

        this.roles = this.tokenStorageService.getUser().roles;
        this.reloadPage();
      },
      err => {
        //this.errorMessage = err.error.message;
        //this.isLoginFailed = true;
        this.AlertLogin();
      }
    );
  }

  reloadPage() {
    window.location.reload();
    //this.hidden = true;
    this.hiddenlogin = true;
    //this.ShowLoggin();
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
    this.hiddenlogin = false;
    //this.ShowLoggin();
  }
  AlertLogin() {
    Swal.fire({ title: 'Login ou mot de passe incorrect Veuillez réessayer !!!!'}).then(result => {
      if (result.value) {
        // handle Confirm button click
        // result.value will contain `true` or the input value
      } else {
        // handle dismissals
        // result.dismiss can be 'cancel', 'overlay', 'esc' or 'timer'
      }
    });
  }
}
