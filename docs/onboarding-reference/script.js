const GOALS=[["Muscle gain"],["Fat loss"],["Strength"],["Endurance"],["General fitness"]];
const EXP=[["Beginner","Less than 6 months"],["Intermediate","6 months to 2 years"],["Advanced","More than 2 years"]];
const EQUIP=[["🏢","Full gym"],["🏋️","Dumbbells"],["🔩","Barbell"],["🔔","Kettlebells"],["🎗️","Resistance bands"],["🧗","Pull-up bar"],["⚙️","Machines"],["🧘","Bodyweight only"]];
const DAYS=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
const DUR=["20–30 min","30–45 min","45–60 min","60+ min"];
const S={name:"",hear:"",adult:false,goal:null,exp:null,equip:[],units:"metric",height:"",weight:"",age:"",days:[],dur:null,plan:"free"};
try{const sv=JSON.parse(localStorage.getItem("ff_onb")||"null");if(sv&&sv.S)Object.assign(S,sv.S)}catch(e){}
let cur=0,touched=false;const N=7;
const $=s=>document.querySelector(s),main=$("#main");
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const R=()=>S.units==="metric"?{h:[100,250,"cm"],w:[30,300,"kg"]}:{h:[40,100,"in"],w:[66,660,"lb"]};
function bodyErr(){const r=R(),o={},h=+S.height,w=+S.weight,a=+S.age;
 if(S.height===""||!(h>=r.h[0]&&h<=r.h[1]))o.h=`Enter a height between ${r.h[0]} and ${r.h[1]} ${r.h[2]}`;
 if(S.weight===""||!(w>=r.w[0]&&w<=r.w[1]))o.w=`Enter a weight between ${r.w[0]} and ${r.w[1]} ${r.w[2]}`;
 if(S.age===""||!(Number.isInteger(a)&&a>=13&&a<=100))o.a="Enter an age from 13 to 100";return o}
const valid=i=>[S.adult,!!S.goal,!!S.exp,true,!Object.keys(bodyErr()).length,S.days.length>0&&!!S.dur,true][i];
const skippable=i=>i===3;

const split=(a,b,body,extra="")=>`<div class="wrap"><div class="split"><div><h1><span class="m">${a}</span><br>${b}</h1></div><div>${body}</div></div>${extra}</div>`;
const rows=(k,items,multi)=>`<div class="hint">${multi?"Select one or more":"Select one"}</div><div class="list">${items.map(it=>{const v=it[0],sel=multi?S[k].includes(v):S[k]===v;return `<button class="row ${sel?"sel":""}" data-k="${k}" data-v="${esc(v)}" data-m="${multi?1:0}"><span class="c">✓</span><span>${v}${it[1]?`<small>${it[1]}</small>`:""}</span></button>`}).join("")}</div>`;
const nav=(label="Continue")=>`<div class="acts"><button class="btn p" id="nx" ${valid(cur)?"":"disabled"}>${label}</button>${skippable(cur)?`<button class="btn" id="sk">Skip</button>`:""}</div>`;
const back=()=>cur>0?`<button class="back" id="bk" aria-label="Back">‹</button>`:"";

