const myContacts = [
  {
    id: 1,
    name: "Khasbullah Nukman Zakin",
    phone: "+62 819 101010",
    email: "gmail@zakintaliban.com",
    favorite: true,
    rating: 9,
    tags: ["it's me FFS"]
  },
  {
    id: 2,
    name: "Alfa",
    phone: "+62 812 242424",
    email: "alfa@alpha.com"
  },
  {
    id: 3,
    name: "Bravo",
    phone: "+63 813 363636",
    email: "bravo@beta.com"
  }
];

// -----------------------------------------------------------------------------

const showContacts = contacts => {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];
    console.log(
      `[${contact.id}] ${contact.name} (${contact.phone}) <${contact.email}>`
    );
  }
};

// -----------------------------------------------------------------------------

const filterContacts = (contacts, minimumNameLength) => {
  let newContacts = [];

  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];

    if (contact.name.length >= minimumNameLength) {
      newContacts.push(contact);
    }
  }

  return newContacts;
};

// -----------------------------------------------------------------------------

showContacts(myContacts);

// -----------------------------------------------------------------------------

const filteredContacts = filterContacts(myContacts, 12);

showContacts(filteredContacts);
