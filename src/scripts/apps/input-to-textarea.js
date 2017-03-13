function inputToTextarea(){
  var catchDom, dom, global, events, st, subscribeEvents;

  dom = {}
  
  st = {
    txtSearch    : ".js_txt_search",
    txtAreaSearch: ".js_textarea_search"
  }

  global = {
    disabled: "search-form__button--disabled"
  }

  catchDom = function() {
    dom.txtSearch     = $(st.txtSearch);
    dom.txtAreaSearch = $(st.txtAreaSearch);
  }

  subscribeEvents = function() {
    dom.txtSearch.on("input", events.changeInput);
    dom.txtAreaSearch.on("input", events.changeInput);
  }

  events = {
    changeInput: function(event) {
      var text, start, end;
      text = $(this).val().trim();
      start = this.selectionStart;
      end = this.selectionEnd;
      if(text.length > 50){
        dom.txtSearch.hide()
        dom.txtAreaSearch.val(text)
        dom.txtAreaSearch.show()
        dom.txtAreaSearch.focus()
        dom.txtAreaSearch[0].setSelectionRange(start, end)
      } else {
        dom.txtAreaSearch.hide()
        dom.txtSearch.val(text)
        dom.txtSearch.show()
        dom.txtSearch.focus()
        dom.txtSearch[0].setSelectionRange(start, end)
      }
    }
  }

  function init(){
    catchDom();
    subscribeEvents();
  }
  
  init();
}
