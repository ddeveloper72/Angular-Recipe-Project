import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';
import { PlaceholderDirective } from './placeholder.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [AlertComponent, LoadingSpinnerComponent, PlaceholderDirective],
  imports: [CommonModule, FontAwesomeModule, BsDropdownModule.forRoot()],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    CommonModule,
    FontAwesomeModule,
    BsDropdownModule
  ],
  entryComponents: [AlertComponent]
})
export class SharedModule {}
