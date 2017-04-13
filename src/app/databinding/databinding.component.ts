import { Component } from '@angular/core';
//import {PropertyBindingComponent} from './property-binding.component';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
  //directives:[PropertyBindingComponent]
})
export class DatabindingComponent{
	stringInterpolation = 'String Interpolation';
	numberInterpolation = 2;
	
	onTest()
	{
		return true;
	}
	
	onClicked(value : string)
	{
		alert(value);
	}
}