const views=[
()=>`<div style="max-width:420px;margin:0 auto"><h1>Welcome to FitForge</h1><p class="sub">A few quick questions to personalize your experience.</p>
<div class="fg"><label class="lbl" for="nm">What should we call you? <i>(optional)</i></label><div class="field"><input id="nm" data-f="name" value="${esc(S.name)}" maxlength="40" autocomplete="given-name"></div></div>
<div class="fg"><label class="lbl" for="hr">How did you hear about us? <i>(optional)</i></label><div class="field"><input id="hr" data-f="hear" value="${esc(S.hear)}" maxlength="80"></div></div>
<label class="chk"><input type="checkbox" id="ad" ${S.adult?"checked":""}><span>I confirm I am 18 years old, or the age of legal majority where I live.</span></label>
${nav("Next")}</div>`,
()=>split("Let’s tailor your plan.","What’s your main<br>fitness goal?",rows("goal",GOALS),nav()+back()),
()=>split("Let’s tailor your plan.","How much training<br>experience do you have?",rows("exp",EXP),nav()+back()),
()=>`<div class="wrap"><h1>What equipment do you have?</h1><p class="sub">Select all that apply. We’ll only suggest exercises you can do.</p><div class="g5">${EQUIP.map(e=>`<button class="tile ${S.equip.includes(e[1])?"sel":""}" data-k="equip" data-v="${e[1]}" data-m="1"><span>${e[0]}</span>${e[1]}</button>`).join("")}</div>
<div class="acts" style="justify-content:center"><button class="btn" id="bk">Back</button><button class="btn" id="sk">Skip</button>${S.equip.length?`<button class="btn p" id="nx">Continue</button>`:""}</div></div>`,
()=>{const r=R(),e=bodyErr(),t=touched;return `<div style="max-width:520px;margin:0 auto" class="wrap"><h1>About your body</h1><p class="sub">Used for calorie targets and progress tracking.</p>
<div class="chips" style="margin-bottom:20px"><button class="chip ${S.units==="metric"?"sel":""}" data-k="units" data-v="metric" data-m="0">Metric (cm, kg)</button><button class="chip ${S.units==="imperial"?"sel":""}" data-k="units" data-v="imperial" data-m="0">Imperial (in, lb)</button></div>
<div class="three"><div><label class="lbl" for="h">Height</label><div class="field"><input id="h" type="number" inputmode="decimal" data-f="height" data-e="h" value="${esc(S.height)}"><u>${r.h[2]}</u></div><div class="err" id="e-h">${t&&e.h||""}</div></div>
<div><label class="lbl" for="w">Weight</label><div class="field"><input id="w" type="number" inputmode="decimal" data-f="weight" data-e="w" value="${esc(S.weight)}"><u>${r.w[2]}</u></div><div class="err" id="e-w">${t&&e.w||""}</div></div>
<div><label class="lbl" for="a">Age</label><div class="field"><input id="a" type="number" inputmode="numeric" data-f="age" data-e="a" value="${esc(S.age)}"><u>yrs</u></div><div class="err" id="e-a">${t&&e.a||""}</div></div></div>
<div class="acts"><button class="btn" id="bk">Back</button><button class="btn p" id="nx" ${valid(4)?"":"disabled"}>Continue</button></div></div>`},
()=>`<div style="max-width:520px;margin:0 auto" class="wrap"><h1>Plan your week</h1><p class="sub">Choose your training days and session length.</p>
<span class="lbl">Training days</span><div class="chips" style="margin-bottom:22px">${DAYS.map(d=>`<button class="chip ${S.days.includes(d)?"sel":""}" data-k="days" data-v="${d}" data-m="1">${d}</button>`).join("")}</div>
<span class="lbl">Session length</span><div class="chips">${DUR.map(d=>`<button class="chip ${S.dur===d?"sel":""}" data-k="dur" data-v="${d}" data-m="0">${d}</button>`).join("")}</div>
<div class="acts"><button class="btn" id="bk">Back</button><button class="btn p" id="nx" ${valid(5)?"":"disabled"}>Continue</button></div></div>`,
()=>`<div class="wrap"><h1 class="center">Choose your plan</h1><p class="sub center">Start free and upgrade whenever you’re ready.</p>
<div class="plans">
<div class="pw"><button class="plan ${S.plan==="free"?"sel":""}" data-k="plan" data-v="free" data-m="0"><h3>Free</h3><div class="pr">$0<small>/month</small></div><p>Everything you need to start tracking.</p><ul><li>Workout &amp; nutrition tracking</li><li>Exercise library</li><li>Custom workouts</li><li class="no">Limited AI assistant</li><li class="no">PDF / CSV reports</li></ul></button></div>
<div class="pw pop"><div class="pt">★ Most popular</div><button class="plan ${S.plan==="premium"?"sel":""}" data-k="plan" data-v="premium" data-m="0"><h3>Premium</h3><div class="pr">Premium</div><p>Higher limits and advanced tools.</p><ul><li>Everything in Free</li><li>Higher AI assistant limits</li><li>Advanced analytics</li><li>PDF / CSV export</li><li>Priority support</li></ul></button></div></div>
<div class="acts" style="justify-content:center"><button class="btn" id="bk">Back</button><button class="btn p" id="nx">${S.plan==="premium"?"Continue with Premium":"Continue with Free"}</button></div>
<p class="note">Pricing and payment are not connected yet. Premium is only granted once confirmed by the backend.</p></div>`
];

