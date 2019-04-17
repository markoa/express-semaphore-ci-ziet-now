const index = (req, res) => {
  res.status(200);
  res.json({
    text: 'Hello again from express server.'
  });
};

module.exports = {
  index,
};
