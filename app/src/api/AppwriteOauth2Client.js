import { Appwrite } from "appwrite";

const sdk = new Appwrite();

sdk
    .setEndpoint('https://appwrite.software-engineering.education/v1') // Your API Endpoint
    .setProject('6206641b3bb533548645') // Your project ID
;

// Go to OAuth provider login page
sdk.account.createOAuth2Session('github');
