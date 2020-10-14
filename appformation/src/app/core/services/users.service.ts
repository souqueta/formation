import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateRole } from 'src/app/shared/enums/state-role.enum';
import { User } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private pCollection: Observable<User[]>;
  private urlApi: string = environment.url;

    constructor(private http: HttpClient) {
      this.collection = this.http.get<User[]>(`${this.urlApi}users`).pipe(
        map(datas => {
          return datas.map(obj => {
            return new User(obj);
          })
        })
      );
      console.log(this.getByUsernameAndPassword('user1', 'user1'));
    }

    public get collection(): Observable<User[]> {
      return this.pCollection;
    }
    public set collection(col: Observable<User[]>) {
      this.pCollection = col;
    }

    public getByUsernameAndPassword(username: string, password: string): Observable<User> {
      return this.http.get<User>(`${this.urlApi}users?username=${username}&password=${password}`).pipe(
          map(obj => {
            return new User(obj);
          })
      )
    }

    public updateRole(client: User, state: StateRole): Observable<User> {
      const obj = new User({...client})
      obj.role = state;
      return this.update(obj);
    }


  public update(client: User): Observable<User> {
    return this.http.put<User>(`${this.urlApi}users/${client.id}`, client)
  }
}
