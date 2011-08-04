/**
 * The Settings Modul reads the settings out of settings.json and provides 
 * this information to the other modules
 */

/*
 * 2011 Peter 'Pita' Martischka
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var fs = require("fs");

/**
 * The Port ep-lite should listen to
 */
exports.port = process.env.VCAP_APP_PORT || 9002;
/*
 * The Type of the database
 */
exports.dbType = "mysql";
/**
 * This setting is passed with dbType to ueberDB to set up the database
 */
exports.dbSettings = {
                    "user"    : "root", 
                    "host"    : "localhost", 
                    "password": "", 
                    "database": "store"
                    };
                    
if (process.env.VCAP_SERVICES){
    srv = JSON.parse(process.env.VCAP_SERVICES);
    cred = srv['mysql-5.1'][0].credentials;
    exports.dbSettings['user'] = cred.user;
    exports.dbSettings['host'] = cred.hostname;
    // TODO: define port
    exports.dbSettings['password'] = cred.password;
    exports.dbSettings['database'] = cred.name;
}
/**
 * A flag that shows if http requests should be loged to stdout
 */
exports.logHTTP = true;
/**
 * The default Text of a new pad
 */
exports.defaultPadText = "Welcome to Etherpad Lite!\n\nThis pad text is synchronized as you type, so that everyone viewing this page sees the same text. This allows you to collaborate seamlessly on documents!\n\nEtherpad Lite on Github: http:\/\/j.mp/ep-lite\n";
/**
 * A flag that shows if minification is enabled or not
 */
exports.minify = false;

/**
 * The path of the abiword executable
 */
exports.abiword = null;


