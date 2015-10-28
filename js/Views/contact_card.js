function ContactCardTemplate (data) {
  return `
    <h2>Contact Card</h2>
    <ul class="contact-info">
        <li>
          <img class="addressBookUser" src="http://i.imgur.com/WUONFWT.png">
          <span class="contact-list-item" data-contact-id="${data.objectId}">
          ${data.FirstName} ${data.LastName}
          </span>
        </li>
    </ul>
  `;
}

export default ContactCardTemplate;