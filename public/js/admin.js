/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./resources/js/admin.js ***!
  \*******************************/
window.addEventListener('hide-form', function (event) {
  $('#form').modal('hide');
  toastr[event.detail.type](event.detail.message, 'Thành Công! 🙂');
});
window.addEventListener('hide-delete-modal', function (event) {
  $('#deleteModal').modal('hide');
  toastr[event.detail.type](event.detail.message, 'Thành Công! 🙂');
});
$(function () {
  //Initialize Select2 Elements
  $('.select2').select2(); //Initialize Select2 Elements

  $('.select2bs4').select2({
    theme: 'bootstrap4'
  });
  bsCustomFileInput.init(); //Date time pickter

  $('#reservationdatetime').datetimepicker({
    icons: {
      time: 'far fa-clock'
    }
  });
});
/******/ })()
;