import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentInput } from './investment-input.model';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { InvestmentResultModel } from './investment-results/investment-results.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent]
})
export class AppComponent {

  results=signal<InvestmentResultModel[]>([]);
  calculateInvestmentResults(data:InvestmentInput) {
    const {initialInvestment, duration, expectedReturn,
      annualInvestment} = data;
    const annualData:InvestmentResultModel[] = [];
    let investmentValue = initialInvestment;

    if((initialInvestment!=0)&&(annualInvestment!=0)){
      for (let i = 0; i < duration; i++) {
        const year = i + 1;
        const interestEarnedInYear = investmentValue * (expectedReturn / 100);
        investmentValue += interestEarnedInYear + annualInvestment;
        const totalInterest =
          investmentValue - annualInvestment * year - initialInvestment;
        annualData.push({
          year: year,
          interest: interestEarnedInYear,
          valueEndOfYear: investmentValue,
          annualInvestment: annualInvestment,
          totalInterest: totalInterest,
          totalAmountInvested: initialInvestment + annualInvestment * year,
        });
      }
    }
    
    console.log(annualData);
    this.results.set(annualData);
    //console.log(annualData);
  }
}
