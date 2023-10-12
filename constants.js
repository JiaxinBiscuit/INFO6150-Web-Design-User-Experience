export const LOGIN_STATUS = {
    NOT_LOGGED_IN : 'notLoggedIn',
    IS_LOGGED_IN: 'loggedIn',
}

export const SERVER = {
    AUTH_MISSING: 'auth-missing',
    AUTH_INSUFFICIENT: 'auth-insufficient',
    REQUIRED_USERNAME: 'required-username',
};

export const CLIENT = {
    NETWORK_ERROR: 'networkError',
    NO_SESSION: 'noSession',
};

export const MESSAGES = {
    [CLIENT.NETWORK_ERROR]: 'Trouble connecting to the network. Please try again',
    [SERVER.AUTH_INSUFFICIENT]: 'Your username/password combination does not match any records, please try again.',
    [SERVER.REQUIRED_USERNAME]: 'Please enter a valid (letters and/or numbers) username',
    default: 'Something went wrong.  Please try again',
};

export const PLANTPAGES = {
    HARDTOKILL: 'Hard To Kill Plants',
    PETFRIENDLY: 'Pet Friendly Plants',
    LOWLIGHT: 'Low-Light Tolerant Plants',
}