module.exports = (error, req, res) => {
  res.status(500).send({
    error: 500,
    route: req.path,
    message: `SERVER ERROR: ${error}`
  })
}

