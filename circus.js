const jest = require('jest');
const path = require('path');

async function circus() {
  const { results } = await jest.runCLI({ reporters: [] }, [
    path.resolve(__dirname, '.'),
  ]);

  /** test */
  console.log(results.testResults);
  return results;
}

circus();
module.exports = circus;
