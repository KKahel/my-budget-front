import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  add(key: string, data: any) {
    data = JSON.stringify(data);
    localStorage.setItem(key, data);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  get(key: string) {

    var value = localStorage.getItem(key);

    if(!value)
      return null;

    return JSON.parse(value);

  }
}
