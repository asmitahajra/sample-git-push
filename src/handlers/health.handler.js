const healthHandler = async (req, res) => {
    //do .json
  res.status(200).send("Server up!");
};

module.exports = {healthHandler};
  