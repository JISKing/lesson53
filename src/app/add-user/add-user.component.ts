import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  @Output() onUser = new EventEmitter();

  nameInputValue = '';
  statusInputValue = '';
  imgInputValue = '';

  onName(event: any) {
    this.nameInputValue = event.target.value;
  }

  onStatus(event: any) {
      this.statusInputValue = event.target.value;
  }
  

  onImg(event: any) {
    this.imgInputValue = event.target.value;
  }

  addNewUser(nameValue: string, statusValue: string, imgValue: string) {
    const value = {
      name: nameValue,
      status: statusValue,
      img: imgValue,
    };

    this.onUser.emit(value);
    this.nameInputValue = '';
    this.statusInputValue = '';
    this.imgInputValue = '';
  }
}
