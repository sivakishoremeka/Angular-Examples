import { Component, Input } from '@angular/core';
import { InvestmentResultModel } from './investment-results.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [ CurrencyPipe ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
/*
to take input we can use two ways
1.using signal
2. using @Input declarative.
*/
@Input() investMentResults!:InvestmentResultModel[];
}
