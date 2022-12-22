let userDatase = [];
let startingId = 1;
module.exports = {
  logIn: (req, res) => {},
  signUp: (req, res) => {
    let { email, password, firstName, lastName } = req.body;
    userDatase.push({
      email,
      password,
      firstName,
      lastName,
      id: startingId++,
    });
    res.send({ success: true });
  },
};
