(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{"A+RP":function(e,t,n){"use strict";n.r(t);var r,a,i=n("PJYZ"),o=n.n(i),s=n("VbXa"),c=n.n(s),d=n("lSNA"),l=n.n(d),u=n("q1tI"),p=(n("91GP"),n("R972")),m=n("hap+"),f=n("8UdT"),h=n("6aYc"),_=n("oEGd"),b=n("zh9S"),g={scribeAction:b.c},y=Object(_.a)(g),T=n("7JQg"),v=n("YryT"),E=n.n(v),S=n("caTy"),w=n("zML4"),x=n("NxHW"),C=n("Epja"),I=n.n(C),M=n("hxu0"),O=n("xbwS"),j=n.n(O),k=n("Sp5u"),R=n.n(k),U=E.a.e1b61d44,P=E.a.e05b3b2d,A=function(e){function t(t,n){var r;return r=e.call(this,t,n)||this,l()(o()(r),"_handleShowMoreInlineClick",(function(){var e=r.props.onClick;r.setState({showMoreTrends:!0}),e("show_more_inline")})),l()(o()(r),"_handleShowMoreClick",(function(){(0,r.props.onClick)("show_more")})),r.state={showMoreTrends:!1},r}c()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props,t=e.trends,n=e.scribeAction,r=e.scribeNamespace;t&&t.length>0&&n(Object.assign({},r,{component:"explore_sidebar",action:"impression"}))},n.canShowMoreTrends=function(){var e=this.props.trends;return!this.state.showMoreTrends&&e.length>5},n.render=function(){var e=this.props,t=e.footer,n=e.headerTitle,r=e.isInSidebar,a=u.createElement(w.a,{to:"/settings/trends"}),i=r?Object(x.a)():void 0;return u.createElement(I.a,null,u.createElement(R.a,{rightControl:a,text:n||U}),this._renderTrends(),this.canShowMoreTrends()?u.createElement(j.a,{interactiveStyles:i,onPress:this._handleShowMoreInlineClick,text:P}):!!t&&u.createElement(j.a,{interactiveStyles:i,link:t.landingUrl?Object(S.b)(t.landingUrl):void 0,onPress:this._handleShowMoreClick,text:t.text}))},n._renderTrends=function(){var e=this.props.trends;return(this.state.showMoreTrends?e:e.slice(0,5)).map((function(e){return u.createElement(u.Fragment,{key:e.key},e.item)}))},t}(u.Component),z=Object(T.d)()(y(Object(M.a)(A))),D=n("5Y9N"),F=n("XtkE"),N=((r={})[f.a.TimelineCursor]=p.d(p.a()),r[f.a.Label]=p.d(p.a()),r[f.a.Message]=p.d(p.a()),r[f.a.Moment]=p.d(p.a()),r[f.a.EventSummary]=p.d(p.a()),r[f.a.News]=p.d(p.a()),r[f.a.Trend]=Object(F.a)({withThirdPartyCards:!1}),r),L=((a={}).TrendsModule=p.f({bindActions:function(){return{scribeAction:b.c}},component:z,createProps:function(e){var t=e.entry,n=e.renderEntry,r=e.scribeNamespace,a=e.actions.scribeAction,i=t.content,o=i.footer,s=i.header,c=i.items;return{footer:o,headerTitle:s&&s.text,onClick:function(e){a(Object.assign({},r,{element:e,action:"click"}))},trends:c.map((function(e){return{item:n(e),key:e.entryId}}))}},shouldDisplayBorder:Object(m.a)(!1)}),a),G=Object.assign({},Object(D.a)({customHandlers:L,customSelectDisplayType:function(e){return(t=e.content.items).length>0&&Object(h.a)(t,(function(e){return e.type===f.a.Trend}))?"TrendsModule":e.content.displayType;var t}}),{},N),W=n("fTQJ"),H=n("b8qQ"),V=n("B5iK"),X=n("cpNy"),B=n.n(X),J=n("rKfw"),K=n.n(J),q=n("+VJR"),Y=n.n(q),Q=n("BxsD");n.d(t,"UPDATE_INTERVAL",(function(){return ee})),n.d(t,"ExploreSidebar",(function(){return ne}));var Z=E.a.f9ef5332,$=E.a.e7f88406,ee=3e5,te=function(){return u.createElement(Y.a,{message:$})},ne=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,l()(o()(t),"_getModuleWithProfileUserId",K()(o()(t),(function(e){return e.profileUserId}),(function(e){return Object(Q.c)({displayLocation:Q.a.WebSidebar,profileUserId:e})}))),l()(o()(t),"_setTimelineRef",(function(e){t._timeline=e,e&&t._startTimer()})),l()(o()(t),"_startTimer",(function(){t._stopTimer(),t._timer=new V.b(ee).interval(t._fetchUpdates),t._timer.start()})),l()(o()(t),"_stopTimer",(function(){t._timer&&t._timer.stop(),t._timer=void 0})),l()(o()(t),"_onAppForegrounded",(function(e){"active"===e&&t._fetchUpdates()})),l()(o()(t),"_fetchUpdates",(function(){t._timeline&&"active"===B.a.currentState&&t._timeline.fetchTop({})})),t}c()(t,e);var n=t.prototype;return n.componentDidMount=function(){B.a.addEventListener("change",this._onAppForegrounded)},n.componentWillUnmount=function(){this._stopTimer(),B.a.removeEventListener("change",this._onAppForegrounded)},n.render=function(){var e=this.props.profileUserId?this._getModuleWithProfileUserId():Q.e;return u.createElement(I.a,null,u.createElement(W.a,{entryConfiguration:G,module:e,renderUnavailable:te,scroller:H.a,showFooter:!1,timelineRef:this._setTimelineRef,title:Z}))},t}(u.Component);t.default=ne},BxsD:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return d})),n.d(t,"f",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"g",(function(){return p}));n("91GP"),n("DW2E");var r=n("ZNT5"),a=n("eR3e"),i=Object.freeze({Trends:"trends"}),o=Object.freeze({WebSidebar:"web_sidebar"}),s="explore-",c=function(e){var t=void 0===e?{}:e,n=t.contentType,a=t.displayLocation,i=t.profileUserId,o=n||a||"main",c=i?""+s+o+"-"+i:""+s+o;return Object(r.a)({timelineId:c,getEndpoint:function(e){return e.URT.fetchExplore},getEndpointParams:function(e){return Object.assign({candidate_source:n,display_location:a,profile_user_id:i},e)},context:"FETCH_EXPLORE",perfKey:""+s+o,staleIntervalMs:9e5})},d=c(),l=c({contentType:i.Trends}),u=c({displayLocation:o.WebSidebar}),p=function(){return function(e,t){return e(Object(a.m)(t()).filter((function(e){return 0===e.indexOf(s)})).map((function(e){return Object(a.d)(e)})))}}},XtkE:function(e,t,n){"use strict";n("91GP"),n("f3/d");var r=n("R972"),a=n("6rlp"),i=n("q1tI"),o=n("vjRr"),s=n("hap+"),c=n("NnR4"),d=n("caTy"),l=n("cFuS"),u=n("zh9S"),p=n("Rp9C"),m=n("X04g"),f=(n("pIFo"),n("SRfc"),n("tUrg"),n("VbXa")),h=n.n(f),_=n("0mK8"),b=n("wrlS"),g=n("NxHW"),y=n("zOwA"),T="metadata",v="trend",E=n("Epja"),S=n.n(E),w=n("hxu0"),x=n("k5dz"),C=n.n(x),I=n("C4WR"),M=n.n(I),O=n("tcLM"),j=n.n(O),k=n("A559"),R=n.n(k),U=/[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm,P=function(e){function t(){return e.apply(this,arguments)||this}h()(t,e);var n=t.prototype;return n.render=function(){var e=this.props,t=e.attachment,n=e.description,r=e.domainContext,a=e.isInSidebar,o=e.link,s=e.name,c=e.promotedContent,d=e.rank,l=e.onClick,u=s.replace("#","").charAt(0).match(U)?"rtl":"ltr",p=a&&!c,m=!p||!b.a.isTrue("responsive_web_trends_modification_hide_country"),f=!p||!b.a.isTrue("responsive_web_trends_modification_hide_card"),h=!p||!b.a.isTrue("responsive_web_trends_modification_hide_description"),y=o&&("string"==typeof o?{pathname:o}:o);return i.createElement(M.a,{interactiveStyles:a?Object(g.a)():void 0,link:y?Object.assign({},y,{anchorless:!0}):void 0,onPress:l,style:z.rootLink,testID:v},m&&(d||r)?i.createElement(C.a,{color:"deepGray",size:"small"},i.createElement(C.a,{importantForAccessibility:"no-hide-descendants"},d,d&&r?i.createElement(_.e,{color:"deepGray"}):null),r):null,i.createElement(C.a,{dir:u,style:z.name,weight:"bold",withHashflags:!0},s),h?i.createElement(C.a,{color:"deepGray",style:z.description},n):null,f&&t?i.createElement(S.a,{style:z.attachment},t):null,this._renderMetadata())},n._renderMetadata=function(){var e,t=this.props,n=t.isInSidebar,r=t.metaDescription,a=t.promotedContent,o=t.socialProofUser,s=n&&b.a.isTrue("responsive_web_trends_modification_hide_social_proof");return a?e=i.createElement(j.a,{label:r,promotedContent:a}):s?e=null:o&&r?e=i.createElement(y.a,{image:o.profile_image_url_https,key:o.id_str,label:r,textSize:"small"}):r&&(e=r),e?i.createElement(C.a,{color:"deepGray",size:"small",style:z.withMarginTop,testID:T},e):null},t}(i.Component),A=Object(w.a)(P),z=R.a.create((function(e){return{rootLink:{alignItems:"flex-start",display:"flex",paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical},attachment:{alignSelf:"stretch",paddingBottom:e.spaces.xxSmall,paddingTop:e.spaces.xSmall},description:{paddingTop:e.spaces.micro},name:{paddingTop:e.spaces.micro},withMarginTop:{marginTop:e.spaces.xxSmall}}})),D=n("G6rE"),F=n("SMZj"),N=function(e){var t=e.content,n=t.name,r=t.promotedMetadata,a=Object.assign({item_type:m.a.ItemType.TREND,item_query:n,name:n},p.a.getGuideItem(e));return r&&(a.disclosure_type=r.disclosureType),a},L=function(e){return e?{disclosure_type:e.disclosureType,impression_id:e.promotedTrendId}:void 0},G=function(e,t){if(e&&e.length>0){var n=e[0];if(!t&&Object(F.h)(n.name)!==F.d.EVENT)return;var r="summary_large_image"===n.name?"summary":n.name;return n.trends_horizon_web_card_binding_values?i.createElement(c.a,{card:{url:n.url,name:r,binding_values:n.trends_horizon_web_card_binding_values,users:n.users},cardContext:{locationKey:"trend",tweetUserId:"TREND_CARD_NO_TWEET_USER_ID"},cardState:"secondary"}):void 0}},W=function(e){var t=e.entry;return{cards:o.a.createManyHydratedSelector(t.content.associatedCardUrls||[]),socialProofUsers:function(e){return D.e.selectMany(e,t.content.associatedUserIds||[])}}};t.a=function(e){var t=e.withThirdPartyCards,n=void 0!==t&&t;return r.d(r.f({isFocusable:Object(s.a)(!0),component:A,bindActions:Object(s.a)({logTrend:a.c,scribe:u.c}),selectData:W,createProps:function(e){var t=e.actions,r=t.logTrend,a=t.scribe,i=e.data,o=i.cards,s=i.socialProofUsers,c=e.entry,u=e.scribeNamespace,p=c.content,m=p.promotedMetadata;return{attachment:G(o,n),description:p.description,domainContext:p.trendMetadata.domainContext,link:Object(d.b)(p.url),metaDescription:p.trendMetadata&&p.trendMetadata.metaDescription,name:p.name,onClick:function(){a(Object.assign({},u,{action:"search"}),{items:[N(c)]}),m&&r({promoted_trend_id:m.promotedTrendId,event:l.d.CLICK})},promotedContent:L(m),rank:p.rank,socialProofUser:s&&s[0]}},onImpression:function(e){var t=e.entry,n=e.actions.logTrend,r=t.content.promotedMetadata;r&&n({promoted_trend_id:r.promotedTrendId,event:l.d.IMPRESSION})}}))}},zOwA:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n("VbXa"),a=n.n(r),i=n("lSNA"),o=n.n(i),s=n("q1tI"),c=n("k5dz"),d=n.n(c),l=n("mIBu"),u=n.n(l),p=n("A559"),m=n.n(p),f=n("+s8S"),h=n.n(f),_=n("Epja"),b=n.n(_),g=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props,t=e.color,n=e.image,r=e.label,a=e.textSize;return s.createElement(b.a,{style:y.root},n?s.createElement(b.a,{style:y.imageContainer},s.createElement(u.a,{ratio:1},s.createElement(h.a,{source:n,style:y.image}))):null,s.createElement(d.a,{color:t,size:a},r))},t}(s.PureComponent);o()(g,"defaultProps",{color:"deepGray",textSize:"normal"});var y=m.a.create((function(e){return{root:{alignItems:"center",flexDirection:"row"},imageContainer:{alignSelf:"flex-start",backgroundColor:e.colors.lightGray,flexShrink:0,height:e.fontSizes.large,marginRight:e.spaces.xxSmall,width:e.fontSizes.large,borderRadius:"100%"},image:{height:"100%",width:"100%",borderRadius:e.borderRadii.infinite}}}))}}]);
//# sourceMappingURL=https://ton.smf1.twitter.com/responsive-web-internal/sourcemaps/web/loader.ExploreSidebar.f936b864.js.map