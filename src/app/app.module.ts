import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductComponent } from './components/products/product/product.component';
import { ActionsButtonsComponent } from './components/dashboard-components/actions-buttons/actions-buttons.component';
import { SearchProductsComponent } from './components/dashboard-components/search-products/search-products.component';
import { LogoComponent } from './components/dashboard-components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    LayoutComponent,
    ProductsListComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ActionsButtonsComponent,
    SearchProductsComponent,
    LogoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
