export const PRIME_LOGIN_SELECTORS = Object.freeze({
  email: 'input[name="email"]:not([type="hidden"]):visible',
  password: 'input[name="password"]:visible',
  submit: 'input[type="submit"]:visible',
});

export const GOG_LOGIN_SELECTORS = Object.freeze({
  anonymous: '[hook-test="menuAnonymousButton"]',
  account: '[hook-test="menuAccountButton"]',
  username: 'a[ng-href="/feed"] + div span[ng-bind="account.username"]',
});
