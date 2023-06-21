import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.models';
import { environment } from 'src/environments/environment.development';
import jwtDecode from "jwt-decode"


@Injectable({
  providedIn: 'root'
})
export class UserService {
  urlApi = `${environment.API_URI}/user`
  userToCreate: User = new User()
  allUsers: User[] = []
  auth: any = {
    username: '',
    password: ''
  }
  constructor(private http:HttpClient) {

   }
   //metodos que van a consumir la api
   getAllUsers(){
    return this.http.get(`${this.urlApi}/getAll`)
  }
  createUser(data: User){
    return this.http.post(`${this.urlApi}/create`, data)
  }
  deleteUser(_id: string){
    return this.http.delete(`${this.urlApi}/delete/${_id}`)
  }
  updateUser(data: User){
    let dataToUpdate = {
      _id: data._id,
      dataToUpdate: data
    }
    return this.http.put(`${this.urlApi}/update`, dataToUpdate)
  }
  login(data:any){
    return this.http.post(`${this.urlApi}/login`, data)
  }
  isLoggedIn(){
    return localStorage.getItem('token') ? true : false
}
decodeToken(): any{
  const token = localStorage.getItem('token')
  let decode
 try {
    decode = jwtDecode(token ? token: "error")
 } catch (error) {
  
 }
  return decode 
}

isAdmin(){
  let obj = this.decodeToken()
  return obj && obj.rote === 'admin' ? true : false
}
}
