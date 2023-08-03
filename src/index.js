class QaseService {
  constructor() {}

  async afterTest(test, context, result) {}

  async afterSession() {
    if (this.config.framework !== `mocha`) {
      await console.log(`Not supported '${this.config.framework}' framework`);
    }
  }
}
module.exports = QaseService;
