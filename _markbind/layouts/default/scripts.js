function initDocsearch() {
  docsearch({
    apiKey: '8310bb56d1ece8950bd20b0b8c080e10',
    indexName: 'se-edu',
    inputSelector: '#searchbar',
    debug: false
  });
}
MarkBind.afterSetup(initDocsearch);
