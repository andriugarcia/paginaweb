(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{GayM:function(t,e,i){"use strict";i("Oasf")},LQ8v:function(t,e,i){"use strict";i("NV0x")},NV0x:function(t,e,i){},Oasf:function(t,e,i){},XIlZ:function(t,e,i){"use strict";i.r(e);var a=i("KQm4"),n=(i("qePV"),i("6cQw"),i("ma9I"),i("R5XZ"),i("jo5s")),r=i.n(n),s={static:{interactMaxRotation:15,interactOutOfSightXCoordinate:500,interactOutOfSightYCoordinate:600,interactYThreshold:150,interactXThreshold:100},props:{card:{type:Object,required:!0},thread:{type:Object},index:{type:Number},swipes:{type:Number},isCurrent:{type:Boolean,required:!0}},data:function(){return{isShowing:!0,isInteractAnimating:!0,isInteractDragged:null,interactPosition:{x:0,y:0,rotation:0},count:JSON.parse(JSON.stringify(this.thread.content.length))}},computed:{transformString:function(){if(!this.isInteractAnimating||this.isInteractDragged){var t=this.interactPosition,e=t.x,i=t.y,a=t.rotation;return"translate3D(".concat(e,"px, ").concat(i,"px, 0) rotate(").concat(a,"deg)")}return null}},mounted:function(){var t=this,e=this.$refs.interactElement;r()(e).draggable({onstart:function(){t.isInteractAnimating=!1},onmove:function(e){var i=t.$options.static,a=i.interactMaxRotation,n=i.interactXThreshold,r=t.interactPosition.x+e.dx,s=t.interactPosition.y+e.dy,o=a*(r/n);o>a?o=a:o<-a&&(o=-a),t.interactSetPosition({x:r,y:s,rotation:o})},onend:function(){var e=t.interactPosition,i=e.x,a=e.y,n=t.$options.static,r=n.interactXThreshold,s=n.interactYThreshold;t.isInteractAnimating=!0,i>r?t.playCard("cardAccepted"):i<-r?t.playCard("cardRejected"):a>s?t.playCard("cardSkipped"):t.resetCardPosition()}})},beforeDestroy:function(){r()(this.$refs.interactElement).unset()},methods:{hideCard:function(){var t=this;setTimeout((function(){t.isShowing=!1,t.$emit("hideCard",t.card)}),300)},playCard:function(t){var e=this.$options.static,i=e.interactOutOfSightXCoordinate,a=e.interactOutOfSightYCoordinate,n=e.interactMaxRotation;switch(this.interactUnsetElement(),t){case"cardAccepted":this.interactSetPosition({x:i,rotation:n}),this.$emit("cardAccepted");break;case"cardRejected":this.interactSetPosition({x:-i,rotation:-n}),this.$emit("cardRejected");break;case"cardSkipped":this.interactSetPosition({y:a}),this.$emit("cardSkipped")}this.hideCard()},interactSetPosition:function(t){var e=t.x,i=void 0===e?0:e,a=t.y,n=void 0===a?0:a,r=t.rotation,s=void 0===r?0:r;this.interactPosition={x:i,y:n,rotation:s}},interactUnsetElement:function(){r()(this.$refs.interactElement).unset(),this.isInteractDragged=!0},resetCardPosition:function(){this.interactSetPosition({x:0,y:0,rotation:0})}}},o=(i("hAQA"),i("KHd+")),c={components:{GameCard:Object(o.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isShowing?i("div",{ref:"interactElement",staticClass:"card",class:{isAnimating:t.isInteractAnimating,isCurrent:t.isCurrent},style:{transform:t.transformString}},[i("v-sheet",{staticStyle:{height:"100%",width:"100% border-radius: 24px"},attrs:{color:"primary"}},[i("div",[0==t.swipes&0==t.index?i("div",{staticClass:"ma-6"},[i("h1",[t._v(t._s(t.thread.title))]),i("i",[t._v("por "+t._s(t.thread.author)+" ")])]):i("div",[i("v-subheader",[t._v(t._s(t.thread.title))]),i("v-divider")],1),1==t.card.urls.length?i("img",{staticClass:"mb-n2",staticStyle:{"max-height":"200px",width:"100%","object-fit":"cover"},attrs:{src:t.card.urls[0]}}):t._e(),i("p",{staticClass:"font-weight-bold mx-6 mt-6",staticStyle:{"font-size":"1.3em"}},[t._v("\n        "+t._s(t.card.text)+"\n      ")])]),i("v-layout",{staticClass:"pb-6",staticStyle:{position:"absolute",bottom:"0",left:"0",right:"0",width:"100%"},attrs:{"justify-space-between":"","align-center":""}},[i("v-btn",{attrs:{fab:"",color:"yellow darken-3",outlined:"",disabled:0==t.swipes},on:{click:function(e){return t.$emit("back")}}},[i("v-icon",{attrs:{color:"black"}},[t._v("mdi-chevron-left")])],1),i("v-progress-linear",{staticClass:"mx-3",attrs:{color:"black",height:10,value:100*t.swipes/(t.count-1)}}),i("v-btn",{attrs:{fab:"",color:"yellow darken-3",outlined:""},on:{click:function(e){return t.playCard("cardAccepted")}}},[i("v-icon",{attrs:{color:"black"}},[t._v("mdi-chevron-right")])],1)],1)],1)],1):t._e()}),[],!1,null,"0b31d2de",null).exports},data:function(){return{swipes:0,backhistory:[]}},props:{cards:{type:Array,required:!0},thread:{type:Object,required:!0}},methods:{cardSkipped:function(){this.backhistory.push(this.cards.shift()),this.swipes+=1,this.$emit("cardSkipped")},goBack:function(){this.swipes-=1,this.cards.unshift(this.backhistory.pop())}}},d=(i("LQ8v"),{components:{GamecardStack:Object(o.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cards"},t._l(t.cards,(function(e,a){return i("GameCard",{key:e.text,attrs:{card:e,thread:t.thread,index:a,swipes:t.swipes,"is-current":0===a},on:{back:t.goBack,cardAccepted:t.cardSkipped,cardRejected:t.cardSkipped,cardSkipped:t.cardSkipped,hideCard:t.cardSkipped}})})),1)}),[],!1,null,"04bacd50",null).exports},mounted:function(){this.cards=Object(a.a)(this.$page.threadsList.content)},data:function(){return{cards:[]}},methods:{share:function(){Navigator.share()},handleCardAccepted:function(){console.log("handleCardAccepted")},handleCardRejected:function(){console.log("handleCardRejected")},handleCardSkipped:function(){console.log("handleCardSkipped")},removeCardFromDeck:function(){}}}),l=(i("GayM"),null),u=Object(o.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("div",{staticClass:"pa-6",style:{position:"absolute",top:"80px",width:"100%"}},[i("span",{staticClass:"font-weight-bold mb-2"},[t._v("Otras Publicaciones")]),i("p",{staticClass:"mt-6"},[t._v("\n      Si te ha gustado la publicación, puedes seguirme a través de:\n    ")]),i("v-layout",{attrs:{"justify-space-around":""}},[i("v-btn",{attrs:{large:"",depressed:"",rounded:"",color:"blue lighten-5"}},[i("v-icon",{attrs:{color:"twitter"}},[t._v("mdi-twitter")]),i("span",[t._v("Twitter")])],1),i("v-btn",{attrs:{large:"",depressed:"",rounded:"",color:"blue lighten-5"}},[i("v-icon",{attrs:{color:"linkedin"}},[t._v("mdi-linkedin")]),i("span",[t._v("Linkedin")])],1)],1)],1),i("GamecardStack",{style:{position:"absolute",top:"72px",bottom:"120px",left:"12px",right:"12px",width:"calc(100% - 24px)",height:"100%",borderRadius:"8px"},attrs:{cards:t.cards,thread:t.$page.threadsList},on:{cardSkipped:t.removeCardFromDeck}}),i("v-layout",{staticStyle:{position:"absolute",bottom:"24px",left:"0",right:"0",width:"100%"},attrs:{"justify-space-between":""}},[i("v-layout",{attrs:{"align-center":""}},[i("v-icon",[t._v("mdi-heart-outline")]),i("span",{staticClass:"ml-2"},[t._v("\n        "+t._s(t.$page.threadsList.content[0].public_metrics.like_count)+"\n      ")])],1),i("v-btn",{attrs:{rounded:"",depressed:"",large:"",color:"red lighten-5"}},[i("span",{staticClass:"mr-2 secundary--text text-capitalize"},[t._v("Compartir")]),i("v-icon",{attrs:{color:"secundary",size:"32"}},[t._v("mdi-share-variant")])],1)],1)],1)}),[],!1,null,null,null);"function"==typeof l&&l(u);e.default=u.exports},hAQA:function(t,e,i){"use strict";i("n2lP")},n2lP:function(t,e,i){}}]);