import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
	<h1>Root Component</h1>	
	<fa-lifecycle *ngIf="!delete" [bindable]="boundVal">
		<p>{{test}}</p>
	</fa-lifecycle>
	<button (click)="delete = true">Click To Delete</button>
	<button (click)="test = 'Changed Value'">Click To Change</button>
	<button (click)="boundVal = 2000">Click To Change Binding</button>
  `,
  styles: [`
	h1{
		color:blue;
	}
  `]
})
export class AppComponent {
  delete = false;
  test='starting value';
  boundVal = 1000;
}
