module.exports = {
  // getUser: (req, res, next) => {
  //   const db = req.app.get("db");
  //   let { id } = req.params;
  //   // console.log(req);
  //   db.getCurrentUser([user_id, user_name, user_avatar])
  //     .then(users => res.status(200).send(users))
  //     .catch(err => res.status(500).send({ showError: err }));
  // },
  getCurrentUser: (req, res, next) => {
    // console.log(req);
    const db = req.app.get('db');
    let { user_id } = req.params;
    const { user_name, auth_id, user_avatar, user_email } = req.body;
    // console.log(req.user);
    db.getCurrentUser([user_id, user_name]);
    console.log(user_id);
    //   .then(users => res.status(200).send(users))
    //   .catch(err => res.status(500).send({ showError: err }));
    res.status(200).send(req.user);
  }
  // addUserFromAuthid: (req, res, next) => {
  //   const db = req.app.get("db");
  //   const { user_name, auth_id, user_avatar, user_email } = req.body;
  //   db.getUserFromAuthid([auth_id]).then(response => {
  //     if (!response[0]) {
  //       db.addUserFromAuthid([user_name, auth_id, user_avatar, user_email])
  //         .then(users => res.status(200).send(users))
  //         .catch(err => res.status(500).send({ showError: err }));
  //     }
  //   });
  // }
};
