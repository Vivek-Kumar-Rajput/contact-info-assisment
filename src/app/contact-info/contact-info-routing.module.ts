import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactsService } from './services/contacts.service';
const routes: Routes = [
  {
    path: '',
    component: ContactListComponent
  },
  {
    path: 'contact-list',
    component: ContactListComponent
  }, {
    path: 'contact-details',
    component: ContactDetailsComponent
  }, {
    path: 'add-contact',
    component: ContactDetailsComponent
  }, {
    path: 'edit-contact',
    component: ContactDetailsComponent
  }
];

@NgModule({
  imports: [CommonModule,ReactiveFormsModule, RouterModule.forRoot(routes)],
  declarations: [ContactListComponent, ContactDetailsComponent],
  exports: [RouterModule],
  providers: [ContactsService]
})
export class ContactInfoRoutingModule { }
