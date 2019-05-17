import { Component, Input } from '@angular/core';
import { UserserviceProvider } from '../../providers/userservice/userservice';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { RegisterPage } from '../../pages/register/register';

@Component({
  selector: 'userform',
  templateUrl: 'userform.html',
  providers: [UserserviceProvider]
})
export class UserformComponent {

  @Input() title: string;

  userApiResponse;

  errorMessage;

  constructor(public userServ: UserserviceProvider, public navCtrl: NavController) {}

  goToHome() {
    this.navCtrl.setRoot(HomePage)
  }  

  goToRegister() {
    this.navCtrl.setRoot(RegisterPage)
  }

  // method to handle which http request url to use based on which page the form is rendered on

  submitUser() {
    if (this.title === 'Register'){
      this.setUser(this.userServ.register())
    } else {
      this.setUser(this.userServ.login())
    }
  }

  // method to handle api response, takes http request method from provider as an argument

  setUser(apiMethod) { 
    this.errorMessage = '';
    apiMethod
    .subscribe(
      (response: any) => {
        this.userApiResponse = response;
        this.userServ.isLoggedIn = true;
        sessionStorage.setItem('token', response.token);
        // MAY NOT NEED TO STORE USERID IN SESSIONSTORAGE
        sessionStorage.setItem('userId', response.userId);
        this.userServ.token = sessionStorage.getItem('token')
      }, error => {
        this.errorMessage = 'Error Status Code: ' + error.status + ' (' + error.statusText + ')';
      }, () => {
        if (!this.errorMessage) {
          this.goToHome()
        }
      }
    );
  }
}
