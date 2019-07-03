(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,a,t){e.exports=t(75)},44:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(16),l=t.n(c),o=(t(43),t(80)),s=t(78),u=t(79),i=t(8),m=(t(44),t(77)),d=function(e){return r.a.createElement("div",{className:"header-grid"},r.a.createElement("div",{className:"header-grid__logo"}),r.a.createElement("div",{className:"header-grid__nav"},r.a.createElement("ul",{className:"header-nav"},r.a.createElement("li",{className:"header-nav__item"},r.a.createElement(m.a,{to:"/markets"},"Markets")),r.a.createElement("li",{className:"header-nav__item"},r.a.createElement(m.a,{to:"/stock"},"Stock Quote")),r.a.createElement("li",{className:"header-nav__item"},r.a.createElement(m.a,{to:"/forex"},"Forex")))))},h=t(2),p=t.n(h),v=t(6),g=t(15),E=t(82),f=t(81),_=t(7),y=t.n(_),k=t(10),b=t(11),N=t(13),C=t(12),w=t(14),S=function(e){var a=e.stock,t=e.color,n=e.handleQuoteChange,c=a.symbol,l=a.name,o=a.price,s=a.day_change,u=a.change_pct;return r.a.createElement("div",{className:"featured-container__item",key:c},r.a.createElement("ul",{className:"featured-stock",style:{cursor:"pointer"},onClick:function(){n(a.symbol)}},r.a.createElement("li",{className:"featured-stock__name"},l),r.a.createElement("li",{className:"featured-stock__price"},o),r.a.createElement("li",{className:"featured-stock__change",style:{color:t}},"".concat(s," (").concat(u,"%)"))))},x=function(e){var a=e.featuredStocks,t=e.handleQuoteChange,n=e.upColor,c=e.downColor;return r.a.createElement("div",{className:"featured-container"},a.map(function(e){var a=e.day_change>=0?n:c;return r.a.createElement(S,{key:e.symbol,stock:e,color:a,handleQuoteChange:t})}))},O=t(34),j=t.n(O),A=t(35),D=t.n(A),q=function(e){var a=e.quote,t=e.currentQuoteColor,n=e.historicData,c=a.name,l=a.symbol,o=a.price,s=a.stock_exchange_long,u=a.day_change,i=a.change_pct,m=a.price_open,d=a.day_high,h=a.day_low,p=a.volume,v=a.volume_avg,g=a["52_week_high"],E=a["52_week_low"];return r.a.createElement("div",{className:"quote-grid",style:{borderTop:"solid 1rem ".concat(t)}},r.a.createElement("div",{className:"quote-grid__header"},r.a.createElement("ul",{className:"quote-header"},r.a.createElement("li",{className:"quote-header__name-and-symbol"},r.a.createElement("span",{className:"quote-header__name"},c),r.a.createElement("span",{className:"quote-header__symbol"},"(".concat(l,")"))),r.a.createElement("li",{className:"quote-header__exchange"},s),r.a.createElement("li",{className:"quote-header__price"},o),r.a.createElement("li",{className:"quote-header__change",style:{color:t}},"".concat(u," (").concat(i,")%")))),r.a.createElement("div",{className:"quote-grid__details"},r.a.createElement("table",{className:"quote-details-table"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Open"),r.a.createElement("td",null,m)),r.a.createElement("tr",null,r.a.createElement("td",null,"Day's Range"),r.a.createElement("td",null,"".concat(h," - ").concat(d))),r.a.createElement("tr",null,r.a.createElement("td",null,"52 Week Range"),r.a.createElement("td",null,"".concat(E," - ").concat(g))),r.a.createElement("tr",null,r.a.createElement("td",null,"Volume"),r.a.createElement("td",null,p)),r.a.createElement("tr",null,r.a.createElement("td",null,"Avg. Volume"),r.a.createElement("td",null,v))))),r.a.createElement("div",{className:"quote-grid__highchart"},r.a.createElement(D.a,{highcharts:j.a,constructorType:"stockChart",options:{series:[{data:n,tooltip:{valueDecimals:2}}],credits:{enabled:!1}}})))},B=function(e){function a(){var e,t;Object(k.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(N.a)(this,(e=Object(C.a)(a)).call.apply(e,[this].concat(r)))).state={featuredIsLoading:!0,featuredStockSymbols:"^DJI,^SP400,^IXIC",featuredStocks:[]},t.getFeaturedStocks=function(){var e=Object(v.a)(p.a.mark(function e(a){var n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y()("https://www.worldtradingdata.com/api/v1/stock?symbol=".concat(a,"&api_token=").concat(t.props.apiKey));case 3:n=e.sent,r=n.data.data,t.setState({featuredStocks:r,featuredIsLoading:!1}),console.log(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error fetching featured stocks",e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(a){return e.apply(this,arguments)}}(),t}return Object(w.a)(a,e),Object(b.a)(a,[{key:"componentDidMount",value:function(){this.getFeaturedStocks(this.state.featuredStockSymbols)}},{key:"render",value:function(){var e=this.state,a=e.featuredStocks,t=e.featuredIsLoading,n=this.props,c=n.upColor,l=n.downColor,o=n.handleQuoteChange,s=n.quote,u=n.quoteIsLoading,m=n.historicData,d=s.day_change>=0?c:l;return t?null:r.a.createElement("div",{className:"markets-grid"},r.a.createElement("div",{className:"markets-grid__heading"},r.a.createElement("h2",null,"Market Overview")),t?null:r.a.createElement("div",{className:"markets-grid__overview"},r.a.createElement(x,{featuredIsLoading:t,featuredStocks:a,upColor:c,downColor:l,handleQuoteChange:o})),r.a.createElement("div",{className:"markets-grid__info"},u?r.a.createElement("div",null,"Click Items for Details"):r.a.createElement(i.TransitionGroup,{className:"transition-group"},r.a.createElement(i.CSSTransition,{key:s.symbol,in:!0,appear:!0,timeout:500,classNames:"slide"},r.a.createElement("section",{className:"route-section"},r.a.createElement(q,{currentQuoteColor:d,quote:s,historicData:m}))))))}}]),a}(n.Component),F={};var R=function(){var e;return function(){var a=Object(v.a)(p.a.mark(function a(t){var n,r;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e&&e.cancel(),e=y.a.CancelToken.source(),a.prev=2,!F[t]){a.next=5;break}return a.abrupt("return",F[t]);case 5:return a.next=7,y()(t,{cancelToken:e.token});case 7:return n=a.sent,r=n.data,F[t]=r,a.abrupt("return",r);case 13:a.prev=13,a.t0=a.catch(2),y.a.isCancel(a.t0)?console.log("Request canceled",a.t0.message):console.log("Something went wrong: ",a.t0);case 16:case"end":return a.stop()}},a,null,[[2,13]])}));return function(e){return a.apply(this,arguments)}}()}(),I=function(e){var a=e.clearSearch,t=e.cursor,n=e.handleSearchChange,c=e.handleQuoteChange,l=e.handleSearchKeyDowns,o=e.searchValue,s=e.searchResults;return r.a.createElement("div",{className:"search-container"},r.a.createElement("form",{className:"searchForm"},r.a.createElement("div",{className:"searchForm__inputs"},r.a.createElement("input",{type:"text",className:"searchForm__text",placeholder:"Search by symbol or name",value:o,onChange:function(e){return n(e)},onKeyDown:l,onBlur:a}),""!==o&&r.a.createElement("button",{className:"searchForm__clear",onClick:function(e){e.preventDefault(),a()}},"clear")),null!=s&&""!==o&&r.a.createElement("div",{className:"searchForm__results"},s.map(function(e,a){var n=e.symbol,l=e.name;return r.a.createElement("ul",{className:t===a?"searchForm__result active":"searchForm__result",key:n,onMouseDown:function(){c(n)},style:{cursor:"pointer"}},r.a.createElement("li",{className:"searchForm__resultSymbol"},n),r.a.createElement("li",{className:"searchForm__resultName"},l))}))))},Q=function(e){function a(){var e,t;Object(k.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(N.a)(this,(e=Object(C.a)(a)).call.apply(e,[this].concat(r)))).state={cursor:0,searchValue:"",searchResults:null},t.search=function(){var e=Object(v.a)(p.a.mark(function e(a){var n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R("https://www.worldtradingdata.com/api/v1/stock_search?search_term=".concat(a,"&search_by=symbol,name&limit=50&page=1&api_token=").concat(t.props.apiKey));case 3:n=e.sent,r=n.data,t.setState({searchResults:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("No search results");case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(a){return e.apply(this,arguments)}}(),t.handleSearchChange=function(e){t.search(e.target.value),t.setState({searchValue:e.target.value})},t.clearSearch=function(){t.setState({searchValue:"",cursor:0})},t.handleSearchKeyDowns=function(e){var a=t.state,n=a.cursor,r=a.searchResults,c=a.searchValue;38===e.keyCode&&n>0?t.setState(function(e){return{cursor:e.cursor-1}}):40===e.keyCode&&n<r.length-1?t.setState(function(e){return{cursor:e.cursor+1}}):13===e.keyCode?(e.preventDefault(),t.props.handleQuoteChange(r[n].symbol),t.clearSearch()):(27===e.keyCode||8===e.keyCode&&c.length<=1)&&t.clearSearch()},t}return Object(w.a)(a,e),Object(b.a)(a,[{key:"render",value:function(){var e=this.state,a=e.cursor,t=e.searchValue,n=e.searchResults,c=this.props,l=c.upColor,o=c.downColor,s=c.handleQuoteChange,u=c.quote,m=c.quoteIsLoading,d=c.historicData,h=u.day_change>=0?l:o;return r.a.createElement("div",{className:"stock-grid"},r.a.createElement("div",{className:"stock-grid__heading"},r.a.createElement("h2",null,"Get a Stock Quote")),r.a.createElement("div",{className:"stock-grid__search"},r.a.createElement(I,{clearSearch:this.clearSearch,cursor:a,searchValue:t,searchResults:n,handleSearchChange:this.handleSearchChange,handleQuoteChange:s,handleSearchKeyDowns:this.handleSearchKeyDowns})),r.a.createElement("div",{className:"stock-grid__info"},m?null:r.a.createElement(i.TransitionGroup,{className:"transition-group"},r.a.createElement(i.CSSTransition,{key:u.symbol,in:!0,appear:!0,timeout:500,classNames:"slide"},r.a.createElement("section",{className:"route-section"},r.a.createElement(q,{currentQuoteColor:h,quote:u,historicData:d}))))))}}]),a}(n.Component),L=t(1),K=t.n(L),T=function(e){var a=e.currenciesArray,t=e.onSelectCurrency;return r.a.createElement("select",{id:"convert-select",className:"calculator__convert-select",onChange:function(e){return t(e.target.value)}},a.map(function(e,a){var t=e.name,n=e.value;return r.a.createElement("option",{value:n,key:a},t)}))};T.prototypes={currenciesArray:K.a.array.isRequired,onSelectCurrency:K.a.func.isRequired};var V=T,M=function(e){var a=e.onSelectCurrency,t=e.valueA,n=e.valueB,c=e.handleInputChange;return r.a.createElement("div",{className:"calculator"},r.a.createElement("div",{className:"calculator__currency-A"},r.a.createElement("label",{htmlFor:"usd-input",className:"calculator__label-A"},"US Dollars"),r.a.createElement("br",null),r.a.createElement("input",{className:"calculator__input-A calculator__input--style",value:t,type:"number",name:"usd",id:"usd-input",onChange:function(e){c(e,"A")}})),r.a.createElement("div",{className:"calculator__equals-sign"},"="),r.a.createElement("div",{className:"calculator__currency-B"},r.a.createElement("div",{className:"calculator__select"},r.a.createElement("label",{htmlFor:"convert-select",className:"calculator__select-label"},"Convert to:"),r.a.createElement(V,{currenciesArray:[{name:"European Euros",value:"EUR"},{name:"Japanese Yen",value:"JPY"},{name:"British Pounds",value:"GBP"},{name:"Swiss Francs",value:"CHF"},{name:"Canadian Dollars",value:"CAD"},{name:"Australian Dollars",value:"AUD"},{name:"New Zealand",value:"NZD"},{name:"South African Rand",value:"ZAR"}],onSelectCurrency:a})),r.a.createElement("input",{className:"calculator__input-B calculator__input--style",value:n,type:"number",name:"convert-to",id:"convert-to",onChange:function(e){c(e,"B")}})))},P=function(e){function a(){var e,t;Object(k.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(N.a)(this,(e=Object(C.a)(a)).call.apply(e,[this].concat(r)))).state={currencyA:"USD",currencyB:"EUR",valueA:1,valueB:0,rates:[],ratesAreLoading:!0},t.getExchangeRates=function(){var e=Object(v.a)(p.a.mark(function e(a){var n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y()("https://www.worldtradingdata.com/api/v1/forex?base=".concat(a,"&sort=newest&api_token=").concat(t.props.apiKey));case 3:n=e.sent,r=n.data.data,t.setState({valueB:r[t.state.currencyB],rates:r,ratesAreLoading:!1}),console.log(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error fetching stock data",e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(a){return e.apply(this,arguments)}}(),t.onSelectCurrency=function(e){var a=t.state,n=a.valueA,r=a.rates;t.setState({currencyB:e,valueB:(n*r[e]).toFixed(6)})},t.handleInputChange=function(e,a){var n=t.state,r=n.currencyB,c=n.rates[r];if("A"===a){var l=e.target.value;t.setState({valueA:l,valueB:(l*c).toFixed(6)})}if("B"===a){var o=e.target.value;t.setState({valueB:o,valueA:(o/c).toFixed(6)})}},t}return Object(w.a)(a,e),Object(b.a)(a,[{key:"componentDidMount",value:function(){this.getExchangeRates(this.state.currencyA)}},{key:"render",value:function(){var e=this.state,a=e.valueA,t=e.valueB,n=e.currencyA,c=e.currencyB,l=e.ratesAreLoading,o=e.rates;return l?null:r.a.createElement("div",{className:"forex-grid"},r.a.createElement("div",{className:"forex-grid__heading"},r.a.createElement("h2",null,"Exchange Rate Calculator")),r.a.createElement("div",{className:"forex-grid__calculator"},r.a.createElement(M,{onSelectCurrency:this.onSelectCurrency,handleInputChange:this.handleInputChange,valueA:a,valueB:t,ratesAreLoading:l})),r.a.createElement("div",{className:"forex-grid__exchange-rate"},r.a.createElement("p",null,"1 ".concat(n," equals ").concat(o[c]," ").concat(c,"."))))}}]),a}(n.Component);function U(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=new Date,t=a.getDate(),n=a.getMonth()+1,r=a.getFullYear()-e;return t<10&&(t="0"+t),n<10&&(n="0"+n),"".concat(r,"-").concat(n,"-").concat(t)}function G(e){return Object.keys(e).map(function(a){return[(t=a,new Date(t).getTime()),Number(e[a].close)];var t})}var J=Object(f.a)(function(e){var a=e.location,t=Object(n.useState)({}),c=Object(g.a)(t,2),l=c[0],o=c[1],u=Object(n.useState)([]),m=Object(g.a)(u,2),d=m[0],h=m[1],f=Object(n.useState)(""),_=Object(g.a)(f,2),k=_[0],b=_[1],N=Object(n.useState)(!0),C=Object(g.a)(N,2),w=C[0],S=C[1],x=function(e){O(e),j(e),b(e)},O=function(){var e=Object(v.a)(p.a.mark(function e(a){var t,n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y()("https://www.worldtradingdata.com/api/v1/stock?symbol=".concat(a,"&api_token=").concat(A));case 3:t=e.sent,n=t.data.data,r=n[0],o(r),console.log(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error fetching stock data",e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(a){return e.apply(this,arguments)}}(),j=function(){var e=Object(v.a)(p.a.mark(function e(a){var t,n,r,c;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=U(1),e.prev=1,e.next=4,y()("https://api.worldtradingdata.com/api/v1/history?symbol=".concat(a,"&date_from=").concat(t,"&sort=oldest&api_token=").concat(A));case 4:n=e.sent,r=n.data.history,c=G(r),console.log(c),h(c),S(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("Error fetching stock data",e.t0);case 15:case"end":return e.stop()}},e,null,[[1,12]])}));return function(a){return e.apply(this,arguments)}}(),A="nf4P6Dg8FXEvLcvF9XI86UiVR60BQbEayKbEKEMlHCrhmNATXtCFV5BPMMVL";return r.a.createElement(i.TransitionGroup,{className:"transition-group"},r.a.createElement(i.CSSTransition,{key:a.pathname,timeout:700,classNames:"fade"},r.a.createElement("section",{className:"route-section"},r.a.createElement(E.a,{location:a},r.a.createElement(s.a,{path:"/markets",render:function(e){return r.a.createElement(B,Object.assign({},e,{upColor:"#1ac567",downColor:"#ff333a",apiKey:A,handleQuoteChange:x,quote:l,quoteSymbol:k,quoteIsLoading:w,historicData:d}))}}),r.a.createElement(s.a,{path:"/stock",render:function(e){return r.a.createElement(Q,Object.assign({},e,{upColor:"#1ac567",downColor:"#ff333a",apiKey:A,handleQuoteChange:x,quote:l,quoteSymbol:k,quoteIsLoading:w,historicData:d}))}}),r.a.createElement(s.a,{path:"/forex",render:function(e){return r.a.createElement(P,Object.assign({},e,{apiKey:A}))}})))))});var X=function(){return r.a.createElement(o.a,null,r.a.createElement(i.CSSTransition,{in:!0,appear:!0,timeout:500,classNames:"fade"},r.a.createElement("div",{className:"app-container"},r.a.createElement(s.a,{exact:!0,path:"/",render:function(){return r.a.createElement(u.a,{to:"/markets"})}}),r.a.createElement("header",{className:"header"},r.a.createElement(d,null)),r.a.createElement("main",{className:"main"},r.a.createElement(J,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.8fca9dec.chunk.js.map