define(["jade"],function(jade){

var tpl = {};tpl.indexation = function (locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"row\"><div class=\"col-xs-12\"><div class=\"alert alert-danger\"><b>INDEXATION IN PROGRESS</b>. Search is unavailable while indexing..</div></div></div>");;return buf.join("");
}
tpl.results = function (locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (collection, cutter, results, time, undefined, words) {
buf.push("<div class=\"well\"><h4>Results <sup class=\"label label-info\">time: " + (jade.escape((jade_interp = time) == null ? '' : jade_interp)) + "ms</sup> <sup class=\"label label-info\">results: " + (jade.escape((jade_interp = results.length) == null ? '' : jade_interp)) + "</sup></h4>");
if ( results.length)
{
buf.push("<ul>");
// iterate collection.models
;(function(){
  var $$obj = collection.models;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var model = $$obj[$index];

buf.push("<li>");
var result = model.toJSON();
switch (result.el.tagName){
case 'H2':
buf.push("Topic: <a" + (jade.attr("href", '#' + result.el.id, true, false)) + ">" + (jade.escape((jade_interp = result.el.innerText) == null ? '' : jade_interp)) + "</a>");
  break;
default:
buf.push("<a" + (jade.attr("href", '#' + result.el.id, true, false)) + ">" + (null == (jade_interp = cutter(result.el.innerText, words)) ? "" : jade_interp) + "</a><small> in topic \"" + (jade.escape((jade_interp = result.h2el.innerText) == null ? '' : jade_interp)) + "\"</small>");
  break;
}
buf.push("</li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var model = $$obj[$index];

buf.push("<li>");
var result = model.toJSON();
switch (result.el.tagName){
case 'H2':
buf.push("Topic: <a" + (jade.attr("href", '#' + result.el.id, true, false)) + ">" + (jade.escape((jade_interp = result.el.innerText) == null ? '' : jade_interp)) + "</a>");
  break;
default:
buf.push("<a" + (jade.attr("href", '#' + result.el.id, true, false)) + ">" + (null == (jade_interp = cutter(result.el.innerText, words)) ? "" : jade_interp) + "</a><small> in topic \"" + (jade.escape((jade_interp = result.h2el.innerText) == null ? '' : jade_interp)) + "\"</small>");
  break;
}
buf.push("</li>");
    }

  }
}).call(this);

buf.push("</ul><div class=\"row paginator\"><div class=\"col-xs-2\">");
if ( collection.hasPreviousPage())
{
buf.push("<a href=\"#\" class=\"prev\">previous</a>");
}
buf.push("</div><div class=\"col-xs-8\">" + (jade.escape(null == (jade_interp = collection.state.currentPage) ? "" : jade_interp)) + "/ " + (jade.escape(null == (jade_interp = collection.state.totalPages) ? "" : jade_interp)) + "</div><div class=\"col-xs-2\">");
if ( collection.hasNextPage())
{
buf.push("<a href=\"#\" class=\"next\">next</a>");
}
buf.push("</div></div>");
}
else
{
buf.push("<h2>no results found</h2>");
}
buf.push("</div>");}.call(this,"collection" in locals_for_with?locals_for_with.collection:typeof collection!=="undefined"?collection:undefined,"cutter" in locals_for_with?locals_for_with.cutter:typeof cutter!=="undefined"?cutter:undefined,"results" in locals_for_with?locals_for_with.results:typeof results!=="undefined"?results:undefined,"time" in locals_for_with?locals_for_with.time:typeof time!=="undefined"?time:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"words" in locals_for_with?locals_for_with.words:typeof words!=="undefined"?words:undefined));;return buf.join("");
}
tpl.search = function (locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div id=\"opaque-bar\" class=\"col-xs-2\"><div class=\"well well-sm\">Mouseover this bar to temporary opaque the search form.</div></div><div id=\"opaquable\"><div class=\"row\"><div class=\"col-xs-10\"><div class=\"well well-sm\">To display search results press Enter. To close this popover press Esc or click anywhere on the page.</div></div></div><div class=\"row\"><div class=\"col-xs-10\"><input type=\"text\" class=\"form-control\"/><div id=\"suggestions\"></div></div><div class=\"col-xs-2\"><button id=\"clear\" type=\"button\" class=\"btn btn-block\">Clear</button></div></div><div class=\"row\"><div id=\"results\" class=\"col-xs-12\"></div></div></div>");;return buf.join("");
}
tpl.suggestions = function (locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (cutter, results, undefined, words) {
buf.push("<div class=\"well well-sm\"><h4>Suggestions</h4><ul>");
// iterate results
;(function(){
  var $$obj = results;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var result = $$obj[$index];

buf.push("<li>");
switch (result.el.tagName){
case 'H2':
buf.push("Topic: <a" + (jade.attr("href", '#' + result.el.id, true, false)) + ">" + (jade.escape((jade_interp = result.el.innerText) == null ? '' : jade_interp)) + "</a>");
  break;
default:
buf.push("<a" + (jade.attr("href", '#' + result.el.id, true, false)) + ">" + (null == (jade_interp = cutter(result.el.innerText, words)) ? "" : jade_interp) + "</a><small> in topic \"" + (jade.escape((jade_interp = result.h2el.innerText) == null ? '' : jade_interp)) + "\"</small>");
  break;
}
buf.push("</li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var result = $$obj[$index];

buf.push("<li>");
switch (result.el.tagName){
case 'H2':
buf.push("Topic: <a" + (jade.attr("href", '#' + result.el.id, true, false)) + ">" + (jade.escape((jade_interp = result.el.innerText) == null ? '' : jade_interp)) + "</a>");
  break;
default:
buf.push("<a" + (jade.attr("href", '#' + result.el.id, true, false)) + ">" + (null == (jade_interp = cutter(result.el.innerText, words)) ? "" : jade_interp) + "</a><small> in topic \"" + (jade.escape((jade_interp = result.h2el.innerText) == null ? '' : jade_interp)) + "\"</small>");
  break;
}
buf.push("</li>");
    }

  }
}).call(this);

buf.push("</ul>");
if ( !results.length)
{
buf.push("<h2>no suggestions available</h2>");
}
buf.push("</div>");}.call(this,"cutter" in locals_for_with?locals_for_with.cutter:typeof cutter!=="undefined"?cutter:undefined,"results" in locals_for_with?locals_for_with.results:typeof results!=="undefined"?results:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"words" in locals_for_with?locals_for_with.words:typeof words!=="undefined"?words:undefined));;return buf.join("");
}
return tpl;

});
