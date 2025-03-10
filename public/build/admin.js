(self["webpackChunk"] = self["webpackChunk"] || []).push([["admin"],{

/***/ "./assets/admin.js":
/*!*************************!*\
  !*** ./assets/admin.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_css_libs_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/css/libs.scss */ "./assets/admin/css/libs.scss");
/* harmony import */ var _admin_css_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/css/app.scss */ "./assets/admin/css/app.scss");



__webpack_require__(/*! ./admin/js/libs */ "./assets/admin/js/libs.js");

__webpack_require__(/*! ./admin/js/app */ "./assets/admin/js/app.js");

/***/ }),

/***/ "./assets/admin/js/app.js":
/*!********************************!*\
  !*** ./assets/admin/js/app.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");

$(function () {
  // Change status entity in the list
  $('.js-checkbox-status').on('click', function (e) {
    $.ajax({
      method: 'PATCH',
      url: this.dataset.path,
      data: this.dataset
    });
  }); // Delete image on the edit form

  $('.js-delete-image').on('click', function (e) {
    e.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: $(this).attr('href'),
      data: this.dataset
    }).done(function (data) {
      if (data.success) {
        $('.box-image').remove();
      }
    });
  }); // Delete entity from the list

  var modalConfirmDelete = $('#modalConfirmDelete');
  modalConfirmDelete.on('show.bs.modal', function (e) {
    $('.js-btn-delete-entity', this).data('entityId', $(e.relatedTarget).data('entityId'));
  });
  modalConfirmDelete.on('click', '.js-btn-delete-entity', function () {
    $('#form' + $(this).data('entityId')).submit();
  }); // Add tags

  var tagsSelect2 = $('.select-tags').select2({
    width: '100%',
    theme: 'bootstrap-5',
    minimumInputLength: 2,
    tags: true,
    createTag: function createTag(params) {
      if (params.term.indexOf('@') === -1) {
        return null;
      }
    }
  });
  var formAddTag = $('form[name="tag"]');
  $('#btnAddTag').on('click', function () {
    formAddTag[0].reset();
  });
  $('.btn-add-tag').on('click', function (e) {
    e.preventDefault();
    $.post({
      type: 'POST',
      url: formAddTag.attr('action'),
      data: new FormData(formAddTag[0]),
      processData: false,
      contentType: false,
      cache: false
    }).done(function (data) {
      if (data.status === true) {
        var newOption = new Option(data.tag.text, data.tag.id, false, false);
        var selectedIds = tagsSelect2.val();
        selectedIds.push(data.tag.id);
        tagsSelect2.append(newOption).val(selectedIds).trigger('change');
        $('#addTagModal').modal('hide');
      } else {
        console.log('ERROR: ', data);
      }
    });
  });
});

/***/ }),

/***/ "./assets/admin/js/libs.js":
/*!*********************************!*\
  !*** ./assets/admin/js/libs.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

try {
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
  window.bootstrap = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");

  __webpack_require__(/*! startbootstrap-sb-admin/src/js/scripts */ "./node_modules/startbootstrap-sb-admin/src/js/scripts.js");

  __webpack_require__(/*! select2 */ "./node_modules/select2/dist/js/select2.js");
} catch (e) {}

/***/ }),

