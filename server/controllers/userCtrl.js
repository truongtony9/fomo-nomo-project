module.exports = {
  getUser: (req, res, next) => {
    const db = req.app.get("db");
    let { id } = req.params;
    // console.log(req);
    db.getUser([user_id, user_name, user_avatar])
      .then(users => res.status(200).send(users))
      .catch(err => res.status(500).send({ showError: err }));
  }
};
