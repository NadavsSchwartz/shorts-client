export const API = {
  BASE: 'https://sds.sh',
  GoogleAuth: '/auth/google',
  TwitterAuth: '/auth/twitter',
  GithubAuth: '/auth/github',
  UserStats: '/user/stats',
  UserDetails: '/me',
  DeleteUrl: '/delete/url',
  CreateUrl: '/url',
  LogoutUser: '/auth/logout',
};

export const getAxiosConfig = (options) => ({
  ...options,
  headers: {
    ...options.headers,
    withCredentials: true,
  },
});
