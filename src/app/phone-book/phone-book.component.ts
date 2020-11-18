import { Component, OnInit } from '@angular/core';
import { IPeople } from '../shared/interfaces/people.interface';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.scss']
})
export class PhoneBookComponent implements OnInit {

  searchPlaceholder = 'search text does here';
  firstNamePlaceholder = 'first name goes here';
  secondNamePlaceholder = 'second name goes here';
  numberPhonePlaceholder = 'number phone goes here';
  modal = false;
  show = false;
  IsCheack = true;
  search: string;
  firstName: string;
  secondName: string;
  numberPhone: string;
  editIndex: number;
  sortingColumn: string;
  isDesc: boolean;
  OnImg = false;
  OfImg = false;
  secondOnImg = false;
  secondOffImg = false;
  numberOnImg = false;
  numberOffImg = false;

  users: Array<IPeople> = [
    {
      firstName: 'Ira',
      secondName: 'Tytar',
      numberPhone: '0636666666'
    },
    {
      firstName: 'Vasylyna',
      secondName: 'Vrublevska',
      numberPhone: '0635555555'
    },
    {
      firstName: 'Alejandro',
      secondName: 'Del Rio Albrechet',
      numberPhone: '0633333333'
    },
    {
      firstName: 'Petro',
      secondName: 'Petriv',
      numberPhone: '0631222222'
    },
    {
      firstName: 'Petya',
      secondName: 'Zhuk',
      numberPhone: '0631111111'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  wipe(): void {
    this.search = '';
  }

  addPhone(): void {
    this.firstName = '';
    this.secondName = '';
    this.numberPhone = null;
    this.modal = !this.modal;
  };

  saveUser(): void {
    if (this.firstName.length !== 0 && this.secondName.length !== 0 && this.numberPhone.length !== 0) {
      const user = {
        firstName: this.firstName,
        secondName: this.secondName,
        numberPhone: this.numberPhone
      }
      this.users.unshift(user);
      this.firstName = '';
      this.secondName = '';
      this.numberPhone = null;
      this.modal = !this.modal;
    } else {
      this.modal = !this.modal;
    }
  };

  onInputChange(): void {
    if (this.search.length !== 0) {
      this.show = true;
    } else {
      this.show = false;
    }
  };

  deleteUser(index: number): void {
    this.users.splice(index, 1);
  };

  editUser(index: number): void {
    this.modal = !this.modal;
    this.editIndex = index;
    this.firstName = this.users[index].firstName;
    this.secondName = this.users[index].secondName;
    this.numberPhone = this.users[index].numberPhone;
    this.IsCheack = false;
  };

  saveEditUser(): void {
    this.users[this.editIndex].firstName = this.firstName;
    this.users[this.editIndex].secondName = this.secondName;
    this.users[this.editIndex].numberPhone = this.numberPhone;
    this.editIndex = null;
    this.IsCheack = true;
    this.modal = !this.modal;
  };

  sortBy(colName) {
    this.sortingColumn = colName;
    this.isDesc = !this.isDesc;
    if (colName === 'firstName' && this.isDesc === true) {
      this.secondOnImg = false;
      this.secondOffImg = false;
      this.numberOnImg = false;
      this.numberOffImg = false;
      this.OnImg = !this.OnImg;
      this.OfImg = false;
    }
    if (colName === 'firstName' && this.isDesc === false) {
      this.secondOnImg = false;
      this.secondOffImg = false;
      this.numberOnImg = false;
      this.numberOffImg = false;
      this.OfImg = !this.OfImg;
      this.OnImg = false;
    }
    if (colName === 'secondName' && this.isDesc === true) {
      this.OnImg = false;
      this.OfImg = false;
      this.numberOnImg = false;
      this.numberOffImg = false;
      this.secondOnImg = !this.secondOnImg;
      this.secondOffImg = false;
    }
    if (colName === 'secondName' && this.isDesc === false) {
      this.OnImg = false;
      this.OfImg = false;
      this.numberOnImg = false;
      this.numberOffImg = false;
      this.secondOffImg = !this.secondOffImg;
      this.secondOnImg = false;
    }
    if (colName === 'numberPhone' && this.isDesc === true) {
      this.OnImg = false;
      this.OfImg = false;
      this.secondOnImg = false;
      this.secondOffImg = false;
      this.numberOnImg = !this.numberOnImg;
      this.numberOffImg = false;
    }
    if (colName === 'numberPhone' && this.isDesc === false) {
      this.OnImg = false;
      this.OfImg = false;
      this.secondOnImg = false;
      this.secondOffImg = false;
      this.numberOffImg = !this.numberOffImg;
      this.numberOnImg = false;
    }
  };

}
