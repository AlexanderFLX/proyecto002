import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Administración de artículos';

  art = {
    codigo: null,
    descripcion: null,
    precio: null
  };

  articulos = [
    {codigo: 1, descripcion: 'Naranjas', precio: 3.70}, 
    {codigo: 2, descripcion: 'Peras', precio: 2.10}, 
    {codigo: 3, descripcion: 'Manzanas', precio: 3.00}, 
    {codigo: 4, descripcion: 'Plátanos', precio: 1.50}, 
    {codigo: 5, descripcion: 'Mandarinas', precio: 4.20}
  ];

  seleccionar(articulo) {
    this.art.codigo = articulo.codigo;
    this.art.descripcion = articulo.descripcion;
    this.art.precio = articulo.precio;
  }

  borrar(articulo) {
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].codigo == articulo.codigo) {
        this.articulos.splice(i, 1);
        return;
      }
    }
    alert('No existe código de artículo ' + articulo.codigo);
  }

  existenElementos() {
    return this.articulos.length > 0;
  }

  agregar() {
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].codigo == this.art.codigo) {
        alert('El artículo ' + this.art.codigo + ' ya existe.');
        return;
      }
    }
    this.articulos.push({
      codigo: this.art.codigo,
      descripcion: this.art.descripcion,
      precio: this.art.precio
    });
    this.art.codigo = null;
    this.art.descripcion = null;
    this.art.precio = null;
  }

  modificar() {
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].codigo == this.art.codigo) {
        this.articulos[i].descripcion = this.art.descripcion;
        this.articulos[i].precio = this.art.precio;
        return;
      }
    }
    alert('No existe código de artículo ' + this.art.codigo);
  }

}
