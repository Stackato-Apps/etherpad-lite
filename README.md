# Etherpad - real-time document editing

## Local setup

Install [nodeJS](http://nodejs.org/) and [npm](http://npmjs.org/) and
MySQL. Then install the application dependencies:

    npm install

Run the application locally:

    node server.js

## Deploying to Stackato

Remove local dependencies to avoid the C-based BSON module being loaded on the
server with different CPU architecture,

    rm -f node_modules/

Now deploy to Stackato:

    stackato push hummingbird
    # Add a MySQL service as well

TODO: many resources return 404; need to fix it.
