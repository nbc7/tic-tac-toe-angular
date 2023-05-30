import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button mat-stroked-button class="basic" *ngIf="!value">
      {{ value }}
    </button>

    <button mat-raised-button color="warn" *ngIf="value === 'X'">
      {{ value }}
    </button>

    <button mat-raised-button color="primary" *ngIf="value === 'O'">
      {{ value }}
    </button>
  `,
  styles: [
    `
      .mdc-button {
        width: 100%;
        height: 100%;
        font-size: 100px;
      }

      .basic {
        background-color: white;
      }
    `,
  ],
})
export class SquareComponent {
  @Input()
  value: 'X' | 'O' | null = null;
}
