import { CommandeUpdateComponent } from "./commande/commandeUpdate.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { BoardUserComponent } from "./board-user/board-user.component";
import { BoardModeratorComponent } from "./board-moderator/board-moderator.component";
import { BoardAdminComponent } from "./board-admin/board-admin.component";
import { FormulaireUpdateComponent } from "./formulaire/formulaireUpdate.component";
import { FormulaireComponent } from "./formulaire/formulaire.component";
import { UserComponent } from "./user/user.component";
import { UserUpdateComponent } from "./user/userUpdate.component";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { GestionCommandeComponent } from "./gestion-commande/gestion-commande.component";
import { ProduitComponent } from "./produit/produit.component";
import { ProduitUpdateComponent } from "./produit/produitUpdate.component";
import { CategorieComponent } from "./categorie/categorie.component";
import { CategorieUpdateComponent } from "./categorie/categorieUpdate.component";
import { ClientComponent } from "./client/client.component";
import { ClientUpdateComponent } from "./client/clientUpdate.component";
import { CommandeComponent } from "./commande/commande.component";
import { ProduitStockComponent } from "./produit/produitStock.component";
import { ListecommandeencoursComponent } from './listecommandeencours/listecommandeencours.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { DetailsCommandeComponent } from './details-commande/details-commande.component';
import { MarqueComponent } from './marque/marque.component';
import { MarqueUpdateComponent } from './marque/marque-update/marque-update.component';
const routes: Routes = [
  { path: "", redirectTo: "gestion-commande", pathMatch: "full" },
  { path: "LoadingSpinner", component: LoadingSpinnerComponent },
  { path: "home", component: HomeComponent },

  { path: "produit", component: ProduitComponent },
  { path: "produitUpdate/:id", component: ProduitUpdateComponent },
  { path: "produitUpdate", component: ProduitUpdateComponent },
  { path: "produitStock/:id", component: ProduitStockComponent },

  { path: "categorie", component: CategorieComponent },
  { path: "categorieUpdate/:id", component: CategorieUpdateComponent },
  { path: "categorieUpdate", component: CategorieUpdateComponent },

  { path: "marque", component: MarqueComponent },
  { path: "marqueUpdate/:id", component: MarqueUpdateComponent },
  { path: "marqueUpdate", component: MarqueUpdateComponent },

  { path: "user", component: UserComponent },
  { path: "userUpdate/:id", component: UserUpdateComponent },
  { path: "userUpdate", component: UserUpdateComponent },

  { path: "client", component: ClientComponent },
  { path: "clientUpdate/:id", component: ClientUpdateComponent },
  { path: "clientUpdate", component: ClientUpdateComponent },

  { path: "formulaire", component: FormulaireComponent },
  { path: "formulaireUpdate/:id", component: FormulaireUpdateComponent },
  { path: "formulaireUpdate", component: FormulaireUpdateComponent },

  { path: "gestion-commande", component: GestionCommandeComponent },
  { path: "commande", component: CommandeComponent },
  { path: "commandeUpdate/:id", component: CommandeUpdateComponent },
  { path: "commandeUpdate", component: CommandeUpdateComponent },
  { path: "listecommandeencours", component: ListecommandeencoursComponent },
  { path: "detailscommande/:id", component: DetailsCommandeComponent },

  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "user", component: BoardUserComponent },
  { path: "mod", component: BoardModeratorComponent },
  { path: "admin", component: BoardAdminComponent },
  { path: "statistique", component: StatistiqueComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
