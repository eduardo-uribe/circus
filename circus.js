const jest = require('jest');
const path = require('path');

async function circus() {
  const { results } = await jest.runCLI({ reporters: [] }, [
    path.resolve(__dirname, '.'),
  ]);

  return results;
}

module.exports = circus;
