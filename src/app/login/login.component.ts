import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoginViewModel } from 'local/viewmodels/login.viewmodel';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  @Output() login = new EventEmitter<LoginViewModel>();
  @Output() loginRede = new EventEmitter<void>();

  public loginVM: LoginViewModel = new LoginViewModel();

  public selecaoLogin = true;

  public width = 450;

	constructor() {}

  ngOnInit() {}

  ToggleLogin() {
    this.selecaoLogin = !this.selecaoLogin;
    if (this.selecaoLogin) this.width = 450;
    else this.width = 400;
  }

	Login() {
		this.login.emit(this.loginVM);
  }

	LoginRede() {
		this.loginRede.emit();
  }

}
