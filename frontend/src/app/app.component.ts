// frontend/src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  template: `<h1>Hello, {{ title }}</h1>` // ya apka message bhi ho sakta hai
})
export class AppComponent implements OnInit {
  title = 'frontend';  // ✅ Ye line add karo
  message: string = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getMessage().subscribe((res: any) => {
      this.message = res.message;
    });
  }
}
