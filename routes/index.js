import axios from "axios";
import omit from "lodash/omit";

var express = require('express');
var router = express.Router();

const url = "https://settlementcalgary1.krypc.com:21001";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/blockchain', async (req, res) => {

  console.log(req.body);

  const { krypcUrl } = req.body;

  const response = await axios({
    url: url + krypcUrl,
    method: "post",
    data: {
      ...omit(req.body, "krypcUrl")
    },
    headers: {
      "Content-Type": "application/json",
    }
  });

  console.log(`Resonse data: ${JSON.stringify(response.data)}`);
  res.status(200).send(response.data);
});

module.exports = router;
