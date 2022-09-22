import Keycloak from "keycloak-js";

let INSTANCE = new Keycloak("/keycloak.json");

function init() {
  return INSTANCE.init({
    onLoad: "login-required",
    pkceMethod: "S256",
  });
}

const module = {
  INSTANCE,
  init,
};

export default module;
