export const selectContacts = ({ contacts }) => contacts.contacts;
export const selectIsLoading = ({ contacts }) => contacts.contacts.isLoading;
export const selectError = ({ contacts }) => contacts.contacts.error;