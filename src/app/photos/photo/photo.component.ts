import { Component, Input } from "@angular/core";

@Component({
  selector: 'ap-photo',
  templateUrl: 'photo.component.html'
})
export class PhotoComponent{

  //são Inbound properties
  @Input() description = '';
  @Input() url = '';
}