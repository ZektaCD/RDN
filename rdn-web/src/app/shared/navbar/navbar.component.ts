import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import 'animate.css';
import 'hover.css';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

faBars = faBars;

}
