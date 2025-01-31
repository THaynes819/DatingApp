import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { Photo } from '../_models/photo';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseurl = environment.apiUrl;
  private http = inject(HttpClient);

  getUserWithRoles() {
    return this.http.get<User[]>(this.baseurl + 'admin/users-with-roles')
  }

  updateUserRoles(username: string, roles: string[]) {
    return this.http.post<string[]>(this.baseurl + 'admin/edit-roles/' + username + '?roles=' + roles, {})
  }

  getPhotosForApproval() {
    return this.http.get<Photo[]>(this.baseurl + 'admin/photos-to-moderate')
  }

  approvePhoto(photoId: number) {
    return this.http.post(this.baseurl + 'admin/approve-photo/' + photoId, {})
  }

  rejectPhoto(photoId: number) {
    return this.http.post(this.baseurl + 'admin/reject-photo' + photoId, {})
  }
}
