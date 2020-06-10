import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { map } from 'rxjs/operators'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  private _albumUrl: string="../assets/album.json";
  getAlbum(id:number): Observable<any>{
    return this._http.get(this._albumUrl).pipe(map(response => response.json()));
  }
  

  constructor(private _http: Http) {
  
   }

  

}
