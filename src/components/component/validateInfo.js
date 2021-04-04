
export default validateInfo = (values) => {
  const errors = {}
  const { fullname, email, gender, age, password } = values

  if (!fullname.trim()) {
    errors.fullname = "Full name must be present"
  } else if (fullname.trim().length < 4) {
    errors.fullname = "Fullname is too short minimum 4 characters"
  }

  if (!email.trim()) {
    errors.email = "Email must be present"
  } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
    errors.email = "Email is invalid"
  } else if (email.trim().length < 4) {
    errors.email = "Email is too short"
  }

  if (!gender.trim()) {
    errors.gender = "You must choose a gender"
  }

  if (!age.trim()) {
    errors.age = "You must choose an age"
  }
  if (!password.trim()) {
    errors.password = "Password is required"

  } else if (password.trim() < 6) {
    errors.password = "Password should be more than 6 characters"
  }
}
