import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesFromFolderService {
  public imageArray: string[] = [];
  getImages( folderName: string ): string[]{
    const imageMap: { [key: string]: string[] } = {
      us: [
        `${ folderName }/1.jpg`,
        `${ folderName }/2.jpg`,
        `${ folderName }/3.jpg`,
      ],
      history: [
        `${ folderName }/1.jpg`,
        `${ folderName }/2.jpg`,
        `${ folderName }/3.jpg`,
      ],
      vision: [
        `${ folderName }/1.jpg`,
        `${ folderName }/2.jpg`,
        `${ folderName }/3.jpg`,
      ],
      ubication: [
        `${ folderName }/1.jpg`,
        `${ folderName }/2.jpg`,
        `${ folderName }/3.jpg`,
      ],
    };

    return imageMap[folderName] || [];

  }
}
