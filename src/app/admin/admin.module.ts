import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthGuard } from "./auth.gard";
import { MaterialFeatures } from "./material.module";
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { OrderTableComponent } from './order-table/order-table.component';

let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    {
      path: "main", component: AdminComponent, canActivate: [AuthGuard],
      children: [
        { path: "products/:mode/:id",
            component: ProductEditorComponent },
        { path: "products/:mode", component: ProductEditorComponent },
        { path: "products", component: ProductTableComponent },
        { path: "orders", component: OrderTableComponent },
        { path: "**", redirectTo: "products" }
    ]
    },
    { path: "**", redirectTo: "auth" }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, MaterialFeatures],
    declarations: [AuthComponent, AdminComponent, ProductTableComponent, ProductEditorComponent, OrderTableComponent],
    providers: [AuthGuard]
})
export class AdminModule { }
