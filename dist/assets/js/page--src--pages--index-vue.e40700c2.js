(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+Fy6":function(t,e,i){"use strict";i.r(e),i.d(e,"load",(function(){return h})),i.d(e,"animate",(function(){return w})),i.d(e,"hover",(function(){return m})),i.d(e,"unhover",(function(){return v}));i("QWBl"),i("07d7"),i("FZtP");var n,a=i("Womt"),s=i("IrXD"),o=i("NK00").GLTFLoader,r=i("GGO7"),l=r.loadPhone,c=r.loadPlanet,d=r.loadImage,p=null,u=0,h=function(t){n=l("video",20,35,2,16712020,{x:-10,y:23.5,z:-3},!0),t.add(n);var e=new o,i=d("/waves.png",300,300);t.add(i),i.scale.set(.35,.35,.35),i.position.z=4,i.position.y=1,i.rotation.x=a.MathUtils.degToRad(-90),i.rotation.z=a.MathUtils.degToRad(225),e.load("/little_planet_earth/scene.gltf",(function(e){e.scene.children[0].scale.set(.03,.03,.03),(new a.Box3).setFromObject(e.scene.children[0]).center(e.scene.children[0].position),e.scene.children[0].position.multiplyScalar(-1);var i=new a.Group;t.add(i),i.add(e.scene.children[0]),(p=i).position.z=15,p.position.y=15;for(var n=[],s=0;s<5;s+=1){var o=new a.PlaneGeometry(2,2,1,1),r=(new a.TextureLoader).load("/location.png"),l=new a.MeshBasicMaterial({map:r,transparent:!0});n[s]=new a.Mesh(o,l),n[s].receiveShadow=!0,i.add(n[s])}n[0].position.x=0,n[0].position.y=0,n[0].position.z=15.5,n[1].position.x=5,n[1].position.y=8,n[1].position.z=12.29,n[2].position.x=0,n[2].position.y=-8,n[2].position.z=13.27,n[3].position.x=-8,n[3].position.y=13,n[3].position.z=2.69,n[4].position.x=0,n[4].position.y=-3,n[4].position.z=-15.2;var d=c("/moon.jpeg",2);d.position.x=30,i.add(d),p.rotation.z=-.26,t.add(p)}),void 0,(function(t){console.error(t)}))},m=function(){var t=new a.Vector3(n.position.x-45,n.position.y+30,n.position.z+60),e=new s.Tween(n.position).to(t,500),i=new s.Tween(n.rotation).to({x:a.MathUtils.degToRad(-20),y:a.MathUtils.degToRad(-45),z:a.MathUtils.degToRad(-12)},500);e.start(),i.start()},v=function(){var t=new a.Vector3(-10,23.5,-3),e=new s.Tween(n.position).to(t,500),i=new s.Tween(n.rotation).to({x:0,y:a.MathUtils.degToRad(0),z:0},500);e.start(),i.start()},w=function(t){u+=.05,p&&(p.rotation.y-=.01,p.position.y+=.05*Math.sin(u),p.children.forEach((function(t,e){e>0&&e<6&&(t.rotation.y+=.01)}))),s.update(t)}},"2lD+":function(t,e,i){"use strict";i.r(e),i.d(e,"getCamera",(function(){return o})),i.d(e,"moveCamera",(function(){return l})),i.d(e,"updateAspectRatio",(function(){return r}));var n=i("Womt"),a=0,s=null,o=function(){return r(),s.position.setX(0),s.position.setY(30),s.position.setZ(30),s.rotation.x=n.MathUtils.degToRad(-31),s.rotation.y=n.MathUtils.degToRad(-35),s.rotation.z=n.MathUtils.degToRad(-20),s},r=function(){var t=window.innerWidth/window.innerHeight,e=window.innerWidth/(10*t)-48,i=window.innerHeight/(10*t)-27;s=new n.OrthographicCamera(-48,e,i,-27,-500,500)},l=function(){var t,e=0,i=document.getElementById("startCanvas"),n=(t=i,{top:t.getBoundingClientRect().top+document.getElementById("main").scrollTop}).top;document.getElementById("main").scrollTop>n&&(e=document.getElementById("main").scrollTop-n),a=10+.2*e,s.position.x=a}},"6LC3":function(t,e,i){t.exports=i.p+"assets/img/fotoperfil.daa53c3f.jpg"},GGO7:function(t,e,i){"use strict";i.r(e),i.d(e,"loadImage",(function(){return o})),i.d(e,"loadPlanet",(function(){return l})),i.d(e,"load3DModel",(function(){return c})),i.d(e,"loadPhone",(function(){return d}));var n=i("Womt"),a=i("NK00").GLTFLoader,s=(i("dhIV").RoundedBoxGeometry,new a),o=function(t,e,i){var a=new n.PlaneGeometry(e,i,1,1),s=(new n.TextureLoader).load(t),o=new n.MeshBasicMaterial({map:s,transparent:!0}),r=new n.Mesh(a,o);return r.receiveShadow=!0,r},r=function(t,e,i){var a=document.getElementById(t);a.play();var s=new n.PlaneGeometry(e,i,1,1),o=new n.VideoTexture(a),r=new n.MeshBasicMaterial({map:o,side:n.FrontSide,toneMapped:!1}),l=new n.Mesh(s,r);return l.receiveShadow=!0,l},l=function(t,e){var i=new n.SphereGeometry(e,10,25),a=(new n.TextureLoader).load(t),s=new n.MeshBasicMaterial({map:a}),o=new n.Mesh(i,s);return o.receiveShadow=!0,o},c=function(t,e,i){s.load(t,(function(t){t.scene.children[0].scale.set(e,e,e),i(t.scene.children[0])}),void 0,(function(t){console.error(t)}))},d=function(t,e,i,a,l,c){var d=c.x,p=c.y,u=c.z,h=arguments.length>6&&void 0!==arguments[6]&&arguments[6],m=new n.Group;s.load("/phone/scene.gltf",(function(t){console.log(t);var e=new n.MeshPhysicalMaterial({color:l,emissive:l,roughness:.2,metalness:1,reflectivity:.8}),i=new n.MeshPhysicalMaterial({color:1842204,emissive:1842204,roughness:.5,metalness:1,reflectivity:.8}),a=new n.MeshPhysicalMaterial({color:1842204,emissive:1842204,roughness:0,metalness:1,reflectivity:.8});t.scene.children[0].material=i,t.scene.children[1].material=i,t.scene.children[2].material=i,t.scene.children[3].children[0].material=e,t.scene.children[3].children[1].material=a,t.scene.scale.set(5,4.9,5),t.scene.position.z-=.12,t.scene.rotation.y=n.MathUtils.degToRad(-90),m.add(t.scene)}),void 0,(function(t){console.error(t)})),m.position.x=d,m.position.z=u,m.position.y=p;var v=null;return v=h?r(t,.92*e,.95*i):o(t,.92*e,.95*i),m.add(v),v.position.z=.51*a,m}},aK7f:function(t,e,i){},"ayb+":function(t,e,i){t.exports=i.p+"assets/img/QueComprar.bb59e942.png"},gEGz:function(t,e,i){"use strict";i("aK7f")},hakf:function(t,e,i){t.exports=i.p+"assets/img/kanuki.99f9ddbc.png"},iyQ6:function(t,e,i){"use strict";i.r(e);i("R5XZ"),i("+2oP"),i("TeQF"),i("07d7"),i("LKBx"),i("4yNf");var n,a,s=!1,o={metaInfo:function(){return{title:"Posts"}},methods:{openWindow:function(t){window.open(t)},scrollProjects:function(){document.getElementById("main").scrollTo({top:window.innerHeight,behavior:"smooth"})},openEmail:function(){window.open("mailto:contacto@andriugarcia.com")},openTwitter:function(){window.open("https://twitter.com/Versymattic")},openLinkedin:function(){window.open("https://www.linkedin.com/in/andriugarcia/")},downloadResumeFullstack:function(){window.open("/AndriuGarcia-WebDeveloperResume.pdf")},downloadResumeProductManager:function(){window.open("/ResumeAndriuGarcia-ProductManager.pdf")},typeWriter:function(){if(this.letterWritten<this.$t("greetings").length){this.greetings+=this.$t("greetings").charAt(this.letterWritten),this.letterWritten++;var t=" "==this.$t("greetings").charAt(this.letterWritten)?500:25;setTimeout(this.typeWriter,t)}}},data:function(){return{projectShortcutIteration:0,letterWritten:0,greetings:"",projectIcons:["https://olimaps.com/_nuxt/img/olimaps-logo.2297405.png",i("qjwn"),i("hakf"),i("y51z"),i("ayb+"),i("lVNN")],nameShow:!1,missionShow:!1,descriptionShow:!1,ctaShow:!1,projects:[{name:"Olimaps",logo:"https://olimaps.com/_nuxt/img/olimaps-logo.2297405.png",description:{"en-en":"Olimaps is a social network with the mission of recovering real relationships between people, in this project I have been able to develop the complete platform, including its business model, architecture, design, branding, and implementation of the entire web app and infrastructure","es-es":"Olimaps es una red social con la misión de recuperar las relaciones reales entre las personas, en este proyecto he podido desarrollar la plataforma completa, incluyendo su modelo de negocio, arquitectura, diseño, branding, e implementación de toda la app web e infraestructura"},stack:"Nuxt.js (Vue.js) · Express.js · Prisma.js · TypeScript · PostgreSQL · ElasticSearch",app:"https://olimaps.com",github:"https://github.com/andriugarcia/Olimaps-Frontend"},{name:"Pantala",logo:i("qjwn"),description:{"en-en":"Pantala is a subscription service where users have 3 garments that they can change monthly","es-es":"Pantala es un servicio de suscripción en el que los usuarios disponen de 3 prendas que pueden cambiar mensualmente"},stack:"Nuxt.js (Vue.js), GraphQL, MySQL, Firebase, CloudFlare, Stripe",app:"https://pantala.es",github:""}]}},computed:{posts:function(){var t=this;return this.$page.allThreadsList.edges.filter((function(e){return t.$i18n.locale.startsWith(e.node.locale)})).slice(0,3)}},filters:{truncate:function(t){return t.substr(0,120)+"..."}},mounted:function(){var t=this;document.addEventListener("mousemove",(function(t){!s&&t.clientX<window.innerWidth/2&&t.clientY>window.innerHeight/2?(s=!0,n.hover(),a.hover(),(void 0).hover()):!s||t.clientX<window.innerWidth/2&&t.clientY>window.innerHeight/2||(s=!1,n.unhover(),a.unhover(),(void 0).unhover())})),this.typeWriter();var e=i("Womt");n=i("+Fy6"),a=i("lRrX");var o=i("2lD+"),r=o.getCamera,l=o.moveCamera,c=new e.Scene,d=new e.WebGLRenderer({canvas:document.querySelector("#bg")}),p=r();window.onresize=function(){p=r()};var u=new e.GridHelper(1e4,1e3,14737632,14737632);c.add(u),n.load(c);setTimeout((function(){var t=1*document.getElementsByClassName("block")[1].offsetHeight*.2;c.add(a.load(t))}));var h=new e.AmbientLight(16777215),m=new e.DirectionalLight(16777215,.5);m.position.set(-1,1,1),c.add(h,m),document.getElementById("main").onscroll=l,l(),function t(){requestAnimationFrame(t),d.render(c,p),d.setPixelRatio(window.devicePixelRatio),d.setSize(window.innerWidth,window.innerHeight),d.setClearColor(16777215,1),n.animate(),a.animate()}();setTimeout((function(){return t.nameShow=!0}),2e3),setTimeout((function(){return t.missionShow=!0}),2500),setTimeout((function(){return t.descriptionShow=!0}),3e3),setTimeout((function(){return t.ctaShow=!0}),3500)}},r=(i("gEGz"),i("KHd+")),l=null,c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("div",{attrs:{id:"main"}},[n("video",{staticStyle:{display:"none"},attrs:{id:"video",playsinline:"","webkit-playsinline":"",muted:"",loop:"",autoplay:"",width:"320",height:"240",src:"/olimaps.mp4"},domProps:{muted:!0}}),n("video",{staticStyle:{display:"none"},attrs:{id:"videoPantala",playsinline:"","webkit-playsinline":"",muted:"",loop:"",autoplay:"",width:"320",height:"240",src:"/pantala.mp4"},domProps:{muted:!0}}),n("v-card",{staticStyle:{"scroll-snap-align":"start",height:"calc(100vh + 16px)",width:"100vw","z-index":"20"},attrs:{color:"secundary",tile:""}},[t.$vuetify.breakpoint.lgAndUp?n("v-card",{staticStyle:{position:"absolute",bottom:"12px",left:"0",right:"0"},attrs:{flat:"",color:"transparent",column:"",align:"center"},on:{click:t.scrollProjects}},[n("v-icon",{staticClass:"mb-3",attrs:{color:"black"}},[t._v("mdi-arrow-down")]),n("div",{staticClass:"black--text",staticStyle:{"font-weight":"600"}},[t._v("\n          "+t._s(t.$t("viewProjects"))+"\n        ")])],1):t._e(),n("v-row",{staticClass:"pa-12",staticStyle:{height:"100%",width:"100%"},attrs:{justify:"center",align:"center"}},[t.$vuetify.breakpoint.lgAndUp?n("v-flex",{attrs:{xs4:""}},[n("v-card",{staticClass:"rotate-1 rounded-xl",staticStyle:{height:"300px",width:"300px",background:"linear-gradient(-45deg, #ddd9ce, #e0e2e1)"},attrs:{outlined:""}},[n("v-img",{attrs:{src:i("6LC3")}})],1),n("v-card",{staticClass:"\n              rotate-2\n              d-flex\n              flex-column\n              justify-center\n              align-center\n              rounded-xl\n              secundary--text\n              mt-6\n            ",staticStyle:{height:"200px",width:"200px","margin-left":"100px"},attrs:{outlined:""}},[n("span",{staticClass:"mt-10",staticStyle:{"font-size":"82px","font-weight":"800","line-height":"32px"}},[t._v("10")]),n("div",{staticClass:"justify-self-end",staticStyle:{"font-size":"24px","font-weight":"bold"}},[t._v("\n              "+t._s(t.$t("webProjects"))+"\n            ")]),n("div",{staticClass:"justify-self-end",staticStyle:{"font-size":"16px","font-weight":"500"}},[t._v("\n              "+t._s(t.$t("in5years"))+"\n            ")])]),n("v-card",{staticClass:"rotate-3 rounded-xl",staticStyle:{height:"150px",width:"150px","margin-left":"40px"},attrs:{outlined:""}},[n("v-carousel",{attrs:{cycle:"",interval:3e3,"hide-delimiters":"",touchless:"","show-arrows":!1},model:{value:t.projectShortcutIteration,callback:function(e){t.projectShortcutIteration=e},expression:"projectShortcutIteration"}},t._l(t.projectIcons,(function(t,e){return n("v-carousel-item",{key:e},[n("v-img",{staticClass:"ma-6",attrs:{src:t}})],1)})),1)],1)],1):t._e(),n("v-flex",{staticClass:"pt-6",attrs:{xs12:"",lg5:""}},[n("span",{staticClass:"mono font-weight-bold primary--text"},[t._v(t._s(t.greetings))]),n("v-fade-transition",[n("h1",{directives:[{name:"show",rawName:"v-show",value:t.nameShow,expression:"nameShow"}],staticClass:"white--text mt-2",staticStyle:{"font-size":"280%","font-weight":"600","line-height":"48px"}},[t._v("\n              Andriu Garcia\n            ")])]),n("v-fade-transition",[n("p",{directives:[{name:"show",rawName:"v-show",value:t.missionShow,expression:"missionShow"}],staticClass:"white--text mt-2",staticStyle:{"font-size":"240%","font-weight":"600","line-height":"48px",opacity:"0.8"}},[t._v("\n              "+t._s(t.$t("mission"))+"\n            ")])]),n("v-fade-transition",[n("p",{directives:[{name:"show",rawName:"v-show",value:t.descriptionShow,expression:"descriptionShow"}],staticClass:"white--text",staticStyle:{"max-width":"500px"}},[t._v("\n              "+t._s(t.$t("description"))+"\n            ")])]),n("v-fade-transition",[n("v-layout",{directives:[{name:"show",rawName:"v-show",value:t.ctaShow,expression:"ctaShow"}],staticClass:"mb-2 px-0",attrs:{"justify-start":""}},[n("v-card",{staticClass:"\n                  text-capitalize\n                  d-flex\n                  flex-column\n                  justify-center\n                  align-center\n                  rounded-xl\n                  yellow--shadow\n                  mr-4\n                  pa-4\n                ",staticStyle:{"min-width":"80px",border:"1px solid #ffc764 !important"},attrs:{outlined:"",depressed:"",light:"",color:"secundary"},on:{click:t.openEmail}},[n("v-icon",{staticClass:"primary--text",attrs:{size:"36"}},[t._v("mdi-email")]),n("div",{staticClass:"primary--text",staticStyle:{"letter-spacing":"0"}},[t._v("\n                  E-mail\n                ")])],1),n("v-card",{staticClass:"\n                  text-capitalize\n                  d-flex\n                  flex-column\n                  justify-center\n                  align-center\n                  rounded-xl\n                  yellow--shadow\n                  mr-4\n                  pa-4\n                ",staticStyle:{"min-width":"80px",border:"1px solid #ffc764 !important"},attrs:{outlined:"",depressed:"",light:"",color:"secundary"},on:{click:t.openTwitter}},[n("v-icon",{staticClass:"primary--text",attrs:{size:"36"}},[t._v("mdi-twitter")]),n("div",{staticClass:"primary--text",staticStyle:{"letter-spacing":"0"}},[t._v("\n                  Twitter\n                ")])],1),n("v-card",{staticClass:"\n                  text-capitalize\n                  d-flex\n                  flex-column\n                  justify-center\n                  align-center\n                  rounded-xl\n                  yellow--shadow\n                  xl\n                  pa-4\n                ",staticStyle:{"min-width":"80px",border:"1px solid #ffc764 !important"},attrs:{outlined:"",depressed:"",light:"",color:"secundary"},on:{click:t.openLinkedin}},[n("v-icon",{staticClass:"primary--text",attrs:{size:"36"}},[t._v("mdi-linkedin")]),n("div",{staticClass:"primary--text",staticStyle:{"letter-spacing":"0"}},[t._v("\n                  Linkedin\n                ")])],1)],1)],1)],1)],1)],1),n("canvas",{staticStyle:{position:"fixed",top:"0",bottom:"0",right:"0",left:"0"},attrs:{id:"bg"}}),n("div",{attrs:{id:"startCanvas"}}),n("div",{staticClass:"redbar"}),t._l(t.projects,(function(e,i){return n("v-card",{key:i,staticClass:"block d-flex flex-row-reverse",staticStyle:{"padding-top":"82px","padding-right":"60px"},attrs:{color:"transparent",flat:""}},[n("div",{staticClass:"text-right",staticStyle:{width:"460px","max-width":"80vw"}},[n("v-layout",{staticClass:"px-0",staticStyle:{"margin-right":"-39px"},attrs:{"justify-end":""}},[n("h1",{staticClass:"mr-2"},[t._v(t._s(e.name))]),n("v-avatar",{staticStyle:{"z-index":"10"}},[n("v-img",{attrs:{src:e.logo}})],1)],1),n("span",{staticClass:"mono"},[t._v(t._s(e.stack)+" ")]),n("p",{staticClass:"mt-3",staticStyle:{"text-align":"justify","font-weight":"600"}},[t._v("\n          "+t._s(e.description[t.$i18n.locale])+"\n        ")]),n("v-layout",{staticClass:"px-0",attrs:{"justify-end":""}},[0!=e.github.length?n("v-btn",{staticClass:"mr-2 text-capitalize",attrs:{depressed:"",color:"grey lighten-4"},on:{click:function(i){return t.openWindow(e.github)}}},[n("v-icon",{staticClass:"mr-1"},[t._v("mdi-github")]),n("span",[t._v("GitHub")])],1):t._e(),0!=e.app.length?n("v-btn",{staticClass:"text-capitalize",attrs:{dark:"",depressed:"",color:"secundary"},on:{click:function(i){return t.openWindow(e.app)}}},[t._v(t._s(t.$t("checkApp")))]):t._e()],1)],1)])})),n("v-card",{staticStyle:{"scroll-snap-align":"start","z-index":"2"},attrs:{flat:""}},[n("v-layout",{staticClass:"px-0 mx-0 pb-12",staticStyle:{"max-width":"100%"},attrs:{"justify-center":""}},[n("v-flex",{attrs:{sm9:"",xs12:""}},[n("v-subheader",{staticStyle:{"margin-top":"72px"}},[t._v("Posts")]),n("v-divider",{staticClass:"mx-4"}),n("v-layout",{staticStyle:{"max-width":"100%"},attrs:{wrap:"","justify-start":""}},[t._l(t.posts,(function(e,i){return n("v-flex",{key:i,staticClass:"mb-4",attrs:{xs12:"",md4:""}},[n("v-card",{staticClass:"ma-4 pa-3 shadow",staticStyle:{height:"100%"},attrs:{outlined:"",rounded:"",color:"primary"},on:{click:function(i){return t.$router.push({path:"/blog/"+e.node.id})}}},[n("h3",{staticClass:"my-1"},[t._v(t._s(e.node.title))]),n("p",[t._v(t._s(t._f("truncate")(e.node.content[0].text)))]),n("v-layout",{staticClass:"px-4 pb-2",staticStyle:{position:"absolute",bottom:"0",left:"0",right:"0"},attrs:{"justify-space-between":""}},[n("span",[t._v("\n                    "+t._s(e.node.content.length)+" "+t._s(t.$t("cards"))+"\n                  ")]),n("i",[t._v(" "+t._s(t.$t("by"))+" "+t._s(e.node.author)+" ")])])],1)],1)})),n("v-flex",{attrs:{xs12:""}},[n("g-link",{attrs:{to:"/posts/"}},[n("v-btn",{staticClass:"mt-12",attrs:{block:"",depressed:"",color:"grey lighten-5"}},[t._v(t._s(t.$t("morePosts")))])],1)],1)],2)],1)],1)],1),n("v-toolbar",{staticStyle:{"z-index":"2"},attrs:{dark:"",color:"background"}},[n("v-spacer"),n("span",{staticClass:"mono",staticStyle:{"font-size":"min(3vw, 16px)"}},[t._v("Made with Vue.js · Gridsome · Vuetify · Three.js")]),n("v-spacer")],1),n("v-footer",{staticClass:"pa-6 pt-12",staticStyle:{"scroll-snap-align":"start","z-index":"2"},attrs:{color:"secundary"}},[n("v-layout",{staticClass:"px-0",attrs:{"justify-space-around":"",wrap:""}},[n("v-flex",{staticClass:"mb-6",attrs:{md5:"",xs12:"",sm12:""}},[n("h1",[t._v("Andriu Garcia")]),n("v-subheader",[t._v("CV / Resume")]),n("v-layout",{staticClass:"mb-2 px-0",attrs:{"justify-space-around":""}},[n("v-btn",{staticClass:"text-capitalize",attrs:{depressed:"",block:"",color:"#e11548"},on:{click:t.downloadResumeFullstack}},[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-paperclip")]),n("span",{staticStyle:{"letter-spacing":"0"}},[t._v("CV / Resume")])],1)],1)],1),n("v-flex",{staticClass:"mb-6",attrs:{md5:"",xs12:"",sm12:""}},[n("h1",[t._v(t._s(t.$t("letsTalk")))]),n("v-layout",{staticClass:"mb-2 px-0",attrs:{"justify-space-around":""}},[n("v-btn",{staticClass:"text-capitalize",attrs:{depressed:"",color:"#e11548"}},[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-twitter")]),n("span",{staticStyle:{"letter-spacing":"0"}},[t._v("@versymattic")])],1),n("v-btn",{staticClass:"text-capitalize",attrs:{depressed:"",color:"#e11548"}},[n("v-icon",{staticClass:"mr-2"},[t._v("mdi-linkedin")]),n("span",{staticStyle:{"letter-spacing":"0"}},[t._v("/in/andriugarcia")])],1)],1),n("v-text-field",{attrs:{value:"contacto@andriugarcia.com","append-icon":"mdi-at","solo-inverted":"",flat:"",readonly:""},on:{click:function(e){return t.window.open("mailto:contacto@andriugarcia.com")}}})],1)],1)],1)],2)])}),[],!1,null,null,null);"function"==typeof l&&l(c);e.default=c.exports},lRrX:function(t,e,i){"use strict";i.r(e),i.d(e,"load",(function(){return u})),i.d(e,"animate",(function(){return w})),i.d(e,"hover",(function(){return h})),i.d(e,"unhover",(function(){return m}));i("OM9Z"),i("R5XZ");var n,a,s=i("Womt"),o=i("IrXD"),r=i("GGO7"),l=r.loadPhone,c=r.loadImage,d=function(t,e,i,n){var a=new s.BoxGeometry(e,i,n),o=(new s.TextureLoader).load(t);o.wrapS=s.RepeatWrapping,o.wrapT=s.RepeatWrapping,o.repeat.set(8,4);var r=new s.MeshStandardMaterial({map:o}),l=new s.Mesh(a,r);return l.receiveShadow=!0,l},p=function(t){var e=new s.BoxGeometry(t,t,t),i=(new s.TextureLoader).load("/textures/cardboard.jpeg"),n=new s.MeshStandardMaterial({map:i}),a=new s.Mesh(e,n);return a.receiveShadow=!0,a},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=new s.Group;e.position.x=t,n=l("videoPantala",20,35,2,2894892,{x:-10,y:23.5,z:-3},!0),e.add(n);var i=d("/textures/carpet.jpeg",550,400,5);i.position.y=1,i.rotation.x=s.MathUtils.degToRad(-90),i.scale.set(.15,.15,.15),e.add(i);var o={x:0,y:15,z:20,spacing:20};(a=[new s.Group,new s.Group,new s.Group])[0].position.x=o.x-o.spacing,a[0].position.y=o.y,a[0].position.z=o.z,a[1].position.x=o.x,a[1].position.y=o.y,a[1].position.z=o.z,a[2].position.x=o.x+o.spacing,a[2].position.y=o.y,a[2].position.z=o.z,e.add(a[0]),e.add(a[1]),e.add(a[2]);var r={},u=c("/clothes/clothing-stack.png",300,300);for(var h in r.blueDress=c("/clothes/blue-dress.png",300,300),r.brownJacket=c("/clothes/brown-jacket.png",300,300),r.greenJacket=c("/clothes/green-jacket.png",300,300),r.pants=c("/clothes/pants.png",300,300),r.pinkDress=c("/clothes/pink-dress.png",300,300),r.pinkDress2=c("/clothes/pink-dress.png",300,300),r.purpleTshirt=c("/clothes/purple-tshirt.png",300,300),r.redDress=c("/clothes/red-dress.png",300,300),r.yellowTshirt=c("/clothes/yellow-tshirt.png",300,300),r)r[h].scale.set(.08,.08,.08),r[h].visible=!1;a[0].add(r.blueDress),a[0].add(r.brownJacket),a[0].add(r.greenJacket),a[1].add(r.pinkDress2),a[1].add(r.pants),a[1].add(r.purpleTshirt),a[2].add(r.redDress),a[2].add(r.yellowTshirt),a[2].add(r.pinkDress),e.add(u),u.scale.set(.04,.04,.04),u.position.y=10,u.position.x=-22,u.position.z=5,u.rotation.y=s.MathUtils.degToRad(-45);var m=new s.Group,v=[p(8),p(8),p(8)];m.position.y+=15,m.position.z-=2,m.position.x+=5.5,m.add(v[0]),m.add(v[1]),m.add(v[2]),e.add(m),v[0].rotation.y=s.MathUtils.degToRad(-45),v[1].position.y+=8,v[1].position.x+=1,v[1].position.z+=1,v[2].rotation.y=s.MathUtils.degToRad(-25),v[2].position.y+=16,v[2].position.x-=1,v[2].position.z-=1;var w=0;return setInterval((function(){var t=(w+1)%3;a[0].children[w].visible=!1,a[0].children[t].visible=!0,a[1].children[w].visible=!1,a[1].children[t].visible=!0,a[2].children[w].visible=!1,a[2].children[t].visible=!0,w=t}),2e3),e},h=function(){var t=new s.Vector3(n.position.x-45,n.position.y+30,n.position.z+60),e=new o.Tween(n.position).to(t,500),i=new o.Tween(n.rotation).to({x:s.MathUtils.degToRad(-20),y:s.MathUtils.degToRad(-45),z:s.MathUtils.degToRad(-12)},500);e.start(),i.start()},m=function(){var t=new s.Vector3(-10,23.5,-3),e=new o.Tween(n.position).to(t,500),i=new o.Tween(n.rotation).to({x:0,y:s.MathUtils.degToRad(0),z:0},500);e.start(),i.start()},v=0,w=function(t){v+=.05,a&&(a[0].position.y+=.05*Math.sin(v),a[1].position.y+=.05*Math.sin(v+.8),a[2].position.y+=.05*Math.sin(v+.16)),o.update(t)}},lVNN:function(t,e,i){t.exports=i.p+"assets/img/rubik.3885e0dd.png"},qjwn:function(t,e,i){t.exports=i.p+"assets/img/pantala.284e8948.png"},y51z:function(t,e,i){t.exports=i.p+"assets/img/PickALook.97ea259a.png"}}]);