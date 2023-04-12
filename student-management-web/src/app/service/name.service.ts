import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: any;
  private data2: any;

  setData(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  setData2(data: any) {
    this.data2 = data;
  }

  getData2() {
    return this.data2;
  }
}
