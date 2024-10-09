import { Routes } from '@angular/router';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { CardComponent } from './card/card.component';

export const routes: Routes = [
    {path:"home",component: CardComponent},
    {path:'item-detail',component: ItemDetailComponent}
];
