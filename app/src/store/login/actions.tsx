export function loginRequest(credentials) {
  return {
    type: "@login/REQUEST",
    credentials
  };
}
