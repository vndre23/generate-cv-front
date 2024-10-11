import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'CurriculumVitae',
            icon: 'pi pi-address-book',
            items: [
                {
                    label: 'Crear',
                    icon: 'pi pi-file-plus'
                },
                {
                    label: 'Listar',
                    icon: 'pi pi-list-check'
                },
            ]
        }

    ]
}

}
