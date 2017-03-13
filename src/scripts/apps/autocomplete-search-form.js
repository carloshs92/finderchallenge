function autoCompleteSearchForm(){
  var afterCatchDom, catchDom, dom, global, st;

  dom = {}
  
  st = {
    txtSearch: "txtAutocomplete"
  }

  global = {
    list: [
      "Terror",
      "Drama",
      "Comedia",
      "Inglés",
      "Español",
      "Portugués",
      "Hoy",
      "Hace una semana",
      "Hace un mes",
      "Hace un año",
      "Impreso",
      "Digital",
      "Impreso y Digital"
    ]
  }

  catchDom = function() {
    dom.txtSearch = document.getElementById(st.txtSearch);
  }

  afterCatchDom = function() {
    new Awesomplete(dom.txtSearch, {
      minChars: 3,
      maxItems: 15,
      list: global.list
    });
  }

  function init(){
    catchDom();
    afterCatchDom();
  }
  
  init();
}
