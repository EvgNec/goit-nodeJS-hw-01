const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");
const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(`${contactsPath}`,'utf-8');
  return JSON.parse(data);
};

const getContactById = async (id) => {
    const data = await listContacts();
    const result = data.find(contact => contact.id === id);
  return result || null;
};

const removeContact = async (id) => {
    const data = await listContacts();
    const result = data.filter(contact => contact.id !== id);
    await fs.writeFile(`${contactsPath}`, JSON.stringify(result, null, 2));
    return result || null;
};

const addContact = async (data) => {
     const contacts = await listContacts();
    const newContact = {
        id: nanoid(),
       ...data,
    }
    contacts.push(newContact);
  await fs.writeFile(`${contactsPath}`, JSON.stringify(contacts, null, 2));
  return  newContact;
};

const updateContactId = async (id, data) => {
    const contacts = await listContacts();
    const index = contacts.findIndex(contact => contact.id === id);
    if (index === -1) { return null; }
    contacts[index] = { id, ...data };
    await fs.writeFile(`${contactsPath}`, JSON.stringify(contacts, null, 2));
    return contacts[index];
 }

module.exports = {
  listContacts,
  getContactById,
  removeContact,
    addContact,
  updateContactId,
};
