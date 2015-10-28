import $ from 'jquery';
import Backbone from 'backbone';

import ContactCollection from './contacts_collection';

import AddressBookTemplate from './views/address_book';
import ContactCardTemplate from './views/contact_card';
import HomeTemplate from './views/home';


let Router = Backbone.Router.extend({

  routes: {
  
  ""             : "home",
  "addressbook"  : "showAddressBook",
  "addressbook/:id" : "showSpecificContact"

  },

  initialize: function(contactBlock) {
    
    this.$el = contactBlock;

    this.contacts = new ContactCollection();

    let router = this; 

    this.$el.on('click', '.contact-list-item', function(event) {
      let $contact = $(event.currentTarget);
      var contactId = $contact.data('contact-id');
      router.navigate(`/addressbook/${contactId}`);
      router.showSpecificContact(contactId);
    });
  },

  home: function() {
    this.$el.html( HomeTemplate() );

    this.$el.on('click', 'button', function(event) {
      let $button = $(event.currentTarget);
      router.navigate('/addressbook');
    });
  },

  showAddressBook: function() {
    var router = this;

    this.contacts.fetch().then(function() {
        router.$el.html( AddressBookTemplate(router.contacts.toJSON()) );
    });
  },


  showSpecificContact: function(contactId) {

    let contact = this.contacts.get(contactId);

    if (contact) {
      this.$el.html( ContactCardTemplate(contact.toJSON()) ); 
    } 
    else {
      let router = this;
      contact = this.contacts.add({objectId: contactId});
      contact.fetch().then(function() {
        router.$el.html( ContactCardTemplate(contact.toJSON()) );
      });
    }    
  },

  start: function() {
    Backbone.history.start();
  }

  // showSpecificContact: function() {

  // }





});


export default Router;



