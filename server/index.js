let express = require('express');
let cors = require('cors');

let app = express();

app.use(cors());
app.use(express.json());

let { logIn, signUp } = require('./controller');

app.post('/login', logIn);
app.post('/signup', signUp);

app.listen(4000, () => console.log('running on 4000'));
