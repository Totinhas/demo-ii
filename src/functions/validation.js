const email = function (email) {
  let regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(?:[a-zA-Z]{2,})$/;
  let emailIsValid = regEmail.test(email);

  return emailIsValid;
};

const name = function (name) {
  if (name.length >= 3) {
    return true;
  } else {
    return false;
  }
};

const phone = function (phoneNumber) {
  let regPhoneNumber = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
  let phoneNumberIsValid = regPhoneNumber.test(phoneNumber);

  return phoneNumberIsValid;
};

export default { email, phone, name };
