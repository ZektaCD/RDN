import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SiteService {

  section_titles_states = signal<number>(0);
  clients_carrousel = signal([
    "/assets/img/clientes/2.png",
    "/assets/img/clientes/3.png",
    "/assets/img/clientes/4.png",
    "/assets/img/clientes/5.png",
    "/assets/img/clientes/6.png",
    "/assets/img/clientes/7.png",
    "/assets/img/clientes/8.png",
  ]);

  getSectionTitleState():number {
    return this.section_titles_states();
  }

  setSectionTitleState(position: number): void {
    console.log('Mostrando imagen para servicio en posición:', position);
    this.section_titles_states.set(position);
  }

  getClientsCarrousel(): string[] {
    return [...this.clients_carrousel(),...this.clients_carrousel()];
  }
}
