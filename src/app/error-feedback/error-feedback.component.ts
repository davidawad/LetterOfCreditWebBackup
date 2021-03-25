import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-error-feedback',
  templateUrl: './error-feedback.component.html',
  styleUrls: ['./error-feedback.component.scss']
})
export class ErrorFeedbackComponent {

  constructor(
    public dialogRef: MatDialogRef<ErrorFeedbackComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
}