## Frontend Coding Challenge

### Basic Guidelines

Create a user registration form that includes fields for the user.

### Requirements

- Implement a user registration form with the following fields:
  - Name (text input)
  - Email (email input)
  - Country (select dropdown)
- Fetch the list of countries from the REST Countries API: https://api.first.org/data/v1/countries and populate the country dropdown
- Implement form validation:
  - Name is required.
  - Email is required and should be a valid email address.
  - Country is required.
- Submit button display a summary of the form data below the form.
  - No API call otherwise needs to be made for the submission

Solution can be rendered on home page or any other page you wish.

### Submission

Cut a branch and check in your solution when ready.

### Notes

To initialize the app run `make init`.

To start the dev server run `make run`.

You are free to solve the problem in whatever way you wish, although the current setup does include the following pre-installed libraries, if you prefer:

- Tailwind
- React Query
- React Hook Form
- `shadcn`
