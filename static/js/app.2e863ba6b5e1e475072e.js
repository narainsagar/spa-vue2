webpackJsonp([1],{21:function(t,e,n){"use strict";var r=[{id:1,title:"iPad 4 Mini",price:500.01,inventory:2},{id:2,title:"H&M T-Shirt White",price:10.99,inventory:10},{id:3,title:"Charli XCX - Sucker CD",price:19.99,inventory:5}];e.a={getProducts:function(t){setTimeout(function(){return t(r)},100)},buyProducts:function(t,e,n){setTimeout(function(){Math.random()>.5||navigator.userAgent.indexOf("PhantomJS")>-1?e():n()},100)}}},33:function(t,e,n){"use strict";var r=n(11),c=n(91),a=n(83),u=n.n(a),o=n(84),s=n.n(o),i=n(85),d=n.n(i);r.a.use(c.a),e.a=new c.a({routes:[{path:"/",name:"home",component:s.a},{path:"/cart",name:"cart",component:u.a},{path:"/product/:id",name:"product",component:d.a}]})},34:function(t,e,n){"use strict";var r=n(3),c=n(11),a=n(38),u=n(39);c.a.use(r.c),e.a=new r.c.Store({modules:{cart:a.a,products:u.a}})},35:function(t,e,n){n(80);var r=n(2)(n(40),n(89),null,null);t.exports=r.exports},37:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(11),c=n(35),a=n.n(c),u=n(33),o=n(34),s=n(36);n.n(s);n.i(s.sync)(o.a,u.a),r.a.config.productionTip=!1,new r.a({el:"#app",router:u.a,store:o.a,template:"<App/>",components:{App:a.a}})},38:function(t,e,n){"use strict";var r=n(47),c=n.n(r),a=n(21),u={added:[],lastCheckout:null},o={checkout:function(t,e){var n=t.commit,r=t.state,u=[].concat(c()(r.added));n("checkout_request"),a.a.buyProducts(e,function(){return n("checkout_successful")},function(){return n("checkout_failure",u)})}},s={add_to_cart:function(t,e){t.lastCheckout=null;var n=t.added.find(function(t){return t.id===e});n?n.quantity++:t.added.push({id:e,quantity:1})},checkout_request:function(t){t.added=[],t.lastCheckout=null},checkout_successful:function(t){t.lastCheckout="successful"},checkout_failure:function(t,e){t.added=e,t.lastCheckout="failed"}},i={cartProducts:function(t,e,n){return t.added.map(function(t){var e=t.id,r=t.quantity,c=n.products.all.find(function(t){return t.id===e});return{title:c.title,price:c.price,id:e,quantity:r}})},cartCount:function(t){var e=0;return t.added.forEach(function(t){var n=t.quantity;e+=n}),e}};e.a={state:u,actions:o,mutations:s,getters:i}},39:function(t,e,n){"use strict";var r=n(21),c={all:[]},a={addToCart:function(t,e){(0,t.commit)("add_to_cart",e.id)},getAllProducts:function(t){var e=t.commit;r.a.getProducts(function(t){e("recieve_products",t)})}},u={recieve_products:function(t,e){t.all=e},add_to_cart:function(t,e){t.all.find(function(t){return t.id===e}).inventory--}},o={allProducts:function(t){return t.all}};e.a={state:c,actions:a,mutations:u,getters:o}},40:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(82),c=n.n(r);e.default={components:{HeaderBar:c.a},name:"app"}},41:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),c=n.n(r),a=n(3);e.default={computed:c()({},n.i(a.a)(["cartCount"]))}},42:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),c=n.n(r),a=n(3);e.default={computed:c()({},n.i(a.a)({products:"cartProducts"}),{checkoutStatus:function(){return this.$store.state.cart.lastCheckout},total:function(){return this.products.reduce(function(t,e){return t+e.price*e.quantity},0)}}),methods:c()({},n.i(a.b)(["checkout"]))}},43:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),c=n.n(r),a=n(3);e.default={mounted:function(){this.getAllProducts()},computed:c()({},n.i(a.a)(["allProducts"])),methods:c()({},n.i(a.b)(["getAllProducts"]))}},44:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4),c=n.n(r),a=n(3);e.default={mounted:function(){this.getAllProducts()},computed:c()({},n.i(a.a)(["allProducts"]),{product:function(){var t=parseInt(this.$route.params.id);return this.allProducts.find(function(e){return e.id===t})||{}}}),methods:c()({},n.i(a.b)(["getAllProducts","addToCart"]))}},77:function(t,e){},78:function(t,e){},79:function(t,e){},80:function(t,e){},81:function(t,e){},82:function(t,e,n){n(78);var r=n(2)(n(41),n(87),null,null);t.exports=r.exports},83:function(t,e,n){n(79);var r=n(2)(n(42),n(88),null,null);t.exports=r.exports},84:function(t,e,n){n(77);var r=n(2)(n(43),n(86),null,null);t.exports=r.exports},85:function(t,e,n){n(81);var r=n(2)(n(44),n(90),null,null);t.exports=r.exports},86:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-container"},t._l(t.allProducts,function(e){return n("div",{staticClass:"product"},[n("router-link",{staticClass:"title",attrs:{to:{name:"product",params:{id:e.id}}}},[t._v(t._s(e.title))]),t._v(" "),n("span",{staticClass:"price"},[t._v("$ "+t._s(e.price))])],1)}))},staticRenderFns:[]}},87:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-links"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("router-link",{attrs:{to:"/cart"}},[t._v("Cart ("+t._s(t.cartCount)+")")])],1)},staticRenderFns:[]}},88:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cart"},[n("p",{directives:[{name:"show",rawName:"v-show",value:!t.products.length,expression:"!products.length"}]},[n("i",[t._v("Please add some products to cart.")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.products.length>0,expression:"products.length > 0"}]},[n("table",{staticClass:"checkout-table"},[t._m(0),t._v(" "),n("tbody",[t._l(t.products,function(e){return n("tr",[n("td",[n("router-link",{attrs:{to:{name:"product",params:{id:e.id}}}},[t._v(t._s(e.title))])],1),t._v(" "),n("td",[t._v("$ "+t._s(e.price))]),t._v(" "),n("td",[t._v(t._s(e.quantity))]),t._v(" "),n("td",[t._v("$ "+t._s(e.price*e.quantity))])])}),t._v(" "),n("tr",{staticClass:"total"},[t._m(1),t._v(" "),n("td"),t._v(" "),n("td"),t._v(" "),n("td",[t._v("$ "+t._s(t.total))])])],2)]),t._v(" "),n("p",[n("button",{staticClass:"checkout-button",attrs:{disabled:!t.products.length},on:{click:function(e){t.checkout(t.products)}}},[t._v("Checkout")])])]),t._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:t.checkoutStatus,expression:"checkoutStatus"}]},[t._v("Checkout "+t._s(t.checkoutStatus)+".")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Quantity")]),t._v(" "),n("th",[t._v("Per Unit")]),t._v(" "),n("th",[t._v("Total")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",[n("b",[t._v("TOTAL")])])}]}},89:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("div",{staticClass:"header"},[n("header-bar")],1),t._v(" "),n("div",{staticClass:"page"},[n("router-view"),t._v(" "),t._m(0)],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"help-text"},[n("p",[t._v("Vue.js 2 Single Page App (SPA) Example with vuex and vue-router.")]),t._v(" "),n("a",{attrs:{href:"https://github.com/skyronic/vue-spa"}},[t._v("View Source Code")])])}]}},90:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"product-item"},[n("router-link",{staticClass:"back-link",attrs:{to:"/"}},[t._v("BACK")]),t._v(" "),n("div",{staticClass:"product-title"},[t._v(t._s(t.product.title))]),t._v(" "),n("div",{staticClass:"product-details"},[n("div",{staticClass:"inventory"},[t._v("In Stock: "+t._s(t.product.inventory))]),t._v(" "),n("button",{staticClass:"add-button",attrs:{disabled:!t.product.inventory},on:{click:function(e){t.addToCart(t.product)}}},[t._v(t._s(t.product.inventory>0?"Add to cart":"Out Of Stock"))])])],1)},staticRenderFns:[]}}},[37]);
//# sourceMappingURL=app.2e863ba6b5e1e475072e.js.map