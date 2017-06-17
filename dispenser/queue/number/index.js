module.exports = init;
const rp = require('request-promise');
const cipher = require('../../../cipher/cipher.js');

function init(app) {

  let calls=[];

  let resolverLlamada=({request,response},position)=>{
    let timestamp= (new Date()).getTime();
    let uuid= request.body.uuid;
    response.json(cipher.encryptToken({position,timestamp,uuid}));
  }

  let intervalFunction= ()=>{
    if(calls.length>0){
      let auxCalls=calls.slice();
      calls=[];
      let options={
            method: 'POST',
            uri: 'http://ticket-line-dev.herokuapp.com/event/queuePosition/',
            body: { length: auxCalls.length },
            json: true // Automatically stringifies the body to JSON
        };

      rp(options)
        .then(body => auxCalls.map(call=>resolverLlamada(call,body.startAt++)))
        .catch(err => console.error(`perdidas ${calls.length} llamadas: ${err}`));
    }
  };

  app.post('*/queue/number',  (request, response) => {console.log("ea");calls.push({request,response})});

  setInterval(intervalFunction, 100);


}