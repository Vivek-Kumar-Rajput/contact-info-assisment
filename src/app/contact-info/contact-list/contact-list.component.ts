/**
 * @desc Contact list component that will show list of contacts.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  public contacts: Contact[];
  constructor(
    private router: Router,
    private contactsService: ContactsService
  ) { }

  /**
   * Override OnInit method to perform operation after init.
   */
  ngOnInit() {
    this.contacts = this.contactsService.getContactList();
  }

  /**
   * Method to navigate on contact details screen.
   * @param contact: Selected contact object.
   * @param flag: Flag to deferenciate source of click.
   */
  showDetails(contact: Contact, flag) {
    if (flag === 1) {
      this.router.navigate(['contact-details'], { queryParams: { contactId: contact.contactId }});
    } else if (flag === 2) {
      this.router.navigate(['contact-details']);
    } else if (flag === 3) {
      this.router.navigate(['contact-details'], { queryParams: { edit: 'edit', contactId: contact.contactId }});
    } else {
      this.deleteContact(contact);
    }
  }

 /**
   * Method to show confirmation box and call API method to delete contact.
   */
  deleteContact(contact: Contact) {
    const sectedOption = confirm('Are you sure, Do you want to delete this contact?');
    if (sectedOption) {
      this.contactsService.delete(contact.contactId);
    }
  }
  contactsTrackByFn = (index: number, contactObj: Contact) => contactObj.phoneNumber;
}
