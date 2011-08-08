# Etherpad - real-time document editing

## Local setup

Install [nodeJS](http://nodejs.org/) and [npm](http://npmjs.org/) and
MySQL. Then install the application dependencies:

    npm install

Run the application locally:

    node server.js

## Deploying to Stackato

    stackato push

As per stackato.yml, ./node_modules (added during 'local setup') will be
ignored; and a mysql service will be added.