function dots(){$("#dots").innerHTML=Array.from({length:N},(_,i)=>`<i class="${i===cur?"on":i<cur?"done":""}"></i>`).join("")}
function render(animate){
 dots();
 if(cur>=N){finish();return}
 main.innerHTML=`<div class="step ${animate?"anim":""}">${views[cur]()}</div>`;
 try{localStorage.setItem("ff_onb",JSON.stringify({S}))}catch(e){}
}
function finish(){
 main.innerHTML=`<div class="step anim center"><div class="spin"></div><h1>Setting up your account…</h1><p class="sub">Saving your preferences.</p></div>`;
 setTimeout(()=>{
  const sm=[S.goal,S.exp,S.days.length+" days/week",S.dur,S.plan==="premium"?"Premium":"Free"].filter(Boolean);
  main.innerHTML=`<div class="step anim center"><h1>${S.name?`You’re all set, ${esc(S.name)}`:"You’re all set"}</h1><p class="sub">Your profile is saved and your first plan is ready.</p><div class="sum">${sm.map(x=>`<span>${esc(x)}</span>`).join("")}</div><button class="btn p" id="go">Go to dashboard</button></div>`;
 },1400);
}
const go=n=>{cur=n;touched=false;render(true)};
main.addEventListener("click",e=>{
 const b=e.target.closest("[data-k]");
 if(b){const k=b.dataset.k,v=b.dataset.v;
  if(b.dataset.m==="1"){const a=S[k],i=a.indexOf(v);i>-1?a.splice(i,1):a.push(v)}
  else if(k==="units"){if(S.units!==v){S.units=v;S.height=S.weight="";render(false)}return}
  else S[k]=v;
  render(false);return}
 if(e.target.closest("#nx")){if(cur===4&&!valid(4)){touched=true;render(false);return}go(cur+1);return}
 if(e.target.closest("#sk")){go(cur+1);return}
 if(e.target.closest("#bk")){go(cur-1);return}
 const g=e.target.closest("#go");
 if(g){window.dispatchEvent(new CustomEvent("onboarding:complete",{detail:S}));try{localStorage.removeItem("ff_onb")}catch(x){}g.textContent="Redirecting…";g.disabled=true}
});
main.addEventListener("input",e=>{
 const t=e.target;
 if(t.id==="ad"){S.adult=t.checked;$("#nx").disabled=!valid(0);return}
 const f=t.dataset.f;if(!f)return;S[f]=t.value;
 if(cur===4){const x=bodyErr();$("#nx").disabled=!!Object.keys(x).length;const id=t.dataset.e;if(touched||x[id]===undefined)$("#e-"+id).textContent=x[id]||""}
});
main.addEventListener("focusout",e=>{const id=e.target.dataset&&e.target.dataset.e;if(id&&e.target.value!==""){const x=bodyErr();$("#e-"+id).textContent=x[id]||""}});
document.addEventListener("keydown",e=>{if(e.key==="Enter"&&cur<N&&e.target.tagName!=="BUTTON"){const n=$("#nx");if(n&&!n.disabled)n.click()}});
function theme(t){document.documentElement.setAttribute("data-theme",t);$("#tl").classList.toggle("on",t==="light");$("#td").classList.toggle("on",t==="dark");try{localStorage.setItem("ff_theme",t)}catch(e){}}
let t0="dark";try{t0=localStorage.getItem("ff_theme")||"dark"}catch(e){}
$("#tl").onclick=()=>theme("light");$("#td").onclick=()=>theme("dark");theme(t0);
render(true);
