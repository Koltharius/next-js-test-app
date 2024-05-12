import { ApiResponse, User, UserCreate } from '@/app/lib/definitions';

// Fetch a list of users
// This function sends a GET request to the reqres.in/api/users?page to fetch a list of users.
export const fetchListOfUsers = async (page: number): Promise<ApiResponse> => {
  try {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);

    if (!response.ok) {
      throw new Error('Failed to fetch the list of users.');
    }

    const data = await response.json();

    if (data.page > data.total_pages) {
      throw new Error(
        `Page ${page} is out of bounds. The total number of pages is ${data.total_pages}.`,
      );
    }

    return data as ApiResponse;
  } catch (error) {
    console.error('Error fetching the list of users', error);
    throw error;
  }
};

// Fetch a user by ID
// This function sends a GET request to the reqres.in/api/users/:id to fetch a user by ID.
export const fetchUserById = async (id: number): Promise<User> => {
  try {
    console.log('id', id);
    const response = await fetch(`https://reqres.in/api/users/${id}`);

    if (!response.ok) {
      throw new Error('Failed to fetch user.');
    }

    const data = await response.json();
    return data.data as User;
  } catch (error) {
    console.error('Error fetching user', error);
    throw error;
  }
};

// Create a new user
// This function sends a POST request to the reqres.in/api/register to create a new user.

// I'm ussing the https://reqres.in/api/register as reqres.in mention in the swagger documentation
// to create a new user (https://reqres.in/api-docs/#/default/post_register)
export const createUser = async (user: UserCreate): Promise<UserCreate> => {
  try {
    const response = await fetch('https://reqres.in/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error('Failed to create user.');
    }

    const data = await response.json();
    console.log('User created with this data', data);
    return data as UserCreate;
  } catch (error) {
    console.error('Error creating user', error);
    throw error;
  }
};
