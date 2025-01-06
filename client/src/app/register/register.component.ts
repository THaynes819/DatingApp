import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private accountService = inject(AccountService);
  
 cancelRegister = output<boolean>();
  model: any = {}

  Register(){
    this.accountService.Register(this.model).subscribe({
      next: response => {
        console.log(response);
        this.Cancel();
      },
      error: error => console.log(error)
    })
  }

  Cancel() {
    this.cancelRegister.emit(false);
  }
}
