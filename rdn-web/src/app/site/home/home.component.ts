import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowRightLong,
  faGear,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import 'animate.css';
import 'hover.css';
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CountUp } from 'countup.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule,
    ReactiveFormsModule,
    FooterComponent,
    RouterModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  faGear = faGear;
  faCheckCircle = faCircleCheck;
  faArrowRight = faArrowRightLong;

  cargando = false;
  enviado = false;
  error = '';
  contactForm: FormGroup;
  servicios_info_array = [
    {
      nombre: 'Obras de infraestructura',
      servicios: [
        'Redes de gas domiciliarias en polietileno y acero',
        'Plantas de Regulación y medición',
        'Ramales y Gasoductos.',
        'Redes domiciliarias de agua y cloaca',
        'Acueductos',
        'Plantas de tratamientos',
        'Redes Elétricas de distribución en baja y media tensión',
        'Sub-Estaciones transformadoras.',
        'Proyectos Ejecutivos',
      ],
      svg: 'pipe',
    },
    {
      nombre: 'Obras civiles',
      servicios: [
        'Construcción de Edificios, Galpones y Shelters.',
        'Estructuras de hormigón armado, metálicas y madera',
        'Mantenimientos y reparaciones de general',
        'Gaviones para defensa',
      ],
      svg: 'build',
    },
    {
      nombre: 'Servicios petroleros',
      servicios: [
        'Gasoductos y oleoductos.',
        'Prefabricados de isométricos',
        'Pruebas hidraulicas',
        'Instrumentos de controles y procesos',
        'Instalaciones de detección y extinsión contra incendios',
        "Agua nebulizada, CO2, sprinklers y Bie's",
        'Arenados, pinturas y mantenimiento en general',
        'Protección catódica',
        'Montajes mecánicos de equipos',
        'Provisión de personal especializado',
        'Obras civiles asociadas',
      ],
      svg: 'oil',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name_surname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      number: [
        '',
        [Validators.required, Validators.pattern(/^[0-9+\-\s()]+$/)],
      ],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  ngOnInit(): void {
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 4,
      spaceBetween: 20,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
    const countUp = new CountUp('exp-year', 30, { enableScrollSpy: true });
    const countUp_b = new CountUp('proy-end', 1500, {
      separator: '.',
      enableScrollSpy: true,
    });
    const countUp_c = new CountUp('clients-cont', 300, {
      enableScrollSpy: true,
    });
    if (!countUp.error && !countUp_b.error && !countUp_c.error
    ) {
      countUp.start();
      countUp_b.start();
      countUp_c.start();
    } else {
      console.error(
        countUp.error,
        countUp_b.error,
        countUp_c.error,
      );
    }
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.cargando = true;
      this.error = '';
      this.enviado = false;

      const formData = new FormData();
      formData.append(
        'name',
        this.contactForm.get('name_surname')?.value || '',
      );
      formData.append('email', this.contactForm.get('email')?.value || '');
      formData.append('phone', this.contactForm.get('number')?.value || '');
      formData.append('message', this.contactForm.get('message')?.value || '');

      // TODO: Implementar envío al backend
      // Simulamos delay para demostración
      setTimeout(() => {
        this.cargando = false;
        this.enviado = true;
        this.contactForm.reset();

        // Ocultar mensaje de éxito después de 5 segundos
        setTimeout(() => {
          this.enviado = false;
        }, 5000);
      }, 1500);
    }
  }
}
