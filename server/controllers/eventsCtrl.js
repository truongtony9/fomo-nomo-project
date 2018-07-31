module.exports = {
  getEvents: (req, res, next) => {
    const db = req.app.get('db');
    db.getAllEvents()
      .then(events => res.status(200).send(events))
      .catch(err => res.status(500).send({ showError: err }));
  },
  getAnEvent: (req, res, next) => {
    const db = req.app.get('db');
    let { id } = req.params;
    // console.log(req);
    db.getAnEvent([id])
      .then(events => res.status(200).send(events))
      .catch(err => res.status(500).send({ showError: err }));
  },
  addEvent: (req, res, next) => {
    const db = req.app.get('db');
    const { title, description, date, time, address, image_url } = req.body;
    db.addEvent([title, description, date, time, address, image_url])
      .then(events => res.status(200).send(events))
      .catch(err => res.status(500).send({ showError: err }));
  },
  deleteEvent: (req, res, next) => {
    const db = req.app.get('db');
    const { id } = req.params;
    // console.log(req.params);
    db.deleteEvent([id])
      .then(events => res.status(200).send(events))
      .catch(err => res.status(500).send({ showError: err }));
  },
  updateEvent: (req, res, next) => {
    const db = req.app.get('db');
    let { id } = req.params;
    const { title, description, date, time, address, image_url } = req.body;
    // console.log(id);
    // console.log(title);
    // console.log(description);
    // console.log(date);
    // console.log(time);
    // console.log(address);
    // console.log(image_url);

    db.updateEvent([id, title, description, date, time, address, image_url])
      .then(events => res.status(200).send(events))
      .catch(err => res.status(500).send({ showError: err }));
  }
};
