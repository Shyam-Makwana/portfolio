(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{30:function(e,t,i){e.exports={Link:"Link_Link__34wZE",ActiveLink:"Link_ActiveLink__1p0D_"}},34:function(e,t,i){e.exports={Home:"Home_Home__1unGK"}},35:function(e,t,i){e.exports={Navbar:"Navbar_Navbar__2t_71"}},38:function(e,t,i){e.exports={Views:"visitors_Views__gb3BM"}},40:function(e,t,i){e.exports={Title:"Title_Title__20AKs"}},41:function(e,t,i){e.exports={Tag:"Tag_Tag__279DY"}},42:function(e,t,i){e.exports={Edu:"Educations_Edu__3SRfR"}},47:function(e,t,i){},48:function(e,t,i){},49:function(e,t,i){},59:function(e,t,i){"use strict";i.r(t);var a=i(2),n=i.n(a),s=i(33),c=i.n(s),o=(i(47),i(48),i(20)),r=(i(49),i(34)),l=i.n(r),d=i(35),h=i.n(d),m=i(61),j=i(30),u=i.n(j),b=i(26),x=i(3),p=function(e){var t=e.name,i=e.path,a=e.delay,n=e.click;return Object(x.jsx)(m.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:a}},children:Object(x.jsx)(b.b,{onClick:n,exact:!0,to:i,className:["hover:text-white transition-all duration-300 relative mx-4",u.a.Link].join(" "),activeClassName:u.a.ActiveLink,children:t})})},f=function(e){var t=e.className,i=e.click,a=e.delay;return Object(x.jsxs)(m.a.div,{initial:{opacity:0},animate:{opacity:1},className:["flex",t].join(" "),children:[Object(x.jsx)(p,{name:"About",path:"/",delay:a,click:i}),Object(x.jsx)(p,{name:"Experience",path:"/experience",delay:a+.1,click:i}),Object(x.jsx)(p,{name:"Technology",path:"/tech",delay:a+.2,click:i}),Object(x.jsx)(p,{name:"Projects",path:"/project",delay:a+.3,click:i}),Object(x.jsx)(p,{name:"Education",path:"/education",delay:a+.4,click:i})]})},g=i(17),O=function(){return Object(x.jsx)("h1",{className:"font-bold text-3xl mx-4",style:{fontFamily:"'Pacifico', cursive",color:"var(--text-secondary)"},children:"S"})},v=i.p+"static/media/Resume.abb3c898.pdf",y=function(){return Object(x.jsx)("a",{target:"_blank",rel:"noreferrer",href:v,className:"ml-2 p-2 border-2 border-white text-black bg-white rounded-md transition-all duration-300 font-bold",children:"Resume"})},w=i(22),S=function(){return Object(x.jsx)("div",{className:"h-28 bg-gray-400",style:{width:"0.5px"}})},N=function(e){var t=e.url,i=e.Icon;return Object(x.jsx)("a",{href:t,children:Object(x.jsx)(i,{size:24,className:"my-4"})})},k=function(e){var t=e.mobile;return Object(x.jsxs)("div",{className:["flex fixed bottom-0",t?"flex-row justify-around w-full":"flex-col items-center left-10"].join(" "),children:[Object(x.jsx)(N,{url:"https://github.com/Shyam-Makwana",Icon:w.a}),Object(x.jsx)(N,{url:"https://www.linkedin.com/in/shyammakwana",Icon:g.c}),Object(x.jsx)(N,{url:"https://twitter.com/shyammakwana119",Icon:w.d}),Object(x.jsx)(N,{url:"https://www.instagram.com/_sshyam_",Icon:g.b}),t&&Object(x.jsx)(N,{url:"mailto:manan5401desai@gmail.com",Icon:w.c}),!t&&Object(x.jsx)(S,{})]})},_=i(39),D=i(38),E=i.n(D),A=function(e){var t=Object(a.useState)({views:void 0,uniqueViews:void 0}),i=Object(o.a)(t,2),n=i[0],s=i[1],c=Object(a.useState)(!0),r=Object(o.a)(c,2),l=r[0],d=r[1];return Object(a.useEffect)((function(){fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,"/views")).then((function(e){return e.json()})).then((function(e){s({views:e.views,uniqueViews:e.uniqueViews})}))}),[l,e.postView]),Object(x.jsxs)("div",{className:"relative",children:[Object(x.jsx)(_.a,{size:30,onClick:function(){return d(!0)},className:"cursor-pointer"}),void 0!==n.views&&void 0!==n.uniqueViews&&Object(x.jsxs)("div",{className:[E.a.Views,"fixed right-5 md:right-1 p-2 m-2 rounded transition-all duration-300"].join(" "),style:{opacity:l?1:0,zIndex:l?1e3:-1,pointerEvents:l?"all":"none"},children:[Object(x.jsxs)("p",{children:["Views: ",n.views]}),Object(x.jsxs)("p",{children:["Unique-views: ",n.uniqueViews]}),Object(x.jsx)(g.d,{size:16,color:"var(--background-primary)",className:"absolute right-1 top-1 cursor-pointer",onClick:function(){return d(!1)}})]})]})},I=function(e){var t=Object(a.useState)(!1),i=Object(o.a)(t,2),n=i[0],s=i[1];return Object(x.jsxs)("div",{className:[h.a.Navbar,"p-4 border-gray-700 shadow-lg fixed w-screen flex md:justify-center items-center text-xl z-50"].join(" "),children:[Object(x.jsxs)("div",{className:"hidden md:flex items-center",children:[Object(x.jsx)(f,{delay:0,click:function(){}}),Object(x.jsx)("div",{className:"absolute right-2",children:Object(x.jsx)(A,{postView:e.postView})})]}),Object(x.jsxs)("div",{className:"md:hidden flex justify-between items-center w-full",children:[Object(x.jsx)(O,{}),Object(x.jsxs)("div",{className:"flex items-center",children:[Object(x.jsx)(A,{postView:e.props}),Object(x.jsx)(y,{}),Object(x.jsx)(g.a,{className:"ml-4",onClick:function(){return s(!0)},size:"24"})]}),Object(x.jsxs)(m.a.div,{className:"fixed h-full w-full top-0 left-0 transition-all duration-300",style:{background:"var(--background-secondary)",opacity:n?1:0,zIndex:n?1e3:-1,pointerEvents:n?"all":"none"},children:[Object(x.jsx)(g.d,{size:"24",className:"absolute top-4 right-4",onClick:function(){return s(!1)}}),Object(x.jsx)(f,{className:"flex-col justify-evenly items-center h-full",click:function(){return s(!1)},delay:1}),Object(x.jsx)(k,{mobile:!0})]})]})]})},M=i(32),T=function(e){var t=e.children,i=e.className,a=e.style;return Object(x.jsx)(m.a.div,{initial:{opacity:0},animate:{opacity:1,transition:{delay:.5,staggerChildren:.5}},className:["mx-8 flex flex-col md:w-2/3 md:mx-auto",i].join(" "),style:Object(M.a)(Object(M.a)({},a),{},{minHeight:"95vh"}),children:t})},C=i(40),P=i.n(C),R=function(e){var t=e.title;e.number;return Object(x.jsxs)(m.a.div,{initial:{opacity:0},animate:{opacity:1},className:["flex items-center relative mb-8 overflow-hidden",P.a.Title].join(" "),id:"about",children:[Object(x.jsx)("span",{className:"mr-6 w-1/6 bg-gray-600 hidden md:block",style:{height:"1px"}}),Object(x.jsx)("h1",{className:"text-2xl font-bold",children:t}),Object(x.jsx)("span",{className:"ml-6 w-1/3 bg-gray-600 hidden md:block",style:{height:"1px"}})]})},L=function(e){var t={initial:{opacity:0},animate:{opacity:1}};return Object(x.jsxs)(T,{className:"justify-start lg:justify-center mt-24 lg:mt-0 mb-8 md:mb-0",children:[Object(x.jsx)(R,{title:"About",number:1}),Object(x.jsx)(m.a.h1,{variants:t,initial:"initial",animate:"animate",className:"text-3xl md:text-6xl font-semibold md:my-4",children:"Hello, Myself Shyam Makwana \ud83d\udc4b"}),Object(x.jsx)(m.a.h2,{variants:t,initial:"initial",animate:"animate",className:"text-2xl md:text-4xl font-bold my-2 md:my-4",style:{color:"var(--text-secondary)"},children:"Technology Enthusiast"}),Object(x.jsxs)(m.a.div,{variants:t,initial:"initial",animate:"animate",className:"my-2 md:my4 text-xl text-gray-300 text-justify",children:[Object(x.jsx)("p",{className:"my-4",children:"Howdy Pals, I am Shyam Makwana."}),Object(x.jsx)("p",{children:"Besides this I have also worked with Blockchain. Two things that attracts me a lot and I love exploring them are 3D and Databases. I love watching Talks about new technologies."})]}),Object(x.jsxs)("div",{className:"flex",children:[Object(x.jsx)("button",{onClick:function(){return e.history.push("/experience")},className:"mr-2 p-2 border-2 border-white text-white bg-none rounded-md transition-all duration-300 hover:bg-white hover:text-black",children:"Know More"}),Object(x.jsx)(y,{})]})]})},B=[{title:"Four Clowns, Ahmedabad",role:"Web Developer",duration:"May 2021 - July 2021",description:"\u2022 Worked with senior developers on development projects for the website throughout the various phases of the project life cycle.\n      Applied knowledge of Node Js, React Js, MongoDB, GraphQL, and Bootstrap in an ongoing project.\n      Suggested a new UI design for the website making it more user-friendly, and collaborated on finding and fixing bugs.",techs:["React JS","Node JS","Express JS","GraphQL","MongoDB","Bootstrap"]},{title:"Indian Space Research Organisation (ISRO)",role:"Research and Development Intern",duration:"Starting December 2021 - March 2022",description:"\u2022 Upcoming Research and Development Intern during the final semester of college.",techs:[]}],J=i(41),F=i.n(J),V=function(e){var t=e.text;return Object(x.jsx)("div",{className:F.a.Tag,children:t})},H=function(e){var t=e.item;return Object(x.jsxs)("div",{className:"my-4",children:[Object(x.jsx)("h1",{className:"text-2xl font-bold",children:t.title}),t.role&&Object(x.jsx)("p",{className:"text-lg text-gray-300",children:t.role}),t.duration&&Object(x.jsx)("i",{className:"text-gray-300 text-base",children:t.duration}),t.description&&Object(x.jsx)("p",{className:"mt-1 text-base",style:{color:"var(--text-secondary)"},children:t.description}),t.techs&&Object(x.jsx)("div",{className:"mt-1",children:t.techs.map((function(e){return Object(x.jsx)(V,{text:e},e)}))}),Object(x.jsxs)("div",{className:"flex",children:[t.github&&Object(x.jsx)("a",{href:t.github,target:"_blank",rel:"noreferrer",children:Object(x.jsx)(w.a,{size:24})}),t.link&&Object(x.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:Object(x.jsx)(w.b,{size:24,className:"mx-4"})})]})]})},W=function(e){var t=e.title,i=e.number,a=e.list;return Object(x.jsxs)(T,{className:"mt-24 overflow-scroll mb-10",children:[Object(x.jsx)(R,{title:t,number:i}),a.map((function(e,t){return Object(x.jsx)(H,{item:e},t)}))]})},G=function(){var e=Object(a.useMemo)((function(){return B}),[]);return Object(x.jsx)(W,{list:e,title:"Work Experience",number:"2"})},U=i(5),z=i(62),Q=function(){return Object(x.jsxs)("div",{className:"flex justify-center items-center mb-4",children:[Object(x.jsxs)("p",{className:"mx-4 font-bold text-gray-400",children:["\xa9 ",(new Date).getFullYear()]}),Object(x.jsx)("a",{className:" font-bold text-gray-400",href:"https://github.com/Shyam-Makwana",children:"Shyam Makwana"})]})},K=[{title:"Core",techs:["Competitive Programming","Artificial Intelligence","Machine Learning","Data Structure","Database"]},{title:"Languages",techs:["C","C++","Java","Python","C#","R","HTML","CSS","JavaScript","SQL","PL/SQL","Verilog","Prolog","Assembly Language"]},{title:"Frameworks & Libraries",techs:["React JS","Node JS","GraphQL","Angular JS","jQuery","Express JS","AJAX","Django","Bootstrap","Spring Boot","Spring MVC","JSP","Servlets",".Net","Hibernate"]},{title:"Tools",techs:["Linux","Windows","Visual Studio Code","Git","Github","Packet Tracer","Anaconda","MySQL","MongoDB","Netbeans","Eclipse","Prolog","PyCharm","PhpMyAdmin","DosBox"]},{title:"Database",techs:["MongoDB","OracleSQL","MySQL"]}],q=function(){var e=Object(a.useMemo)((function(){return K}),[]);return Object(x.jsx)(W,{list:e,title:"Tools and Technology",number:"3"})},Y=[{title:"Waste Food Management System",description:"MERN Stack Responsive Web Application with Google Map API for accurate address and SendGrid API for\n      sending emails developed to minimize food wastage & to deliver it to the needy ones from Functions, Hotels, or Restaurants.",techs:["React JS","Node JS","Rest API","MongoDB","Express JS","Bootstrap"],github:"https://github.com/Shyam-Makwana/Waste-Food-Management-System-MERN-Stack",link:"https://we-dont-waste-food.herokuapp.com/"},{title:"Crime Alert App",description:"It a Mobile application built with React Native and Node.js and MongoDB as Backend. The main goal of this application is that user can send crime alert to near by police station and their friends so that any need can be done for user at the time of crime. In this project I have also implemented Push Notification from Backend Server and also also interacted with gesture sensors so by using this sensors user can can shake the mobile to send alerts.",techs:["Node.js","React Native","MongoDB","Push Notifications","Gesture Sensors"],github:"https://github.com/MananDesai54/Crime-alert-app"},{title:"Buckiee - A Cloud Storage WebApp",description:"Buckiee is Cloud storage application like Google Drive. It is a PWA. This Project has many functionality such as Authentication with Email and Password, OAuth with Google and Facebook, User Email Verification, User Profile management, File Upload, Creating Folder structure for files, File Download etc. The project is built with Angular as Frontend and Node.js, Express.js and MongoDB as backend ans AWS S3 for storing File. UI of the project is mixture of UI of Discord and Google Drive.",techs:["Angular","Node.js","Express.js","MongoDB","AWS S3","OAuth","PWA"],github:"https://github.com/MananDesai54/Cloud-Storage",link:"https://cloud-storage-client-b121d.firebaseapp.com/"},{title:"Devagram - Instagram For Developers",description:"It is open source project in which I contributed. It is MERN stack web-app to connect developers with each other. In short it's INSTAGRAM for Developers. It has many functionality like instagram has.",techs:["TypeScript","React.js","Node.js","PostgreSQL","GraphQL","TailwindCSS","Storybook React"],github:"https://github.com/dkp1903/devagram",link:"https://app-devagram.web.app/"},{title:"Discord Bot",description:"It is multipurpose discord that can use in your discord server. It has functionalities like playing songs, getting memes and jokes etc. It is built with Node.js and Discord.js",techs:["Node.js","Discord.js"],github:"https://github.com/MananDesai54/Discord-bot"},{title:"E-Commerce website",description:"I created E-commerce clothing site with admin dashboard. I implemented it with the use of Django Framework of python with HTML, CSS and JavaScript.",techs:["Django","Python","JavaScript","CSS","HTML"],github:"https://github.com/MananDesai54/ClothesSite"}],Z=function(){var e=Object(a.useMemo)((function(){return Y}),[]);return Object(x.jsx)(W,{list:e,title:"Projects",number:"4"})},X=function(e){var t=e.edu;return Object(x.jsxs)("div",{className:"my-4",children:[Object(x.jsx)("h1",{className:"text-2xl font-bold",children:t.degree}),Object(x.jsx)("p",{className:"text-lg text-gray-300",children:t.title}),Object(x.jsx)("i",{className:"text-gray-300 text-base",children:t.year})]})},$=[{title:"Dharmsinh Desai University, Nadiad",degree:"Bachelor's in Engineering (Information Technology)",year:"July 2018 - May 2022"},{title:"Divine Buds English School, Ahmedabad",degree:"12th HSC - GSEB",year:"March 2018"},{title:"Divine Buds English School, Ahmedabad",degree:"10th SSC - GSEB",year:"March 2016"}],ee=i(42),te=i.n(ee),ie=function(){var e=Object(a.useMemo)((function(){return $}),[]);return Object(x.jsxs)(T,{className:["justify-center my-10 md:my-0 w-10/12 md:w-1/2",te.a.Edu].join(" "),children:[Object(x.jsx)(R,{title:"Education",number:5}),e.map((function(e,t){return Object(x.jsx)(X,{edu:e},t)}))]})},ae=function(){return Object(x.jsxs)("div",{className:"flex flex-col fixed bottom-0 -right-10 items-center overflow-visible",children:[Object(x.jsx)("a",{style:{transform:"rotateZ(90deg)",marginBottom:"100px"},href:"mailto:makwanashyam6@gmail.com",children:"makwanashyam6@gmail.com"}),Object(x.jsx)(S,{})]})},ne=function(e){var t=Object(U.f)();return Object(x.jsxs)("div",{className:[l.a.Home,"h-screen w-screen text-white"].join(" "),children:[Object(x.jsx)(I,{postView:e.postView}),Object(x.jsx)(z.a,{children:Object(x.jsxs)(U.c,{location:t,children:[Object(x.jsx)(U.a,{path:"/",exact:!0,component:L}),Object(x.jsx)(U.a,{path:"/experience",exact:!0,component:G}),Object(x.jsx)(U.a,{path:"/tech",exact:!0,component:q}),Object(x.jsx)(U.a,{path:"/project",exact:!0,component:Z}),Object(x.jsx)(U.a,{path:"/education",exact:!0,component:ie})]},t.key)}),Object(x.jsxs)("div",{className:" md:block hidden",children:[Object(x.jsx)(k,{}),Object(x.jsx)(ae,{})]}),Object(x.jsx)(Q,{})]})};var se=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),i=t[0],n=t[1];return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("seen"));e||localStorage.setItem("seen",JSON.stringify(!0)),fetch("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,"/views"),{method:"POST",headers:{"Content-Type":"application/json",Accepts:"application/json"},body:JSON.stringify({unique:!e})}).then((function(e){return e.json()})).then((function(){return console.log()})).catch((function(){return console.log()})).finally((function(){return n(!0)}))}),[]),Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(ne,{postView:i})})},ce=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,63)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;i(e),a(e),n(e),s(e),c(e)}))};c.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(b.a,{basename:"/",children:Object(x.jsx)(se,{})})}),document.getElementById("root")),ce()}},[[59,1,2]]]);
//# sourceMappingURL=main.fbf4812a.chunk.js.map