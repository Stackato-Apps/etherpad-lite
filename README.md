# Etherpad - real-time document editing

## Local setup

Install [nodeJS](http://nodejs.org/) and [npm](http://npmjs.org/) and
MySQL. Then install the application dependencies:

    npm install

Run the application locally:

    node server.js

## Deploying to Stackato

Remove local dependencies to avoid the C-based modules (if any) being loaded on
the server with different CPU architecture,

    rm -rf ./node_modules/

Now deploy to Stackato:

    stackato push etherpad
    # Add a MySQL service as well
