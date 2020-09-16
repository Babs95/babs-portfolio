import { CommandeUpdateComponent } from "./commande/commandeUpdate.component";
import { Ng2ImgMaxModule } from "ng2-img-max";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { BoardAdminComponent } from "./board-admin/board-admin.component";
import { BoardModeratorComponent } from "./board-moderator/board-moderator.component";
import { BoardUserComponent } from "./board-user/board-user.component";
import { authInterceptorProviders } from "./_helpers/auth.interceptor";
import { FormulaireUpdateComponent } from "./formulaire/formulaireUpdate.component";
import { FormulaireComponent } from "./formulaire/formulaire.component";
import * as $ from "jquery";
import { NgxPaginationModule } from "ngx-pagination";
import { HttpClientModule } from "@angular/common/http";
import { UserComponent } from "./user/user.component";
import { UserUpdateComponent } from "./user/userUpdate.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DemoMaterialModule } from "./material.module";
import { ClassePipe } from "./pipes/classe.pipe";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { GestionCommandeComponent } from "./gestion-commande/gestion-commande.component";
import { ProduitComponent } from "./produit/produit.component";
import { CategorieUpdateComponent } from "./categorie/categorieUpdate.component";
import { CategorieComponent } from "./categorie/categorie.component";
import { ProduitUpdateComponent } from "./produit/produitUpdate.component";
import { ProduitStockComponent } from "./produit/produitStock.component";
import { ClientComponent } from "./client/client.component";
import { ClientUpdateComponent } from "./client/clientUpdate.component";
import { CommandeComponent } from "./commande/commande.component";
import { ListecommandeencoursComponent } from './listecommandeencours/listecommandeencours.component';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import { StatistiqueComponent } from './statistique/statistique.component';
import { LottieModule } from 'ngx-lottie';
import { DetailsCommandeComponent } from './details-commande/details-commande.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { CommandePipe } from './pipes/commande.pipe';
import { PaymentComponent } from './payment/payment.component';
import { MarqueComponent } from './marque/marque.component';
import { MarqueUpdateComponent } from './marque/marque-update/marque-update.component';
export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    FormulaireUpdateComponent,
    FormulaireComponent,
    UserComponent,
    UserUpdateComponent,
    ClientComponent,
    ClientUpdateComponent,
    LoadingSpinnerComponent,
    ClassePipe,
    CategorieComponent,
    CategorieUpdateComponent,
    ProduitComponent,
    ProduitUpdateComponent,
    GestionCommandeComponent,
    CommandeComponent,
    CommandeUpdateComponent,
    ListecommandeencoursComponent,
    ProduitStockComponent,
    StatistiqueComponent,
    DetailsCommandeComponent,
    CommandePipe,
    PaymentComponent,
    MarqueComponent,
    MarqueUpdateComponent,
  ],
  imports: [
    LottieModule.forRoot({ player: playerFactory }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgSelectModule,
    Ng2ImgMaxModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    NgxSpinnerModule,
    CommonModule,
    HighchartsChartModule,
  ],
  entryComponents: [PaymentComponent],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
