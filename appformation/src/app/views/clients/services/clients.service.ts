import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private pCollection: Observable<Client[]>;
  private urlApi: string = environment.url;

    constructor(private http: HttpClient) {
      this.collection = this.http.get<Client[]>(`${this.urlApi}clients`).pipe(
        map(datas => {
          return datas.map(obj => {
            return new Client(obj);
          })
        })
      );
    }

    public get collection(): Observable<Client[]> {
      return this.pCollection;
    }
    public set collection(col: Observable<Client[]>) {
      this.pCollection = col;
    }

    public getByState(state_client: string): Observable<Client[]> {
      return this.http.get<Client[]>(`${this.urlApi}clients?state=${state_client}`).pipe(
        map(jsonObjects => {
          return jsonObjects.map(obj => {
            return new Client(obj);
          })
        })
      )
    }

    public getByCaInferiorToTreshold(treshold: number): Observable<Client[]> {
      // return this.http.get<Client[]>(`${this.urlApi}clients`).pipe(
      //   map(jsonObjects => {
      //     return jsonObjects.filter(data => (data.ca <= treshold))
      //   })
      // )
      return this.http.get<Client[]>(`${this.urlApi}clients/`).pipe(
        map(datas => datas.filter(data => data.ca <= treshold)
          .map(
            filteredData => new Client (filteredData)
          )
        )
      )
    }


  public update(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}clients/${client.id}`, client)
  }

  public updateState(client: Client, state: StateClient): Observable<Client> {
    const obj = new Client({...client})
    obj.state = state;
    return this.update(obj);
  }

  public addClient(client: Client): Observable<Client>{
    return this.http.post<Client>(`${this.urlApi}clients/`, client)
  }

}
