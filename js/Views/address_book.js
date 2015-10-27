function processData(data) {
  return data.map(function(item){
      return `
        <p class="each-contact">
          <img class="addressBookUser" src="http://i.imgur.com/WUONFWT.png">
          <span class="contact-list-item" data-contact-id="${item.objectId}">
            ${item.FirstName}  ${item.LastName}
          </span>
          <br>
        </p>
      `     
  }).join('');
}

function AddressBookTemplate (data) {
  return `
    <h2 class="top-block">Address Book</h2>
    <div class="list-block">
      ${processData(data)}
    </div>
  `;
}

export default AddressBookTemplate;