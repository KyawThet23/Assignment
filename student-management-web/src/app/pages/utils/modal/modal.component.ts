import { Component, Input } from '@angular/core';

declare const bootstrap: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input('modalId')
  id!: string;
  @Input()
  title?: string;

  private dialog: any;

  ngAfterViewInit(): void {
    this.dialog = new bootstrap.Modal(`#${this.id}`);
  }

  show() {
    this.dialog.show();
  }

  hide() {
    this.dialog.hide();
  }
}
