function ContactCardTemplate (data) {
  return `
    <h2>Contact Card</h2>
    <ul>
      <li>${item.FirstName}</li>
      <li>${item.LastName}</li>
    </ul>
  `;
}

export default ContactCardTemplate;