require('babel-core/register');

module.exports = {
  cucumberArgs: [
    '--require',
    './test/feature/step_definitions',
    '--format',
    'json:reports/cucumber.json',
    './test/feature/features',
  ],
  output_folder: 'reports',
  custom_commands_path: '',
  custom_assertions_path: '',
  page_objects_path: '',
  globals_path: '',
  selenium: {
    start_process: true,
    server_path: './node_modules/selenium-standalone/.selenium/selenium-server/3.5.0-server.jar',
    log_path: 'logs',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': './node_modules/selenium-standalone/.selenium/chromedriver/2.31-x64-chromedriver',
    },
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost:8100',
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      screenshots: {
        enabled: false,
        path: '',
      },
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },
  },
  live_output: true,
};

require('nightwatch-cucumber')(module.exports);
