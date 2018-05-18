module.exports = {
  create_user: (req, res) => {
    console.log("POST REGISTER endpoint hit");
    const db = req.app.get("db");
    let { usernameInput, passwordInput, profile_pic } = req.body;
    db.create_user([usernameInput, passwordInput, profile_pic]).then(user => {
      res.status(200).send(user);
    });
  },

  login_user: (req, res) => {
    console.log("POST LOGIN endpoint hit");
    const db = req.app.get("db");
    let { usernameInput, passwordInput } = req.body;
    db.login_user([usernameInput, passwordInput]).then(user => {
      res.status(200).send(user);
    });
  }
};
