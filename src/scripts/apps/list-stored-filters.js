function listStoredFilters(){
  var catchDom, dom, global, fn, st, afterCatchDom;

  dom = {}
  
  st = {
    storedFilter   : ".js_stored_filters_container",
    tplStoredFilter: "#tplStoredFilter"
  }

  global = {
    tpl: null
  }

  catchDom = function() {
    dom.storedFilter    = $(st.storedFilter);
    dom.tplStoredFilter = $(st.tplStoredFilter);
  }

  afterCatchDom = function() {
    global.tpl = _.template(dom.tplStoredFilter.html())
    loadJSON(JSON_FILE, fn.listElements)
  }

  fn = {
    listElements: function(response) {
      var html = global.tpl({data: response.entities})
      dom.storedFilter.append(html)
    }
  }

  function init(){
    catchDom();
    afterCatchDom();
  }
  
  init();
}
