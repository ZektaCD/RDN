import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
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


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, ReactiveFormsModule, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{
  faGear = faGear;
  faCheckCircle = faCircleCheck;
  faArrowRight = faArrowRightLong;

  cargando = false;
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

  constructor(private fb: FormBuilder){
    this.contactForm = this.fb.group(
      {
        name_surname:[],
        email:[],
        number:[],
        message:[]
      }
    );
  }

  ngOnInit(): void {
    const swiper = new Swiper('.swiper',{
      direction: 'horizontal',
      loop: true,
      // freeMode: true,
      slidesPerView: 4,
      spaceBetween: 20,
    });
  }

  get f(){
    return this.contactForm.controls;
  }

}
