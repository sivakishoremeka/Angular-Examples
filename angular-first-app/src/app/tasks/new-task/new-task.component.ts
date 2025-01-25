import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>()
  @Output() submit = new EventEmitter<NewTaskData>()

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.submit.emit({
      newTitle : this.enteredTitle,
      newDueDate : this.enteredDueDate,
      newSummary : this.enteredSummary
    });
  }
}
