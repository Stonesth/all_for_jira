const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const escapedPassword = password.replace(/\$/g, '\\$');
  // console.log(`username       : ${username}`);
  // console.log(`password       : ${password}`);
  // console.log(`escapedPassword: ${escapedPassword}`);

  exec(`node src/web_automation.js ${username} "${escapedPassword}"`, (error, stdout, stderr) => {
    console.log(`error: ${error}`);
    console.log(`stderr: ${stderr}`);
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    // console.log(`stdout: ${stdout}`);
    res.send('Login script has been executed');
  });

});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});