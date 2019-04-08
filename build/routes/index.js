"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs   = require('fs');
const jwt  = require('jsonwebtoken');
//import privateKey from '../private.key';

var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var payload = {
    userName: 'J Doe',
    id: '1',
    type: 0
};
var i  = 'Mysoft corp';          // Issuer 
var s  = 'some@user.com';        // Subject 
var a  = 'http://mysoftcorp.in'; // Audience
var signOptions = {
    issuer:  i,
    subject:  s,
    audience:  a,
    expiresIn:  "12h",
    algorithm:  "RS256"
};

/*console.log('exists: ' + fs.existsSync('./private.key'));
fs.readFileSync('./private.key')
if(fs.existsSync(fs.existsSync('./private.key')))
    var privateKEY = fs.readFileSync('./private.key', 'utf8');
else {
    console.log('file:', require('path').resolve(__dirname, './private.key'));
    var privateKEY = '';
}*/
var privateKEY = `
-----BEGIN RSA PRIVATE KEY-----
MIIBOgIBAAJBAJEBoOLK+fqTtscjvzjejn0asOb/E58xpvwBJxiyrOtOOjixPsVp 
Yb9p4QQuoXm61NtcD9OpmBXnzSAGEjNRO40CAwEAAQJAOFEmmA53Cd/GtA7pHIAr
XOE55W0ZxNE25lbYRVpXmEdBNMGV+HEp4GF05gqJWq7zEdwi8rJfoRTABAVujYO1
oQIhAN/HwVa3Y96KwoAyIdEKx4kslzpG4/qweiHTC0IMCjrJAiEApeJe3ckYKpyM
DGksaWO2epgOcFH9vm5tIANfYoZCmKUCICVnM++Uk4K82qmmt3RDQvqwk05QTwa1
vJQuvDD75jHRAiEAn2G4tG+agJaZGPOUcE4V7gRbGyAsJOQEhVW4N/m30uECIC/x
q95JWNjv0NWHG996NuWPS+Ns1tXAkxIbdLKhdcew
-----END RSA PRIVATE KEY-----
`; // Tive que colocar essa porcaria na mão... Não tava conseguindo abrir o arquivo direto usando fs.readFileSync().
var verifyOptions = {
    issuer:  '',
    subject:  '',
    audience:  '',
    expiresIn:  "30d",
    algorithm:  ["RS256"]
};
var publicKEY = `
-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJEBoOLK+fqTtscjvzjejn0asOb/E58x
pvwBJxiyrOtOOjixPsVpYb9p4QQuoXm61NtcD9OpmBXnzSAGEjNRO40CAwEAAQ==
-----END PUBLIC KEY-----
    `

var token = jwt.sign(payload, privateKEY, signOptions);
router.get('/', function (req, res, next) {
    console.log("Token - " + token);
    res.status(200).send({
        title: "Chefe em casa API",
        version: "0.0.1",
        token: token
    });
});
router.get('/check', function(req, res, next) {
    var verified = jwt.verify(token, publicKEY, verifyOptions);
    res.status(200).send({
        title: "Chefe em casa API",
        version: "0.0.1",
        verified: verified
    });
})
module.exports = router;
