function init(app) {

  var position = 1;
  var MAX_INTERVAL = 50;
  var lastPosition = 1;

  app.post('*/queuePosition/*',  (req, res) => {
    let startAt = position;
    let endAt = position;
    let length = parseInt(req.body.length);

    if(req.body.length){
      startAt = ++position;
      endAt = position += (length - 1);
    }

    if(lastPosition < position + MAX_INTERVAL){
      savePosition();
    }
    
    res.json({ 
      startAt,
      endAt
     }).end();
  });

  app.delete('*/queuePosition/*',  (req, res) => {
    resetPosition().then(() => res.json({status: 'ok'}));
  });

  function resetPosition() {
    lastPosition = 1;
    position = 1;
    return app.db.Event.findOne({id: 9999}).then(event => {
      event.lastPosition = 1;
      event.save();
    });
  }

  function savePosition(){
    lastPosition = position+MAX_INTERVAL;
    app.db.Event.findOne({id: 9999}).then(event => {
      event.lastPosition = lastPosition;
      event.save();
    });
  }
}

module.exports = init;