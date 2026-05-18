import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-about',
  imports: [FooterComponent,FontAwesomeModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  faCheckCircle = faCircleCheck;

}