/***/ "./assets/admin/css/app.scss":
/*!***********************************!*\
  !*** ./assets/admin/css/app.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/admin/css/libs.scss":
/*!************************************!*\
  !*** ./assets/admin/css/libs.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_jquery_dist_jquery_js","vendors-node_modules_core-js_modules_es_array_index-of_js-node_modules_select2_dist_js_select-85d406"], () => (__webpack_exec__("./assets/admin.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUJ4QyxJQUF2QjtBQUNIO0FBQ0osS0FqQkQ7QUFrQkgsR0FwQkQ7QUFxQkgsQ0F2RUEsQ0FBRDs7Ozs7Ozs7OztBQ0FBLElBQUk7QUFDQXlDLEVBQUFBLE1BQU0sQ0FBQ2pELENBQVAsR0FBV2lELE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQm5ELG1CQUFPLENBQUMsb0RBQUQsQ0FBbEM7QUFDQWtELEVBQUFBLE1BQU0sQ0FBQ0UsU0FBUCxHQUFtQnBELG1CQUFPLENBQUMsb0VBQUQsQ0FBMUI7O0FBQ0FBLEVBQUFBLG1CQUFPLENBQUMsd0dBQUQsQ0FBUDs7QUFDQUEsRUFBQUEsbUJBQU8sQ0FBQywwREFBRCxDQUFQO0FBQ0gsQ0FMRCxDQUtFLE9BQU9HLENBQVAsRUFBVSxDQUFFOzs7Ozs7Ozs7Ozs7QUNMZDs7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hZG1pbi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluL2pzL2xpYnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FkbWluL2Nzcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYWRtaW4vY3NzL2xpYnMuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vYWRtaW4vY3NzL2xpYnMuc2Nzcyc7XHJcbmltcG9ydCAnLi9hZG1pbi9jc3MvYXBwLnNjc3MnO1xyXG5cclxucmVxdWlyZSgnLi9hZG1pbi9qcy9saWJzJyk7XHJcbnJlcXVpcmUoJy4vYWRtaW4vanMvYXBwJyk7XHJcbiIsIiQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIC8vIENoYW5nZSBzdGF0dXMgZW50aXR5IGluIHRoZSBsaXN0XHJcbiAgICAkKCcuanMtY2hlY2tib3gtc3RhdHVzJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgIHVybDogdGhpcy5kYXRhc2V0LnBhdGgsXHJcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YXNldFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIERlbGV0ZSBpbWFnZSBvbiB0aGUgZWRpdCBmb3JtXHJcbiAgICAkKCcuanMtZGVsZXRlLWltYWdlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgdXJsOiAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcclxuICAgICAgICAgICAgZGF0YTogdGhpcy5kYXRhc2V0XHJcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcuYm94LWltYWdlJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBEZWxldGUgZW50aXR5IGZyb20gdGhlIGxpc3RcclxuICAgIGxldCBtb2RhbENvbmZpcm1EZWxldGUgPSAkKCcjbW9kYWxDb25maXJtRGVsZXRlJyk7XHJcbiAgICBtb2RhbENvbmZpcm1EZWxldGUub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICQoJy5qcy1idG4tZGVsZXRlLWVudGl0eScsIHRoaXMpLmRhdGEoJ2VudGl0eUlkJywgJChlLnJlbGF0ZWRUYXJnZXQpLmRhdGEoJ2VudGl0eUlkJykpO1xyXG4gICAgfSlcclxuICAgIG1vZGFsQ29uZmlybURlbGV0ZS5vbignY2xpY2snLCAnLmpzLWJ0bi1kZWxldGUtZW50aXR5JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJyNmb3JtJyArICQodGhpcykuZGF0YSgnZW50aXR5SWQnKSkuc3VibWl0KCk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIEFkZCB0YWdzXHJcbiAgICBsZXQgdGFnc1NlbGVjdDIgPSAkKCcuc2VsZWN0LXRhZ3MnKS5zZWxlY3QyKHtcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIHRoZW1lOiAnYm9vdHN0cmFwLTUnLFxyXG4gICAgICAgIG1pbmltdW1JbnB1dExlbmd0aDogMixcclxuICAgICAgICB0YWdzOiB0cnVlLFxyXG4gICAgICAgIGNyZWF0ZVRhZzogZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgICAgICBpZiAocGFyYW1zLnRlcm0uaW5kZXhPZignQCcpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgbGV0IGZvcm1BZGRUYWcgPSAkKCdmb3JtW25hbWU9XCJ0YWdcIl0nKTtcclxuICAgICQoJyNidG5BZGRUYWcnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZm9ybUFkZFRhZ1swXS5yZXNldCgpO1xyXG4gICAgfSlcclxuICAgICQoJy5idG4tYWRkLXRhZycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQucG9zdCh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgdXJsOiBmb3JtQWRkVGFnLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgICAgICBkYXRhOiBuZXcgRm9ybURhdGEoZm9ybUFkZFRhZ1swXSksXHJcbiAgICAgICAgICAgIHByb2Nlc3NEYXRhOiBmYWxzZSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5zdGF0dXMgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdPcHRpb24gPSBuZXcgT3B0aW9uKGRhdGEudGFnLnRleHQsIGRhdGEudGFnLmlkLCBmYWxzZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkSWRzID0gdGFnc1NlbGVjdDIudmFsKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZElkcy5wdXNoKGRhdGEudGFnLmlkKTtcclxuICAgICAgICAgICAgICAgIHRhZ3NTZWxlY3QyLmFwcGVuZChuZXdPcHRpb24pLnZhbChzZWxlY3RlZElkcykudHJpZ2dlcignY2hhbmdlJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjYWRkVGFnTW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SOiAnLCBkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59KVxyXG4iLCJ0cnkge1xyXG4gICAgd2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbiAgICB3aW5kb3cuYm9vdHN0cmFwID0gcmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcbiAgICByZXF1aXJlKCdzdGFydGJvb3RzdHJhcC1zYi1hZG1pbi9zcmMvanMvc2NyaXB0cycpO1xyXG4gICAgcmVxdWlyZSgnc2VsZWN0MicpO1xyXG59IGNhdGNoIChlKSB7fVxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsicmVxdWlyZSIsIiQiLCJvbiIsImUiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiZGF0YXNldCIsInBhdGgiLCJkYXRhIiwicHJldmVudERlZmF1bHQiLCJhdHRyIiwiZG9uZSIsInN1Y2Nlc3MiLCJyZW1vdmUiLCJtb2RhbENvbmZpcm1EZWxldGUiLCJyZWxhdGVkVGFyZ2V0Iiwic3VibWl0IiwidGFnc1NlbGVjdDIiLCJzZWxlY3QyIiwid2lkdGgiLCJ0aGVtZSIsIm1pbmltdW1JbnB1dExlbmd0aCIsInRhZ3MiLCJjcmVhdGVUYWciLCJwYXJhbXMiLCJ0ZXJtIiwiaW5kZXhPZiIsImZvcm1BZGRUYWciLCJyZXNldCIsInBvc3QiLCJ0eXBlIiwiRm9ybURhdGEiLCJwcm9jZXNzRGF0YSIsImNvbnRlbnRUeXBlIiwiY2FjaGUiLCJzdGF0dXMiLCJuZXdPcHRpb24iLCJPcHRpb24iLCJ0YWciLCJ0ZXh0IiwiaWQiLCJzZWxlY3RlZElkcyIsInZhbCIsInB1c2giLCJhcHBlbmQiLCJ0cmlnZ2VyIiwibW9kYWwiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwialF1ZXJ5IiwiYm9vdHN0cmFwIl0sInNvdXJjZVJvb3QiOiIifQ==