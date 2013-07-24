/*!
		JQuery XML Store / Shop - Shopping Cart
		Created by LivelyWorks - http://livelyworks.net

	*/
$(document).ready(function(){
var x="",m="$",g="USD",l="",t=1,H=1,B=0,d="xml_jquery_store_"+window.location.hostname,r=new Array(),b=new Array(),s="",k="",w=1,n="",y="",F=new Number(0),D=false,j=new Date(),c=false;
$.ajax({
type:"GET",url:"configData.xml?file="+j.getTime(),dataType:"xml",success:function(I){
var J=$(I).find("configuration")[0];
x=$(J).attr("logoImage");
if($(J).attr("currencySymbol")){
m=$(J).attr("currencySymbol")}
if($(J).attr("currency")){
g=$(J).attr("currency")}
if($(J).attr("businessEmail")){
l=$(J).attr("businessEmail")}
if($(J).attr("UsePaypal")){
t=parseInt($(J).attr("UsePaypal"))}
if($(J).attr("UseSubmitOrder")){
H=parseInt($(J).attr("UseSubmitOrder"))}
if($(J).attr("ShippingCharges")){
B=parseFloat($(J).attr("ShippingCharges"))}
$("#site_logo").attr("src",x);
if(t==0){
$("#checkout_with_paypal").hide()}
if(H==0){
$("#checkout_submit_order").hide()}
G();
$.ajax({
type:"GET",url:"productsData.xml?file="+j.getTime(),dataType:"xml",success:function(K){
var M=1;
var O=1;
var L="";
var N=0;
$(K).find("category").each(function(){
var Q=M;
var P=$(this).attr("categoryName");
$("<li></li>").html('<a href="#" class="cat_data_id_'+M+'">'+P+"</a>").appendTo("#categories_list");
$('<div class="items" id="category_'+Q+'"></div>').html('<a href="#"> <h2>'+M+": "+P+"</h2></a>").appendTo("#products");
$(this).find("product").each(function(){
var Z=$(this).attr("productName");
var U=$(this).attr("thumbPath");
var Y=new Number($(this).attr("productPrice")).toFixed(2);
var X=$(this).attr("productID");
var V=M+"_"+O;
var R=$(this).find("details").text();
var S='<label class="control-label" for="siz_'+V+'">Select Size: </label> <select class="input-small" id="siz_'+V+'">';
$(this).find("size").each(function(){
S+="<option>"+$(this).text()+"</option>"}
);
S+="</select>";
var W='<label class="control-label" for="col_'+V+'">&nbsp;
 Select Color: </label> <select class="input-small" id="col_'+V+'">';
$(this).find("color").each(function(){
W+="<option>"+$(this).text()+"</option>"}
);
W+="</select>";
var T='<div id="product_'+V+'" class="product_details_modal modal hide fade"> <div class="modal-header"><a class="close" data-dismiss="modal" >&times;
</a> <div class="caption"><h3 id="product_name_'+V+'">'+Z+"</h3><h4><small> Category: <strong>"+P+"</strong> Product ID: <strong>"+X+'</strong> </small><strong class="price_color"> &nbsp;
 Price: '+m+" "+Y+'</strong> </h4></div></div><div class="modal-body">'+R+'</div> <div class="modal-footer"><div></div><br /><div class="form-inline">'+S+W+'<a href="#" class="btn" data-dismiss="modal" >Close</a><a href="#" id="btn_'+V+'" class="btn btn-warning add_to_cart_btn">Add to <i class="icon-shopping-cart icon-white"></i></a></div></div></div>';
$('<li class="span2 product_item" data-id="prod_data_id_'+V+'" data-type="cat_data_id_'+M+'" id="product_item_'+V+'"></li>').html('<div class="thumbnail"><div class="thumb_holder"><a data-toggle="modal" href="#product_'+V+'" ><img src="'+U+'" alt="'+Z+'"/></a></div><div class="caption"><div class="product_sum"><h4>'+Z+'</h4><h3 class="price_color">'+m+" "+Y+"</h3></div>"+T+'<p><a class="btn btn-warning" data-toggle="modal" href="#product_'+V+'" ><i class="icon-zoom-in icon-white"></i> View details</a></p></div></div>').appendTo("#products_container");
r["btn_"+V]={
productName:Z,productPrice:Y,uProductID:V,productID:X}
;
$("#btn_"+V).live("click",A);
$("#product_item_"+V).live("mouseover",function(){
$("#products_breadcrumb").html(P+" &raquo;
 "+Z)}
);
$("#product_item_"+V).live("mouseout",function(){
$("#products_breadcrumb").html(P)}
);
$("#siz_"+V).live("change",function(){
z(V)}
);
$("#col_"+V).live("change",function(){
z(V)}
);
O++;
z(V)}
);
M++}
);
$("#shopping_cart_loader").hide();
o($(".product_item .thumbnail"));
n=$("#products_container");
y=n.clone();
p()}
}
)}
}
);
var v=$("#categories_list li.active_category a").attr("class");
$("#categories_list li a").live("click",function(J){
$("input#search_item").val("");
$("#products_breadcrumb").html($(this).text());
$("#categories_list li").removeClass("active_category");
var I=$(this).attr("class");
$(this).parent().addClass("active_category");
if(I=="all"){
var K=y.find("li")}
else{
var K=y.find("li[data-type="+I+"]")}
n.quicksand(K,{
duration:400,easing:"easeInOutQuad"}
,function(){
G();
p()}
);
return false}
);
var e=$("#current_products_count");
var a=$("input#search_item");
var q=$("#clear_search");
q.hide();
$("#clear_search").live("click",function(){
$("input#search_item").val("");
p()}
);
function p(){
$(a).quicksearch("#products_container li",{
onBefore:function(){
$("#products_container").height(0)}
,onAfter:function(){
$("#products_container").height("auto");
if(a.val()!=""){
var I=$("#products_container li:visible").length;
e.html(I+" product(s) were found in "+$(".active_category").text()+" products.");
q.show()}
else{
e.html("");
q.hide()}
}
}
)}
var i=$.cookie(d);
if(i!=null){
b=$.parseJSON(i)}
function A(){
var L=$(this).attr("id");
var I=L.substring(4);
var Q=r[L].productName;
var K=r[L].productPrice;
var O=r[L].productID;
var N=$("#siz_"+I+" option:selected").val();
var M=$("#col_"+I+" option:selected").val();
var J=1;
for(var P in b){
if(Q==b[P].productName&&N==b[P].productSize&&M==b[P].productColor){
J=b[P].productQty++;
G();
return false}
}
b.push({
productName:Q,productPrice:K,productSize:N,productColor:M,productQty:1,uProductID:I,productID:O}
);
w++;
G();
D=false;
return false}
function G(){
s="";
k="";
F=0;
var I=0;
for(var J in b){
var K=b[J];
F=F+(K.productPrice*K.productQty);
s+='<tr id="cart_row_'+J+'">';
s+="<td>"+K.productName+"</td>";
s+="<td>"+K.productSize+"</td>";
s+="<td>"+K.productColor+"</td>";
s+="<td>"+m+" "+K.productPrice+"</td>";
s+='<td><input type="number" step="1" min="1" value="'+K.productQty+'" class="input-small span1 cart_product_qty"/></td>';
s+="<td>"+m+" "+(K.productPrice*K.productQty).toFixed(2)+"</td>";
s+='<td><a href="#" id="delete_prod_id'+J+'" class="close delete_product_from_cart" title="Delete">&times;
</a></td>';
s+="</tr>";
z(K.uProductID);
I+=K.productQty}
$.cookie(d,$.toJSON(b));
$("#shopping_cart_data").html(s);
var L=F>0?B:0;
k+="Base Total: "+(F).toFixed(2)+" + Shipping: "+m+" "+(L).toFixed(2)+" = <strong>"+m+" "+(F+L).toFixed(2)+" "+g+"</strong>";
$("#shopping_cart_total").html(k);
$("#show_cartBtn").html(I+"</strong> Item(s) of <strong>"+m+" "+(F).toFixed(2)+" "+g+' </strong>in your <i class="icon-shopping-cart"></i><strong>');
if(F<=0){
$("#checkout_with_paypal").addClass("disabled");
$("#checkout_submit_order").addClass("disabled")}
else{
$("#checkout_with_paypal").removeClass("disabled");
$("#checkout_submit_order").removeClass("disabled")}
return false}
function z(N){
var K=N,L="btn_"+K,M=$("#product_name_"+K).text(),O=$("#siz_"+K+" option:selected").val(),J=$("#col_"+K+" option:selected").val();
for(var I in b){
if(M==b[I].productName&&O==b[I].productSize&&J==b[I].productColor){
$("#btn_"+b[I].uProductID).html('Update <i class="icon-shopping-cart icon-white"></i>: '+b[I].productQty);
return false}
}
$("#btn_"+K).html('Add to <i class="icon-shopping-cart icon-white"></i>');
return false}
$(".delete_product_from_cart").live("click",C);
$(".cart_product_qty").live("change",h);
function h(){
var I=$(this).parent().parent().attr("id"),J=I.substring(9);
if($(this).val()<=0||!Number($(this).val())){
$(this).val(1)}
b[J].productQty=Math.round($(this).val());
G();
return false}
function C(){
var J=$(this).attr("id");
var I=J.substring(14);
$("#btn_"+b[I].uProductID).html('Add to <i class="icon-shopping-cart icon-white"></i>');
b.splice(I,1);
G();
return false}
$("#checkout_with_paypal").live("click",E);
$("#checkout_submit_order").live("click",function(){
if(F<=0){
return false}
$("#submit_order_form_holder").modal("show")}
);
$("#submit_order_btn").live("click",f);
$("#sof_email").live("change",function(){
u()}
);
function u(){
var I=$("#sof_email").val();
if(I==""){
return false}
var J=/^([\w-\.]+@([\w-]+\.)+[\w-]{
2,4}
)?$/;
if(!J.test(I)){
$("#submit_order_btn").addClass("disabled");
return false}
else{
$("#submit_order_btn").removeClass("disabled");
return true}
}
$("#order_submit_status").on("hidden",function(){
D=false}
);
$("#submit_order_form_holder").on("hidden",function(){
if(D==false){
$("#cart_holder").modal("show")}
}
);
$("#submit_order_form_holder").on("show",function(){
$("#cart_holder").modal("hide")}
);
function E(){
if(F<=0){
return false}
var K="https://www.paypal.com/cgi-bin/webscr?cmd=_cart&upload=1&charset=utf-8&currency_code="+g+"&business="+l+"&handling_cart="+B;
var I=1;
for(var J in b){
K+="&item_name_"+I+"="+b[J].productName+" Size: "+b[J].productSize+" Color: "+b[J].productColor;
K+="&item_number_"+I+"="+b[J].productID;
K+="&amount_"+I+"="+b[J].productPrice;
K+="&quantity_"+I+"="+b[J].productQty;
I++}
window.open(K);
return false}
function f(){
if(F<=0){
return false}
if(u()==false){
return false}
if(c==true){
return false}
c=true;
$("#submit_order_btn").addClass("disabled");
$("#submit_order_btn").text("Processing...");
var K="cartMailer.html?currency_code="+g+"&business="+l+"&value=USD&handling_cart="+B;
var I=1;
for(var J in b){
K+="&item_name_"+I+"="+b[J].productName+" Size: "+b[J].productSize+" Color: "+b[J].productColor;
K+="&item_number_"+I+"="+b[J].productID;
K+="&amount_"+I+"="+b[J].productPrice;
K+="&quantity_"+I+"="+b[J].productQty;
I++}
var L=$("#submit_order_form").serialize();
K+="&cartLength="+I+"&"+L;
$.post(K,function(N){
D=true;
if(N!="mailSentSuccess=1"){
$("#order_status_text").html("Placing order is Failed. Please Try Again!!");
$("#submit_order_form_holder").modal("hide");
$("#order_submit_status").modal("show")}
else{
$("#order_status_text").html("Your order has been Placed!!");
$("#submit_order_form_holder").modal("hide");
$("#order_submit_status").modal("show");
for(var M in b){
$("#btn_"+b[M].uProductID).html('Add to <i class="icon-shopping-cart icon-white"></i>')}
b=[];
G()}
c=false;
$("#submit_order_btn").removeClass("disabled");
$("#submit_order_btn").text("Submit Order")}
);
return false}
$("a.topLink").click(function(){
$("html, body").animate({
scrollTop:"0px"}
,{
duration:600,easing:"swing"}
);
return false}
);
function o(I){
tallest=0;
I.each(function(){
thisHeight=$(this).height();
if(thisHeight>tallest){
tallest=thisHeight}
}
);
if(tallest<220){
I.height(220)}
else{
I.height(tallest)}
}
G()}
);
