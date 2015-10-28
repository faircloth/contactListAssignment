function ContactCardTemplate (data) {
  return `
    <h2>Contact Card</h2>
    <button>
      Back to Address Book
    </button>
    <ul class="contact-info">
        <li>
          <img class="addressBookUser" src="http://i.imgur.com/WUONFWT.png">
          <span class="contact-list-item" data-contact-id="${data.objectId}">
          ${data.FirstName} ${data.LastName}
          </span>
        </li>
        <li>
          <img class="addressBookUser" src="http://i.imgur.com/eiTJbNn.png">
          <span class="contact-list-item" data-contact-id="${data.objectId}">
          ${data.EmailAddress}
          </span>
        </li>
        <li>
          <img class="addressBookUser" src="http://i.imgur.com/Uu8X443.png">
          <span class="contact-list-item" data-contact-id="${data.objectId}">
          ${data.PhoneNumber}
          </span>
        </li>
    </ul>
  `;
}

export default ContactCardTemplate;