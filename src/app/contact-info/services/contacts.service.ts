/**
 * @desc service to handle contact API and utility methods for contact module.
 */
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactsService {
  private contactList: Contact[] = [
    {contactId: 1, firstName: 'Ajay', lastName: 'Pawar', email: 'ajay@gmail.com',
        phoneNumber: 9087643322, status: 'Active'},
    {contactId: 2, firstName: 'Sameer', lastName: 'Saxena', email: 'sameer@gmail.com',
        phoneNumber: 9187643322, status: 'Active'},
  ];

  constructor(private http: HttpClient) { }

  /**
   * @desc Method return list of contact.
   */
  getContactList(): Contact[] {
    return this.contactList;
  }

  /**
   * @desc Method return contact object, matched with passign contact id params.
   * @param contactId: Id to find matched object.
   */
  getContact(contactId: number): Contact {
    const mathcedContactIndex = this.searchContact(contactId);
    if (mathcedContactIndex > -1) {
      return this.contactList[mathcedContactIndex];
    }
    return null;
  }

  /**
   * @desc Method to add new contact in existing list.
   * @param contact: Contact details entered by user.
   */
  add(contact: Contact) {
    this.contactList.unshift(contact);
  }

  /**
   * @desc Method to update existing contact in existing list.
   * @param contact: Contact details entered by user.
   */
  update(contact: Contact) {
    const mathcedContactIndex = this.searchContact(contact.contactId);
    if (mathcedContactIndex > -1) {
      return this.contactList[mathcedContactIndex] = contact;
    }
    return null;
  }

  /**
   * @desc Method to delete existing comtact from the existing list.
   * @param contactId: Id to find matched object.
   */
  delete(conactId: number) {
    const mathcedContactIndex = this.searchContact(conactId);
    if (mathcedContactIndex > -1) {
      this.contactList.splice(mathcedContactIndex, 1);
    }
    return this.contactList;
  }
/**
 * @desc Utility method to find matched object based on passing param.
 * @param conactId: Id to find matched object.
 */
  searchContact(conactId: number): number {
    let matchedContactIndex = -1;
    if (this.contactList && this.contactList.length) {
       matchedContactIndex = this.contactList.findIndex(contact => {
        return contact.contactId === conactId;
      });
    }
    return matchedContactIndex;
  }

}
