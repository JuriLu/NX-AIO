import {AfterViewInit, Component} from '@angular/core';
import {GcPdfViewer} from "@grapecity/gcpdfviewer";


@Component({
  selector: 'nx-aio-pdf-app',
  templateUrl: './pdf-app.component.html',
  styleUrls: ['./pdf-app.component.scss']
})
export class PDFAppComponent implements AfterViewInit{
  ngAfterViewInit(){
    const viewer = new GcPdfViewer("#viewer", {
      workerSrc: "//node_modules/@grapecity/gcpdfviewer/gcpdfviewer.worker.js",
      restoreViewStateOnLoad: false
    });
    viewer.addDefaultPanels();
    viewer.open('../assets/PDFApp/Introduzione_a_Wave.pdf')
  }
}
