import { Component } from '@angular/core';
import { Livro } from './livro';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.css'
})
export class LivrosComponent {
  alternarFavorito(){
    this.livro.favorito = !this.livro.favorito 
  }

  livro: Livro = {
    titulo: "HunterxHunter",
    autoria: "Yoshihiro Togashi",
    favorito: false,
    genero:"Ficcao",
    imagem: "https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_QL75_UY281_CR4,0,190,281_.jpg"
  }
  

}
