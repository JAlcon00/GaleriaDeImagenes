// Importaciones necesarias, incluyendo FormsModule para ngModel
import { Component, OnInit } from '@angular/core';
import { IImage } from './image-interface';
// Ajusta la ruta según sea necesario

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  images: IImage[] = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/167684/pexels-photo-167684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Imagen 1',
      description: 'Descripción de la Imagen 1',
      category: 'Naturaleza'
    },
    {
      id: 2,
      url: 'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Imagen 2',
      description: 'Descripción de la Imagen 2',
      category: 'Ciudad'
    },
    {
      id: 3,
      url: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Imagen 3',
      description: 'Descripción de la Imagen 3',
      category: 'Naturaleza'
    },
    {
      id: 4,
      url: 'https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Imagen 4',
      description: 'Descripción de la Imagen 4',
      category: 'Arquitectura'
    },
  ]; // Tu lista de imágenes
  filteredImages: IImage[] = [];
  searchText: string = '';
  selectedCategory: string = '';

  // Supongamos que tienes una lista de categorías
  categories: string[] = ['Categoría 1', 'Categoría 2'];

  ngOnInit(): void {
    // Inicializa images y filteredImages
    this.filteredImages = this.images;
  }

  filterImages(): void {
    this.filteredImages = this.images.filter(image =>
      (this.selectedCategory ? image.category === this.selectedCategory : true) &&
      (this.searchText ? image.title.includes(this.searchText) || (image.description && image.description.includes(this.searchText)) : true)
    );
  }
}
