function processData(data) {
  return data.map(function(item){
      return `
        <li class="contact-list-item" data-contact-id="${item.objectId}">${item.FirstName}</li>
      `     
  }).join('');
}

function AddressBookTemplate (data) {
  return `
    <h2>Address Book</h2>
    <ul>${processData(data)}</ul>
  `;
}

export default AddressBookTemplate;