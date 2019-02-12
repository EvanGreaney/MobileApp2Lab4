import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MobileApp2Lab4';

  counter: number = 0;
  onButtonClick(){
    this.counter++;
  }
  hide:boolean = false;
  
  onDoubleClick(){
if(this.hide == false)
{
  this.hide = true;
}
else{
  this.hide = false;
}
  }

}
