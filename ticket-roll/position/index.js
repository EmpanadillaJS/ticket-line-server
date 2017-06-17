module.exports = init;

function init(app) {

  let position = 0;

  app.post('*/queuePosition/*',  (req, res) => {
    let startAt = position;
    let endAt = position += req.body.length;


    res.json({ 
      startAt,
      endAt
     })
     .end();
  });
}7