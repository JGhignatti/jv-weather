import { Component } from "@angular/core";

@Component({
  selector: 'jv-loader',
  template: `
    <div class="spinner">
    Carregando
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
  `,
})
export class LoaderComponent {
}