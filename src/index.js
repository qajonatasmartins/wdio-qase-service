class QaseService {

  constructor(options, caps, config, passed = [], failed = [], resultTests = []) {
    this.options = options
    this.caps = caps
    this.config = config
    this.passed = passed
    this.failed = failed
    this.resultTests = resultTests
  }

  async afterTest(test, context, result) { }

  async afterSession() {
    if (this.config.framework !== `mocha`) {
      console.log(`Not supported '${this.config.framework}' framework`);
    }
  }
}
module.exports = QaseService;
