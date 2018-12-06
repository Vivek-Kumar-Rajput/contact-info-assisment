/**
 * @desc Contact model to validate contact type.
 */
export class Contact {
  contactId: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  status: string;
  constructor() {
    this.contactId = null;
    this.firstName = null;
    this.lastName = null;
    this.email = null;
    this.phoneNumber = null;
    this.status = null;
  }
}
