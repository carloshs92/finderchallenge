function deleteStoredSearch(){
  var catchDom, dom, global, events, st, subscribeEvents;

  dom = {}
  
  st = {
    btnDelete: ".js_delete_stored_search",
    container: "#filters"
  }

  global = {
    filterItem: ".js_filters_item_container"
  }

  catchDom = function() {
    dom.container = $(st.container);
  }

  subscribeEvents = function() {
    dom.container.on("click", st.btnDelete, events.deleteItem);
  }

  events = {
    deleteItem: function(event) {
      var answer;
      answer = confirm("¿Está seguro que desea eliminar la búsqueda? Si presiona F5 puede recuperar sus búsquedas eliminadas. ")
      if (answer) {
        $(this).parents(global.filterItem).remove();
      }
    }
  }

  function init(){
    catchDom();
    subscribeEvents();
  }
  
  init();
}
