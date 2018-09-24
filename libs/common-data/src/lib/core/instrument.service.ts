import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://level-up-api-mefqhdpvub.now.sh/instruments';

const test = {
  id: 1,
  name: 'Seattle',
  population: 12345,
  state: 'Washington'
}

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  constructor(private http: HttpClient) {}

  getInstruments() {
    return this.http.get(`${BASE_URL}`);
  }

  createInstrument(instrument) {
    return this.http.post(`${BASE_URL}`, instrument);
  }

  updateInstrument(instrument) {
    return this.http.patch(`${BASE_URL}/${instrument.id}`, instrument);
  }

  deleteInstrument(instrument) {
    return this.http.delete(`${BASE_URL}/${instrument.id}`);
  }
}
