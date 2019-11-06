const myContacts = [
  {
    id: 1,
    name: "Khasbullah Nukman Zakin",
    phone: "+62 819 121212",
    email: "gmail@zakintaliban.com",
    tags: ["it's me FFS"],
    yearBirth: 2001
  },
  {
    id: 2,
    name: "Alfa",
    phone: "+62 812 242424",
    email: "alfa@alpha.com",
    yearBirth: 2004
  },
  {
    id: 3,
    name: "Bravo",
    phone: "+63 813 363636",
    email: "bravo@beta.com",
    yearBirth: 1998
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

const filterContacts = (contacts, age) => {
  let newContacts = [];

  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];

    if (new Date().getFullYear() - contact.yearBirth < age) {
      newContacts.push(contact);
    }
  }

  return newContacts;
};

// -----------------------------------------------------------------------------

// showContacts(myContacts);

// -----------------------------------------------------------------------------

const filteredContacts = filterContacts(myContacts, 18);

showContacts(filteredContacts);
