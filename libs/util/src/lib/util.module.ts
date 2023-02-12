import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RoundPipePipe } from './pipes/round-pipe/round-pipe.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    RoundPipePipe,
  ],
  exports: [
    RoundPipePipe,
  ],
  providers: [
    DecimalPipe,
    RoundPipePipe,
  ],
})
export class UtilModule {}
