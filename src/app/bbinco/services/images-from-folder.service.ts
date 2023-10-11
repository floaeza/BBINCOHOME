import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesFromFolderService {
  public imageArray: string[] = [];
  getImages( folderName: string ): string[]{
    const imageMap: { [key: string]: string[] } = {
      us: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
      ],
      history: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
      ],
      vision: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
      ],
      ubication: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
      ],
    };

    return imageMap[folderName] || [];

  }
}
