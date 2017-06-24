import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from "app/body/main/main.component";
import { BodyRouting } from "app/body/body.routing";

@NgModule({
  imports: [
    CommonModule,
    BodyRouting
  ],
  declarations: [MainComponent],
  exports:[MainComponent]
})
export class BodyModule { }
