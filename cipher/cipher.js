var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';

function encrypt(text){
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}
 
function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}
 

function encryptToken(token){
    let salt=[Math.random(),Math.random(),Math.random(),Math.random()];
    return encrypt(`${salt[0]}-${token.position}-${salt[0]}-${token.timeStamp}-${salt[0]}-${token.uid}-${salt[0]}`);
}

function decryptToken(token){
    console.log(token);
    return token;
}

module.exports={
    encryptToken,
    decryptToken,
};