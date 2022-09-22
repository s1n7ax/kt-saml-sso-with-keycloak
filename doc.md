# SSO with SAML

* What is SSO
* How SAML works
    * User agent
    * Service provider
    * Identity provider
    * Metadata
    * Certificates
    * Client ID


* Demo
    * Authorization Code Flow
    * Implicit Flow
    * Resource Owner Password Credentials
    * Client Credentials

* Steps
    * IDP - create realm
    * IDP - save the SAML metadata
    * IDP - add a new user

    * PRO_SP - create realm
    * PRO_SP - create SAML IDP
    * PRO_SP - export the client metadata

    * IDP - create client using metadata
    * IDP - create mappers for user attributes
    * PRO_SP - add mappers for attributes


    * CUS_SP - create realm
    * CUS_SP - create SAML IDP
    * CUS_SP - export the client metadata

    * IDP - create client using metadata
    * IDP - create mappers for user attributes
    * CUS_SP - add mappers for attributes

    * PRO_SP - create OID client
    * PRO_SP - update valid redirect, web origins
    * PRO_SP - copy OIDC and update the front-end

    * CUS_SP - create OID client
    * CUS_SP - update valid redirect, web origins
    * CUS_SP - copy OIDC and update the front-end
