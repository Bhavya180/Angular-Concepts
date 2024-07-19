import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'concept';
  color="green";
  destroy: boolean = true;
  inputText: string = '';
OnSubmit(inputEL: HTMLInputElement) {
this.inputText = inputEL.value;
}

DestroyComponent(){
  this.destroy = false;
}

myObservable = new Observable ((observer) =>{
  console.log('Observable starts')
  /*setTimeout(() => {observer.next("1")}, 1000)
  setTimeout(() => {observer.next("2")}, 2000)
  setTimeout(() => {observer.next("3")}, 3000)
  setTimeout(() => {observer.next("4")}, 4000)
  setTimeout(() => {observer.next("5")}, 5000)*/
  observer.next("1")
  observer.next("2")
  observer.next("3")
  /*observer.error(new Error('Something went wrong! Please try again later'))*/
  observer.next("4")
  observer.next("5")
  observer.complete()
  });

  ngOnInit() {
  this.myObservable.subscribe((val) => {
  console.log(val)
  }, error =>{
    alert(error.message);
  }, () => {
    alert('observable has complete emitting')
  });
  }
}
