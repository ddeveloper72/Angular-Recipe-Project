import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { faExclamationCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  faExclamationCircle = faExclamationCircle;
  @Input() message: string;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
