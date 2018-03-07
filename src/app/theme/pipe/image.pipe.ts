import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  url_default = 'https://static.hogarmania.com/archivos/201705/mascotas-gatos-hidratacion-416x236x80xX.jpg';

  transform(url: any, texto: string): any {
    console.log(url);
    console.log(texto);
    if (!url) {
      url = this.url_default;
    }

    return url;
  }

}
