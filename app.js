const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts.listContacts();
      return console.log("allContacts", allContacts);
    case "getContactById":
      const contact = await contacts.getContactById(id);
      return console.log("contact", contact);
    case "removeContact":
      const removeContact = await contacts.removeContact(id);
      return console.log("removeContact", removeContact);
    case "addContact":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log("newContact", newContact);
    case "updateContactId":
      const updateContactId = await contacts.updateContactId(id, { name, email, phone });
      console.log(" updateContactId", updateContactId);
  }
};

// invokeAction({ action: "read" });
// invokeAction({ action: "getContactById", id: "drsAJ4SHPYqZeG-83QTVW" });
// invokeAction({ action: "addContact", name: "Test1", email: "mail@com", phone: "1221212121" });
// invokeAction({ action: "updateContactId", id: "oPywKo6uDw8svC8b8ggmI", name: "Test2", email: "mail@com", phone: "333333333" });
// invokeAction({ action: "removeContact", id: "DXk1bwRShRDupNVwJg_iS" });

