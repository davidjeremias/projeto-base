import { Component, OnInit } from '@angular/core';
import { DocumentoEntity } from '../models/documento_entity';
import { DocumentoService } from '../services/documento.service';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css']
})
export class DocumentoComponent implements OnInit {

  documentos: DocumentoEntity[];

  constructor(private documentoService: DocumentoService) { }

  ngOnInit() {
    this.getDocuments();
  }

  getDocuments(): void {
    this.documentoService.getDocuments()
      .subscribe(documentos => this.documentos = documentos);
  }

}
