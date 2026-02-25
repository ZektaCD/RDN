import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styles: `
    .footer{
      background: var(--brand-color-red-b);
    }
    .footer img{
      width: 200px
    }
    `
})
export class FooterComponent {

}
