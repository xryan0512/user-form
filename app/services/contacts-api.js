export const fetchContacts = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((contacts) => contacts.map(
      ({name, id, phone, email}) => ({ name, id, phone, email })))
}
