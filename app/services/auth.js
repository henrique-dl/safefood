import api from "../libs/api";

export function signIn(email) {
  return new Promise((resolve) => {
    api.get(`/usuarios/${email}`).then(function (response) {
      if (
        response.status == 200 &&
        (!response.data.error || response.data.error === 0)
      ) {
        resolve({
          token:
            "dfsadajkdiasjdoidioasjfoijdpoifjagiajgoliasjgoiajoij32o1j342oi4",
          user: {
            name: response.data.st_nome,
            email: response.data.st_email,
          },
        });
      } else {
        resolve({
          error: response.data.error,
        });
      }
    });
  });
}
