import{_ as s,a as r,b as c,c as d,d as p,e as h,f as m}from"./vercel-9-b06cd63a.js";import{_ as u,W as _,X as g,a2 as y,$ as e,a0 as t,Y as o,Z as b,a1 as i,E as a}from"./framework-ecf98296.js";const f="/hope/comment/assets/leancloud-app-1-70204db2.jpg",v="/hope/comment/assets/leancloud-app-2-dfc19ef7.jpg",w="/hope/comment/assets/image/vercel-2.png",k={},A=e("p",null,"Welcome to Waline. In just a few steps, you can enable Waline to provide comments and page views on your site.",-1),x=e("h2",{id:"leancloud-settings-database",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#leancloud-settings-database","aria-hidden":"true"},"#"),t(" LeanCloud Settings (Database)")],-1),C={href:"https://console.leancloud.app/login",target:"_blank",rel:"noopener noreferrer"},E={href:"https://console.leancloud.app/register",target:"_blank",rel:"noopener noreferrer"},N={href:"https://console.leancloud.app/apps",target:"_blank",rel:"noopener noreferrer"},L={href:"https://console.leancloud.app/apps",target:"_blank",rel:"noopener noreferrer"},T=e("p",null,[e("img",{src:f,alt:"Create App"})],-1),I=i('<li><p>Enter the app, then select <code>Settings</code> &gt; <code>App Keys</code> at the left bottom corner. You will see <code>APP ID</code>, <code>APP Key</code> and <code>Master Key</code> of your app. We will use them later</p><p><img src="'+v+'" alt="ID and Key"></p></li>',1),S=e("h2",{id:"deploy-to-vercel-server",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#deploy-to-vercel-server","aria-hidden":"true"},"#"),t(" Deploy to Vercel (Server)")],-1),V={href:"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample",target:"_blank",rel:"noopener noreferrer"},D=e("img",{src:"https://vercel.com/button",alt:"Vercel"},null,-1),K=i('<ol><li><p>Click the blue button above, it will redirect you to vercel to deploy with waline template.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>If you haven’t logged in, we recommend you to sign in with GitHub.</p></div></li><li><p>Input your Vercel project name then click <code>Create</code>.</p><p><img src="'+w+'" alt="skip team"></p></li><li><p>Repo which named you input before will be created and initialized automatically base on waline example template by Vercel.</p><p><img src="'+s+'" alt="deploy"></p><p>After one minute or two, vercel should finish the deployment. Click <code>Go to Dashboard</code> button to redirect to your application dashboard.</p><p><img src="'+r+'" alt="deploy"></p></li><li><p>Click <code>Settings</code> menu on the top, and <code>Environment Variables</code> button on the side to go to environment variables setting page. Then set <code>LEAN_ID</code>, <code>LEAN_KEY</code> and <code>LEAN_MASTER_KEY</code>. The variables’ value should be the ones you got in the previous step. <code>APP ID</code> is the value of <code>LEAN_ID</code>, and <code>APP Key</code> to <code>LEAN_KEY</code>, <code>Master Key</code> to <code>LEAN_MASTER_KEY</code>.</p><p><img src="'+c+'" alt="set environment variables"></p></li><li><p>To let your environment variables setting active, you need redeploy your application. Click <code>Deployments</code> menu on the top and find the latest deployment at the top of list, click <code>Redeploy</code> button in the right dropdown menu.</p><p><img src="'+d+'" alt="redeploy"></p></li><li><p>If everything is ok, vercel will redirect to <code>Overview</code> page to start redeployment. Wait a moment the <code>STATUS</code> will change to <code>Ready</code>. Now you can click <code>Visit</code> to visit the site. This link is your server address.</p><p><img src="'+p+'" alt="redeploy success"></p></li></ol><h2 id="assign-domain-optional" tabindex="-1"><a class="header-anchor" href="#assign-domain-optional" aria-hidden="true">#</a> Assign Domain (Optional)</h2><ol><li><p>Click <code>Settings</code> - <code>Domains</code> to go to domain setting page.</p></li><li><p>Input domain you want to assign and click <code>Add</code> button.</p><p><img src="'+h+'" alt="Add domain"></p></li><li><p>Add a new <code>CNAME</code> record in your domain service server.</p><table><thead><tr><th>Type</th><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>CNAME</td><td>example</td><td>cname.vercel-dns.com</td></tr></tbody></table></li><li><p>You can use your own domain to visit waline comment system after go into effect. 🎉</p><ul><li>serverURL：example.your-domain.com</li><li>admin panel：example.your-domain.com/ui</li></ul><p><img src="'+m+'" alt="success"></p></li></ol><h2 id="client" tabindex="-1"><a class="header-anchor" href="#client" aria-hidden="true">#</a> Client</h2><h3 id="using-plugin" tabindex="-1"><a class="header-anchor" href="#using-plugin" aria-hidden="true">#</a> Using plugin</h3><p>Set <code>provider: &quot;Waline&quot;</code> in the plugin options, and set <code>serverURL</code> as the link obtained in the previous step.</p><p>Then, place the <code>&lt;CommentService&gt;</code> component at a suitable location in your site (usually at the bottom of the page), you will be able to see the comment box.</p>',7),R={class:"hint-container tip"},W=e("p",{class:"hint-container-title"},"Tips",-1),Y=e("p",null,[t("You can also pass in other options supported by Waline (except "),e("code",null,"el"),t(").")],-1),F=e("h2",{id:"comment-management-management",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#comment-management-management","aria-hidden":"true"},"#"),t(" Comment Management (Management)")],-1),M=e("ol",null,[e("li",null,[t("After the deployment is complete, please visit "),e("code",null,"<serverURL>/ui/register"),t(" to register. The first person to register will be set as an administrator.")]),e("li",null,"After you log in as administrator, you can see the comment management interface. You can edit, mark or delete comments here."),e("li",null,"Users can also register their account through comment box, and they will be redirected to their profile page after logging in.")],-1);function P(U,j){const n=a("ExternalLinkIcon"),l=a("RouterLink");return _(),g("div",null,[A,y(" more "),x,e("ol",null,[e("li",null,[e("p",null,[e("a",C,[t("sign in"),o(n)]),t(" or "),e("a",E,[t("sign up"),o(n)]),t(" LeanCloud and enter "),e("a",N,[t("Console"),o(n)]),t(".")])]),e("li",null,[e("p",null,[t("Click "),e("a",L,[t("Create app"),o(n)]),t(" button to create a new app and enter a name you like:")]),T]),I]),S,e("p",null,[e("a",V,[D,o(n)])]),K,e("div",R,[W,Y,e("p",null,[t("For details, see "),o(l,{to:"/config/waline.html"},{default:b(()=>[t("Waline Config")]),_:1})])]),F,M])}const G=u(k,[["render",P],["__file","waline.html.vue"]]);export{G as default};
