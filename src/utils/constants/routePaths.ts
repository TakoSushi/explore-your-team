export const routePaths = {
  main: '/',
  auth: {
    signIn: 'auth/sign-in',
    signUp: 'auth/sign-up',
  },
  users: {
    userInfo: 'user/:id',
  },
} as const;
