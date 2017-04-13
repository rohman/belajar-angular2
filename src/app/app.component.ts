import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
	<h1>Inline Template</h1>	
	<fa-databinding></fa-databinding>
  `,
  styles: [`
	h1{
		color:blue;
	}
  `]
})
export class AppComponent {
  title = 'tes brrooo!';
}
