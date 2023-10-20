import { Component } from '@angular/core';

@Component({
  selector: 'app-input-quantity',
  templateUrl: './input-quantity.component.html',
  styleUrls: ['./input-quantity.component.css']
})
export class InputQuantityComponent {
  count =0;
  
  counter(type: string)
  {
    if (this.count<=0){
      type === 'add' ? this.count++ : this.count=0
    }
    else{
      type === 'add' ? this.count++ : this.count--
    }
  }

  OnlyNumerAllowed(event: any):boolean{
    const charCode = (event.which)?event.which: event.keyCode;
    if(charCode > 31 && (charCode < 48 || charCode > 57 ))
    {
      return false
    }
    return true
  }
}

