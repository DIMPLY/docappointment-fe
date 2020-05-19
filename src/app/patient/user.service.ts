import { Injectable } from '@angular/core';
import { HttpWrapper } from '../httpwrapper';

import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpWrapper) { }

    getAll() {
        let resp = this.http.get(`/patient`);
        let res = [];
	for (let _user in resp){
	    let user = Object.assign(new User(), _user);
	    res.push(user);
	}
	return res;
    }

    register(user: User) {
        return this.http.post(`patient`, user);
    }

    delete(id: number) {
        return this.http.delete(`patient`, id);
    }
}
