## How to run it

First, install the package.json:

```bash
npm run install
```

And then run the next.js app:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

1. User List Page: This page list all the users fetched from [reqres.in](https://reqres.in) API. Every user display:

- Profile picture.
- First and Last Name.
- Email.

Include pagination on the User List Page, and a Skeleton component to create a skeleton loading effect for list of users. The skeleton component is used to show the structure of the elements to the final user when is waiting for the api fetch.

2. User Details Page: Clicking a user entry in the User List Page, you can navigate to a User Details Page to display:

- Profile Pcture.
- First and Last Name.
- Email.

Include a Skeleton component to create a skeleton loading effect for the userDetails. The skeleton component is used to show the estructure of the element to the final user when is waiting for the api to fetch.

3. User Creation Form: Form to create a new user. I'm ussing the `https://reqres.in/api/register` as reqres.in mention in the [swagger documentation](https://reqres.in/api-docs/#/default/post_register) to create a new user. Include the following form fields:

- First Name
- Last Name
- Nickname (required)
- Email (required)
- Password (required and encrypted using bcryptjs)

## Technologies

- React
- Typescript
- Next.js
- React Hook Forms
- MUI
- Tailwind
- Prettier
- Eslint
- bcryptjs
