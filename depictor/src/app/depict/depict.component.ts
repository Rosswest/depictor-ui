import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { DepictService } from './depict.service';
import { DepictionConfig } from './depiction-config';

@Component({
  selector: 'app-depict',
  templateUrl: './depict.component.html',
  styleUrls: ['./depict.component.css']
})
export class DepictComponent implements OnInit {

  private static readonly SMILES_NOT_PROVIDED: string= 'Smiles must be provided';

  smiles: string = "";
  imageData: SafeHtml;
  depicting: boolean = false;
  @ViewChild('viewport') viewport: ElementRef;
  @ViewChild('inputs') inputsElement: ElementRef;
  
  constructor(private depictionService: DepictService,
    private sanitizer: DomSanitizer,
    private messageService: MessageService) { }

  ngOnInit(): void {}

  depict() {
    const validation = this.validate();
    if (validation.isValid) {
      this.depicting = true;
      const config = new DepictionConfig();
      config.smiles = this.isDefined(this.smiles) ? this.smiles : null;
      config.depictionType = 'SVG';
      config.size = this.calculateImageSize();
      this.depictionService.depict(config).subscribe(data=>{
        this.imageData = this.sanitizer.bypassSecurityTrustHtml(data.imageData);
        this.depicting = false;
      }, error => {
        console.error(error);
        this.messageService.add({severity:'error', summary:'Error', detail:error.error.message});
        this.depicting = false;
      });
    } else {
      this.messageService.add({severity:'info', summary:'Invalid Inputs', detail:validation.message});

    }
    
  }

  validate() {
    const result = {
      isValid: true,
      message: null
    };
    if (!this.isDefined(this.smiles)) {
      result.message = DepictComponent.SMILES_NOT_PROVIDED;
    } else if (this.smiles.length == 0) {
      result.message = DepictComponent.SMILES_NOT_PROVIDED;

    }
    return result;
  }

  isDefined(val: any) {
    if (val == undefined || val == null) {
      return false;
    }

    return true;
  }

  calculateImageSize() {
    const windowHeight = window.innerHeight;
    const inputsHeight = this.inputsElement.nativeElement.offsetHeight;
    let height = windowHeight - inputsHeight - 30;
    height = Math.max(60,height);
    const width = this.viewport.nativeElement.clientWidth;
    const size = Math.min(width,height);
    return size;

  }
}
