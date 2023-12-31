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
        `assets/pictures/${ folderName }/4.jpg`,
        `assets/pictures/${ folderName }/5.jpg`,
        `assets/pictures/${ folderName }/6.jpg`,
        `assets/pictures/${ folderName }/7.jpg`,
        `assets/pictures/${ folderName }/8.jpg`,

      ],
      history: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
        `assets/pictures/${ folderName }/4.jpg`,
        `assets/pictures/${ folderName }/5.jpg`,
      ],
      vision: [
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
      ],
      ubication: [
        `assets/pictures/${ folderName }/1.jpg`,
      ],
      servicesHotels:[
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
      ],
      servicesResidences:[
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
      ],
      valenciaExperience:[
        `assets/pictures/${ folderName }/1.jpeg`,
        `assets/pictures/${ folderName }/2.jpeg`,
        `assets/pictures/${ folderName }/3.jpeg`,
        `assets/pictures/${ folderName }/4.jpeg`,
      ],
      mandarinaExperience:[
        `assets/pictures/${ folderName }/1.jpeg`,
        `assets/pictures/${ folderName }/2.jpeg`,
        `assets/pictures/${ folderName }/3.jpeg`,
      ],
      capeExperience:[
        `assets/pictures/${ folderName }/1.jpeg`,
        `assets/pictures/${ folderName }/2.jpeg`,
        `assets/pictures/${ folderName }/3.jpeg`,
      ],
      chilenoExperience:[
        `assets/pictures/${ folderName }/1.jpeg`,
        `assets/pictures/${ folderName }/2.jpeg`,
        `assets/pictures/${ folderName }/3.jpeg`,
      ],
      delMarExperience:[
        `assets/pictures/${ folderName }/1.jpg`,
        `assets/pictures/${ folderName }/2.jpg`,
        `assets/pictures/${ folderName }/3.jpg`,
      ]
    };

    return imageMap[folderName] || [];

  }
}
