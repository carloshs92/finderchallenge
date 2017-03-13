function buttonSearchForm(){
  var catchDom, dom, global, events, st, subscribeEvents;

  dom = {}
  
  st = {
    txtSearch: ".js_txt_search",
    btnSearch: ".js_btn_search"
  }

  global = {
    disabled: "search-form__button--disabled"
  }

  catchDom = function() {
    dom.txtSearch = $(st.txtSearch);
    dom.btnSearch = $(st.btnSearch);
  }

  subscribeEvents = function() {
    dom.txtSearch.on("keyup", events.enableButton);
  }

  events = {
    enableButton: function(event) {
      var text = $(this).val().trim();
      if(text.length > 0){
        dom.btnSearch.removeAttr("disabled")
        dom.btnSearch.removeClass(global.disabled)
      } else {
        dom.btnSearch.attr("disabled")
        dom.btnSearch.addClass(global.disabled)
      }
    }
  }

  function init(){
    catchDom();
    subscribeEvents();
  }
  
  init();
}
