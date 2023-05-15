import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent {

  @Input() name = "";
  @Input() status = "";
  @Input() img = "";

  removeUser() {
    this.name = '';
    this.status = '';
    this.img = '';
  }
}
