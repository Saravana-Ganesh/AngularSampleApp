import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list.component';
import { ConvertToSpaces } from 'src/app/shared/convert-to-spaces.pipes';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from '../product-detail.guard';
import { StarComponent } from 'src/app/shared/star.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpaces,
    ProductDetailComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path:'products',component:ProductListComponent},
      {
        path:'products/:id',
        canActivate:[ProductDetailGuard],
        component:ProductDetailComponent
      },
    ])
  ]
})
export class ProductModuleModule { }
