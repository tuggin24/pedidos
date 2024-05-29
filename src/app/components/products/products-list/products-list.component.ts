import { Component } from '@angular/core';
import { Product } from 'src/app/models/products.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  products: Product[] = [
    { dk: 'dk1', nombre: 'nombre1', precio: 1, precio_descuento: 1, descripcion: 'descripcion1', imagen: 'imagen1', laboratorio: 'laboratorio1' },
    { dk: 'dk2', nombre: 'nombre2', precio: 2, precio_descuento: 2, descripcion: 'descripcion2', imagen: 'imagen2', laboratorio: 'laboratorio2' },
    { dk: 'dk3', nombre: 'nombre3', precio: 3, precio_descuento: 3, descripcion: 'descripcion3', imagen: 'imagen3', laboratorio: 'laboratorio3' },
    { dk: 'dk4', nombre: 'nombre4', precio: 4, precio_descuento: 4, descripcion: 'descripcion4', imagen: 'imagen4', laboratorio: 'laboratorio4' },
    { dk: 'dk5', nombre: 'nombre5', precio: 5, precio_descuento: 5, descripcion: 'descripcion5', imagen: 'imagen5', laboratorio: 'laboratorio5' },
    { dk: 'dk6', nombre: 'nombre6', precio: 6, precio_descuento: 6, descripcion: 'descripcion6', imagen: 'imagen6', laboratorio: 'laboratorio6' },
    { dk: 'dk7', nombre: 'nombre7', precio: 7, precio_descuento: 7, descripcion: 'descripcion7', imagen: 'imagen7', laboratorio: 'laboratorio7' },
    { dk: 'dk8', nombre: 'nombre8', precio: 8, precio_descuento: 8, descripcion: 'descripcion8', imagen: 'imagen8', laboratorio: 'laboratorio8' },
    { dk: 'dk9', nombre: 'nombre9', precio: 9, precio_descuento: 9, descripcion: 'descripcion9', imagen: 'imagen9', laboratorio: 'laboratorio9' },
    { dk: 'dk10', nombre: 'nombre10', precio: 10, precio_descuento: 10, descripcion: 'descripcion10', imagen: 'imagen10', laboratorio: 'laboratorio10'},
    
  ];  // <-- products is an array of objects

}
