/**
 * @desc Contact details component that will show selected contact details or add, edit and upadte contacts.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {
  private subcribed: any;
  private isEdit: Boolean = false;
  public isReadOnly: Boolean;
  public contact: Contact;
  public contactForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    public formBuilder: FormBuilder
  ) {
    this.contact = new Contact();
    this.contactForm = this.formBuilder.group({
      'contactId': [null],
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email': [null, [Validators.required, Validators.pattern('^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      'phoneNumber': [null, [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      'status': ['Active', Validators.required]
    });
  }

  /**
   * Override OnInit method to perform operation after init.
   */
  ngOnInit() {
    this.subcribed = this.route.queryParams.subscribe(params => {
      const contactId = +params['contactId'] || -1;
      if (contactId > -1) { // Edit or view
        this.contact = this.contactsService.getContact(contactId);
        if (this.contact) {
          this.contactForm.patchValue(this.contact);
          if (params['edit'] === 'edit') {
            this.isReadOnly = false;
            this.isEdit = true;
          } else {
            this.isReadOnly = true;
          }

        } else {
          this.navigateToList();
        }
      }
    });
  }

  /**
   * Method to navigate on contact list screen.
   */
  navigateToList() {
    this.router.navigate(['contact-list']);
  }

/**
  * Method to submit form values on add or update.
  */
  submit() {
    if (this.contactForm.valid) {
      if (this.isEdit) {
        this.contactsService.update(this.contactForm.value);
      } else {
        this.contactsService.add(this.contactForm.value);
      }
      this.router.navigate(['contact-list']);
    }
  }

  /**
   * Override method to relese occupied resources.
   */
  ngOnDestroy() {
    this.subcribed.unsubscribe();
  }

}
