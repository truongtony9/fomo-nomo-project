module.exports = {
  getEvents: (req, res, next) => {
    const db = req.app.get("db");
    db.getAllEvents()
      .then(events => res.status(200).send(events))
      .catch(err => res.status(500).send({ showError: err }));
  },
  getAnEvent: (req, res, next) => {
    const db = req.app.get("db");
    let { id } = req.params;
    // console.log(req);
    db.getAnEvent([id])
      .then(event => res.status(200).send(event))
      .catch(err => res.status(500).send({ showError: err }));
  },
  addEvent: (req, res, next) => {
    const { title, description, date, time, address, image_url } = req.body;
    const db = req.app.get("db");
    db.addEvent([title, description, date, time, address])
      .then(event => res.status(200).send(event))
      .catch(err => res.status(500).send({ showError: err }));
  }
  // deleteEvent: (req, res, next) => {
  //   const db = req.app.get("db");
  //   const { id } = req.params;
  //   let eventIndex = db.findIndex(event => event.id == id);
  //   event.splice(eventIndex, 1);
  //   res.status(200).json(event);
  //   // db.deleteEvent({ id })
  //   //   .then(event => res.status(200).send(event))
  //   //   .catch(err => res.status(500).send({ showError: err }));
  // }
  // updateEvent: (req, res, next) => {
  //   const { title, description, date, time, address, image_url } = req.body;
  //   const { id } = req.params;
  //   const db = req.app.get("db");
  //   db.updateEvent([title, description, date, time, address, image_url])
  //     .then(event => res.status(200).send(event))
  //     .catch(err => res.status(500).send({ showError: err }));
  // }
};

// const updateMsg = (req, res, next) => {
//   const { newid } = req.params;
//   const { input } = req.body;
//   let indexMsg = meme.findIndex(meme => meme.newid == newid);
//   meme[indexMsg].name = input;
//   res.status(200).json(meme[indexMsg].name);
// };
