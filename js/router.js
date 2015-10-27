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
      let $li = $(event.currentTarget);
      var contactId = $li.data('contact-id');
      router.navigate('/addressbook/${contactId}');
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


  showSpecificContact: function() {

    let contact = this.contactss

  },

  start: function() {
    Backbone.history.start();
  }

  // showSpecificContact: function() {

  // }





});


export default Router;



