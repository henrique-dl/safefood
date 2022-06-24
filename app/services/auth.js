export function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token:
          "dfsadajkdiasjdoidioasjfoijdpoifjagiajgoliasjgoiajoij32o1j342oi4",
        user: {
          name: "Henrique",
          email: "henrique@email.com",
        },
      });
    }, 2000);
  });
}
