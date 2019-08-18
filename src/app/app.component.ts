import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-wasm-rust-test';

  constructor() {
    this.load();
  }

  async load() {
    const wasm = await import('../wasm/fibonacci_rust');
    console.log(wasm.fibonacci(31));
  }
}




