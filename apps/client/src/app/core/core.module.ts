import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CORE_ROUTES } from './constants/core.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(CORE_ROUTES)],
  declarations: []
})
export class CoreModule {}
