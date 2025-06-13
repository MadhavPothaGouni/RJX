import { Component, DestroyRef, OnInit, effect, inject, signal } from '@angular/core';
import { Observable, Subscriber, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  onclicked = signal(0);
  customInterval = new Observable((Subscriber)=>{
    setInterval(()=>{
      console.log('Emitting new value');
      Subscriber.next({message : 'New value'})
    },2000)
  })
  constructor(){
    // effect(()=>{
    //   console.log(`${this.onclicked()} clicked`);
    // })
  }
  private destroyRef = inject(DestroyRef)
  ngOnInit(): void {
  // const subscribistion =  interval(1000).subscribe({
  //     next:(val)=> console.log(val)
  //   })
  //   this.destroyRef.onDestroy(()=>{
  //     subscribistion.unsubscribe();
  //   })
  this.customInterval.subscribe({
    // next: (val) => console.log(val)
  });
}

clicked(){
  this.onclicked.update(prevCount => prevCount+1)
}

}


