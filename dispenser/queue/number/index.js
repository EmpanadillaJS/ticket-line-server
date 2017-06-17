module.exports = init;
const rp = require('request-promise');

function init(app) {

  let calls=[];


  let resolverLlamadas=(auxCalls)=> function(parsedBody){
    console.log(parsedBody);
  };



  let intervalFunction= ()=>{
    if(calls.length>0){
      let auxCalls=calls.slice();
      calls=[];
      let options={
            method: 'POST',
            uri: 'http://ticket-line-dev.herokuapp.com/event/queuePosition/',
            body: {
                length: auxCalls.length
            },
            json: true // Automatically stringifies the body to JSON
        };

      rp(getOtions())
        .then(resolverLlamadas(auxCalls))
        .catch(function (err) {console.error("error: perdidas "+length+" llamadas.");});
    }
  };




  app.get('*/queue/number/*',  (request, response) => calls.push({request,response}));

  setInterval(intervalFunction, 100);


}