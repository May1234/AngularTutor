import { Component } from '@angular/core';
//import { Student } from '../../shared/student.model';
import { Dish } from '../../shared/dish.model';
import {delay} from "rxjs/operators";


@Component({
  // select: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html', // you can put real html here
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offLine';
    counter = 0;
    isLogin = false;
    userName: string;
    isCooked = false;
    isBad = false;
    isStarted = false;

    radioSel: any;
    radioSelected: string;
    radioSelectedString: string;


  radioSelected_meat: string;
  radioSelectedString_meat: string;

  result: Dish;
  dishPic = '';
  cookPic = 'pan.png';

  disableBtn = false;
  pwidth = 0;



    //students: Student[] = [new Student('Bill Gates', 'Computer Science'),
    //                       new Student('Steve Jobs', 'Computer Science'),
    //                       new Student('Elon Musk', 'Computer Science')];

    vegetables: string[] = ['土豆', '白菜', '茄子', '玉米', '菠菜', '西红柿'];
    meats: string[] = ['猪肉', '牛肉', '鸡肉', '羊肉', '三文鱼', '鸡蛋'];

    dishes: Dish[] = [new Dish('tomatoegg', '西红柿', '鸡蛋'),
                      new Dish('eggplantmeat', '茄子', '猪肉'),
                      new Dish('cornbeef', '玉米', '牛肉')];





  getServerStatus() {
      return this.serverStatus;
    }

    counterPlus() {
     this.counter ++;
    }

    resetCounter() {
      this.counter = 0;
    }

    login() {
      this.isLogin = true;
    }

    signOut() {
      this.isLogin = false;
    }

    // Event Binding
    onUpdateUserName(event: Event) {
      this.userName = (<HTMLInputElement>event.target).value;
    }



    getSelectedVeg() {
      this.radioSel = this.vegetables.find(vegetable => vegetable === this.radioSelected);
      this.radioSelectedString = JSON.stringify(this.radioSel);
    }
    onItemChange(item) {
      this.getSelectedVeg();
  }

  getSelectedMeat() {
    this.radioSel = this.meats.find(meat => meat === this.radioSelected_meat);
    this.radioSelectedString_meat = JSON.stringify(this.radioSel);
  }
  onItemChange_Meat(item) {
    this.getSelectedMeat();
    if (this.radioSelected_meat != null && this.radioSelected != null) {
      this.disableBtn = true;
    }
  }

  reSetitem() {
      this.radioSelected = '';
      this.radioSelected_meat = '';
      this.disableBtn = false;
      this.isCooked = false;
      this.isBad = false;
      this.pwidth = 0;
  }




  cook() {

      this.result = this.dishes.find(item => item.vege === this.radioSelected && item.meat === this.radioSelected_meat);
      this.cookPic = 'cooking.gif';

      while (this.pwidth < 100) {

        this.pwidth = this.pwidth + 0.0000001;
      }

      if (this.result != null) {
        this.dishPic = this.result.dishname + '.png';
        this.isCooked = true;
        this.isBad = false;

      } else {
        this.isCooked = false;
        this.isBad = true;

      }


  }



}
