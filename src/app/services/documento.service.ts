import { Injectable } from '@angular/core';
import { DocumentoEntity } from '../models/documento_entity';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  documentos: DocumentoEntity[] = [
    {
      id: 1,
      nome: 'Modelo de Arquitetura.pdf',
      paginas: 5,
      ultimaModificacao: 'ontem'
    }
  ];

  private documentosApiUrl = 'http://localhost:8080/modelo-sso-api/api/v1/documentos';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET documentos from the server */
  getDocuments(): Observable<DocumentoEntity[]> {
    // this.messageService.add('DocumentoService: documentos obtidos com sucesso!');
    // this.log('documentos obtidos com sucesso!');
    // return of(this.documentos);
    return this.http.get<DocumentoEntity[]>(this.documentosApiUrl)
      .pipe(
        // catchError(this.handleError('getDocuments', []))
      );
  }

  /** Log a DocumentosService message with the MessageService */
  private log(message: string) {
    this.messageService.add('DocumentoService: ${message}');
  }

}
