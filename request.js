class model {
  async model(req, res) {
    try {
        const data = await req.body;
    res.json(data);
    } catch (error) {
    }
  }
}
module.exports = new model();
