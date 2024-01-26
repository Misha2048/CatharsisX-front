class PassportValidator {
  static regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+-={}[\]:";'<>?,./]{8,}$/

  static validatePassword(password: string) {
    return PassportValidator.regex.test(password)
  }

  static getPasswordValidationErrors(password: string) {
    const errors = []
    if (!/[a-zA-Z]/.test(password)) {
      errors.push('Password must contain at least one letter.')
    }
    if (!/\d/.test(password)) {
      errors.push('Password must contain at least one number.')
    }
    if (/\s/.test(password)) {
      errors.push('Password cannot contain spaces.')
    }
    return errors
  }
}

export default PassportValidator
