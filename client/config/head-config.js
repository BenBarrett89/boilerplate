const DEFAULT_TITLE = 'Application'

const HEAD_META = [
  {'charset': 'utf8'},
  {'name': 'viewport', 'content': 'width=device-width, initial-scale=1'},
  {'http-equiv': 'X-UA-Compatible', 'content': 'IE=edge'},
  {'http-equiv': 'cache-control', 'content': 'max-age=0'},
  {'http-equiv': 'cache-control', 'content': 'no-cache'},
  {'http-equiv': 'expires', 'content': '0'},
  {'http-equiv': 'expires', 'content': 'Tue, 01 Jan 1980 1:00:00 GMT'},
  {'http-equiv': 'pragma', 'content': 'no-cache'}
]

const TITLE_TEMPLATE = '%s | Application'

module.exports = {
  DEFAULT_TITLE,
  HEAD_META,
  TITLE_TEMPLATE
}
