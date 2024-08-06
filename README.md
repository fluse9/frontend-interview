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

### Notes

To initialize the app run `make init`.

To start the dev server run `make run`.

The current setup includes the following pre-installed libraries:

- React Query
- React Hook Form
- `shadcn`

Although you are free to approach the exercise in any direction you wish.
