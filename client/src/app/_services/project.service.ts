import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'https://https://localhost:7284/api/projects';

  constructor(private http: HttpClient) { }

  uploadProject(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<any>(`${this.apiUrl}/upload`, formData);
  }

  downloadProject(projectId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/download/${projectId}`, {
      responseType: 'blob'
    });
  }
}