import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})
export class CrearProductosComponent {

  productoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _productoService: ProductoService
  ) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required]
    });
  }

  agregarProducto() {
    const producto: Producto = {
      producto: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value
    };

    Swal.fire({
      title: 'Creacion de Producto',
      text: '¿Desea crear el producto?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._productoService.guardarProducto(producto).subscribe(data => {
          console.log(data);
          this.router.navigate(['/listar-productos']);
        });
      }
    });
  }
  onFileChange(event: any) {
    // Implementa la lógica para manejar el cambio de archivo
    console.log('Archivo cambiado', event);
  }

  onUpload() {
    // Implementa la lógica para subir archivos
    console.log('Subir archivo');
  }
}
