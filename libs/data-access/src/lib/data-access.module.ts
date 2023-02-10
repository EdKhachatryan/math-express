import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthStateModule } from "./store";

@NgModule({
  imports: [CommonModule, AuthStateModule
  ],
})
export class DataAccessModule {}
