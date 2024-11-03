class model {
  async model(req, res) {
    try {
        const data = await req.body.name;
    res.json(data);
    res.render("index",data)
    } catch (error) {
    }
  }
}
module.exports = new model();
