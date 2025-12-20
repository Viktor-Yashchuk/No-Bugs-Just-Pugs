import{i as U,a as I,S as k,b as Z,N as J,P as Y,K as G,A as me,R as pe,M as be}from"./assets/vendor-6LYjMKHJ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();const l={successList:document.querySelector(".success-list"),successBtnForward:document.querySelector(".success-button-forward"),successBtnBack:document.querySelector(".success-button-back"),successAnimation:document.querySelector(".ajax-loader"),ctgsList:document.querySelector(".pets-ctgs-list"),petsList:document.querySelector(".pets-list"),petsLoadBtn:document.querySelector(".pets-load-btn"),petsLoader:document.querySelector(".pets-loader"),petsPagination:document.querySelector(".pets-pagination")},ge=document.querySelector(".burger-btn"),$=document.querySelector(".mobile-menu");document.querySelector(".mobile-menu-btn");document.querySelector(".mobile-menu-container");const fe=document.querySelectorAll(".mobile-menu-nav-link, .mobile-menu-button"),Q=document.querySelector(".mobile-burger-menu-top-line"),ee=document.querySelector(".mobile-burger-menu-mid-line"),te=document.querySelector(".mobile-burger-menu-bot-line"),he=document.querySelector(".header"),se=e=>{e.key==="Escape"&&C()},ve=()=>{Q.classList.toggle("top-line"),ee.classList.toggle("mid-line"),te.classList.toggle("bot-line")},ye=()=>{Q.classList.remove("top-line"),ee.classList.remove("mid-line"),te.classList.remove("bot-line")},we=()=>{document.body.style.overflow="hidden",document.addEventListener("keydown",se),$.classList.toggle("is-open"),$.className!=="mobile-menu is-open"&&(document.body.style.overflow=""),ve()},C=()=>{document.body.style.overflow="",$.classList.remove("is-open"),document.removeEventListener("keydown",se),ye()},Le=e=>{e.target.closest(".mobile-menu-btn, .mobile-menu-nav-link, .mobile-menu-button")||C()},Se=e=>{e.target.closest(".header-logo, .burger-btn")||C()};ge.addEventListener("click",we);he.addEventListener("click",Se);$.addEventListener("click",Le);fe.forEach(e=>{e.addEventListener("click",C)});window.addEventListener("resize",()=>{innerWidth>=1440&&(document.body.style.overflow="",$.classList.remove("is-open"),C())});const m="/project-10/",ae=()=>window.innerWidth<768?"mobile":window.innerWidth<1440?"tablet":"desktop",oe=()=>M==="mobile"||M==="tablet"?8:9;let q,r=1,x,M=ae(),w=oe();const B=()=>M==="mobile",ie=e=>U.show({message:`Error: ${e}`,position:"topRight",color:"red",close:!1});function D(){const e=Math.ceil(x/w);if(e<=1)return;let s="";if(s+=`<li>
      <button class="pagination-btn-arrow" data-action="prev" aria-label="Попередня сторінка" ${r===1?"disabled":""}><svg class="arrow-icon" width="24" height="24">
          <use href="${m}sprite.svg#icon-arrow-back"></use>
        </svg>
      </button>
    </li>`,r===1){for(let t=1;t<=Math.min(3,e);t++)s+=E(t);e>3&&(s+='<li class="dots">…</li>',s+=E(e))}else if(r===e){s+=E(1),e>3&&(s+='<li class="dots">…</li>');for(let t=e-2;t<=e;t++)t>1&&(s+=E(t))}else{s+=E(1),r>3&&(s+='<li class="dots">…</li>');for(let t=r-1;t<=r+1;t+=1)t>1&&t<e&&(s+=E(t));r<e-2&&(s+='<li class="dots">…</li>'),e>1&&(s+=E(e))}s+=`<li>
      <button class="pagination-btn-arrow" data-action="next" aria-label="Наступна сторінка" ${r===e?"disabled":""}> <svg class="arrow-icon" width="24" height="24">
          <use href="${m}sprite.svg#icon-arrow-forward"></use>
        </svg>
      </button>
    </li>`,l.petsPagination.style.display="flex",l.petsPagination.innerHTML=s}function E(e){return`
    <li>
      <button
        class="pagination-btn ${r===e?"active":""}"
        aria-label="Сторінка ${e}"
        data-page="${e}">
        ${e}
      </button>
    </li>
  `}const ke=async e=>{const s=e.target.closest("button");if(!s)return;const t=Math.ceil(x/w);s.dataset.action==="prev"&&r>1&&(r-=1),s.dataset.action==="next"&&r<t&&(r+=1),s.dataset.page&&(r=+s.dataset.page);const n=l.petsList.getBoundingClientRect().top+window.pageYOffset-200;window.scrollTo({top:n,behavior:"smooth"}),N(),await P(r,q),D()};l.petsPagination.addEventListener("click",ke);const Ee=async()=>await I("https://paw-hut.b.goit.study/api/categories"),xe=e=>{e.unshift({name:"Всі"});const s=["Всі","Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"];return e.sort((t,n)=>s.indexOf(t.name)-s.indexOf(n.name)),e.map(t=>`<li class="pets-ctgs-item"><button class="pets-ctgs-btn" aria-pressed="false" data-id="${t._id}" type="button">${t.name}</button></li>`).join("")},$e=async()=>{try{const e=await Ee();l.ctgsList.innerHTML=xe(e.data);const s=document.querySelector(".pets-ctgs-btn");s.classList.add("active"),s.dataset.id="all",s.setAttribute("aria-pressed","true")}catch(e){ie(e.message)}},qe=async(e,s)=>{const t={page:e,limit:w};return s&&(t.categoryId=s),await I("https://paw-hut.b.goit.study/api/animals",{params:t})},R=e=>e.map(s=>`<li class="pets-item" role="listitem" data-id="${s._id}" data-description="${s.description||""}" data-health="${s.healthStatus||""}" data-behavior="${s.behavior||""}">
    <img class="pets-img" src="${s.image}" alt="${s.species}">
    <p class="pets-species">${s.species}</p>
    <h3 class="pets-name">${s.name}</h3>
    <ul class="pets-own-ctgs-list">${s.categories.map(t=>`<li class="pets-own-ctgs-item"><p>${t.name}</p></li>`).join("")}</ul>
    <ul class="pets-info">
    <li><p>${s.age}</p></li>
    <li><p>${s.gender}</p></li>
    </ul>
    <p class="pets-short-desc">${s.shortDescription}</p>
    <button class="pets-modal-btn" type="submit">Дізнатись більше</button>
</li>`).join(""),P=async(e,s)=>{try{Ae();const t=await qe(e,s);Pe(),B()?l.petsList.insertAdjacentHTML("beforeend",R(t.data.animals)):l.petsList.innerHTML=R(t.data.animals),x=t.data.totalItems,l.petsList.querySelectorAll(".pets-item").forEach((o,i)=>{const c=t.data.animals[i];c&&(o.dataset.description=c.description||"",o.dataset.health=c.healthStatus||"",o.dataset.behavior=c.behavior||"")})}catch(t){ie(t.message)}},ne=()=>l.petsList.innerHTML="",Me=e=>{document.querySelectorAll(".pets-ctgs-btn").forEach(t=>{t.classList.remove("active"),t.setAttribute("aria-pressed","false")}),e.classList.add("active"),e.setAttribute("aria-pressed","true")},Be=async e=>{e.target.nodeName==="BUTTON"&&(j(),N(),Me(e.target),q=e.target.dataset.id==="all"?void 0:e.target.dataset.id,r=1,ne(),await P(r,q),B()&&x>w?H():B()||D())};l.ctgsList.addEventListener("click",Be);const Ce=async()=>{r++,await P(r,q),r*w>=x&&j()};l.petsLoadBtn.addEventListener("click",Ce);const j=()=>{l.petsLoadBtn.style.display="none"},H=()=>{l.petsLoadBtn.style.display="block"},Pe=()=>{l.petsLoader.style.display="none"},Ae=()=>{l.petsLoader.style.display="block"},N=()=>{l.petsPagination.style.display="none"},Xe=()=>{const e=ae();e!==M&&(ne(),j(),N(),M=e,w=oe(),r=1,P(r,q),e==="mobile"&&r*w<x?H():e!=="mobile"&&D())};window.addEventListener("resize",Xe);const Oe=async()=>{await $e(),await P(r),B()&&x>w?H():B()||D()};Oe();function Te(){return`
    <div class="order-modal-overlay" data-order-modal-backdrop>
      <div class="order-modal" role="dialog" aria-modal="true" aria-labelledby="order-modal-title">
        <button class="order-modal-close-btn" type="button" aria-label="Закрити" data-order-modal-close>
          <svg class="icon-close" width="14" height="14">
            <use href="${m}sprite.svg#icon-close2"></use>
          </svg>
        </button>

        <h2 id="order-modal-title" class="order-modal-title">Залишіть заявку на знайомство</h2>

        <form class="order-modal-form" novalidate method="post" data-order-modal-form>
          <label class="order-modal-label" for="username">
            Ім’я*
            <input
              class="order-modal-input"
              type="text"
              id="username"
              name="username"
              placeholder="Ваше Ім'я"
              required
              minlength="2"
              maxlength="30"
              autocomplete="off"
            />
            <span class="error-message">Ім’я має містити лише літери, пробіли, апострофи та дефіси.</span>
          </label>

          <label class="order-modal-label" for="phone">
            Телефон*
            <input
              class="order-modal-input"
              type="tel"
              id="phone"
              name="phone"
              placeholder="+38 (0XX) XXX XX XX"
              required
              maxlength="19"
              inputmode="numeric"
              autocomplete="off"
              aria-describedby="phone-error"
            />
            <span id="phone-error" class="error-message">Формат: +38 (0XX) XXX XX XX</span>
          </label>

          <label class="order-modal-label" for="message">
            Коментар
            <textarea
              class="order-modal-input-textarea"
              name="message"
              id="message"
              placeholder="Напишіть ваш коментар"
              minlength="5"
              maxlength="300"
              autocomplete="off"
            ></textarea>
            <span id="comment-error" class="error-message">Коментар має бути від 5 до 300 символів.</span>
          </label>

          <button class="order-modal-send-button" type="submit">Надіслати заявку</button>
        </form>
      </div>
    </div>`}function Ie(e){const s=Te();document.body.insertAdjacentHTML("beforeend",s),document.body.classList.add("body-lock");const t=document.querySelector("[data-order-modal-backdrop]"),n=t.querySelector("[data-order-modal-close]"),o=t.querySelector("[data-order-modal-form]"),i=t.querySelector("#username"),c=/[^a-zA-Z\u0400-\u04FF\s'’`-]/g;function u(a){return a.replace(c,"").replace(/\s+/g," ").replace(/-+/g,"-").trim()}i.addEventListener("input",a=>{const d=a.target,y=d.value,p=d.selectionStart,f=u(y);if(f===y)return;d.value=f;const L=y.length-f.length,S=Math.max(0,p-L);d.setSelectionRange(S,S)}),i.addEventListener("paste",a=>{a.preventDefault();const d=(a.clipboardData||window.clipboardData).getData("text"),y=u(d),p=a.target,f=p.selectionStart,L=p.selectionEnd,S=p.value.slice(0,f),W=p.value.slice(L);p.value=u(S+y+W);const h=(S+y).length;p.setSelectionRange(h,h)}),i.addEventListener("blur",a=>{a.target.value=u(a.target.value)});const b=t.querySelector("#phone");b.addEventListener("input",()=>{let a=b.value.replace(/\D/g,"");a.startsWith("380")||(a.startsWith("0")?a="380"+a.slice(1):a.startsWith("3")?a=a:a.length>0&&(a="380"+a));let d="";a.length>0&&(d="+38"),a.length>2&&(d+=" (0"),a.length>3&&(d+=a.substring(3,5)),a.length>5&&(d+=") "+a.substring(5,8)),a.length>8&&(d+=" "+a.substring(8,10)),a.length>10&&(d+=" "+a.substring(10,12)),b.value=d});function ue(a){return a.replace(/\D/g,"").slice(0,12)}const g=t.querySelector("#message"),A=t.querySelector("#comment-error");g.addEventListener("input",()=>{const a=g.value.trim().length;a===0?(A.textContent="Коментар не може бути порожнім",g.classList.add("invalid")):a<5?(A.textContent=`Коментар має бути не менше 5 символів. Зараз ви ввели ${a}.`,g.classList.add("invalid")):a>300?(A.textContent="Коментар має бути не більше 300 символів",g.classList.add("invalid")):(A.textContent="",g.classList.remove("invalid"))}),g.addEventListener("blur",()=>{g.value.trim().length<5?g.classList.add("invalid"):g.classList.remove("invalid")});const z=t.querySelectorAll(".order-modal-input, .order-modal-input-textarea");z.forEach(a=>{a.addEventListener("input",()=>{a.value=a.value.trim(),a.validity.valueMissing||a.validity.patternMismatch||a.validity.tooShort||a.validity.tooLong?a.classList.add("invalid"):a.classList.remove("invalid")}),a.addEventListener("blur",()=>{a.validity.valueMissing||a.validity.patternMismatch||a.validity.tooShort||a.validity.tooLong?a.classList.add("invalid"):a.classList.remove("invalid")})}),n.addEventListener("click",()=>X(t)),t.addEventListener("click",a=>{a.target===t&&X(t)}),window.addEventListener("keydown",a=>{a.key==="Escape"&&X(t)}),o.addEventListener("submit",async a=>{a.preventDefault(),z.forEach(h=>h.dispatchEvent(new Event("blur")));const d=u(i.value),y=(d.match(/[a-zA-Z\u0400-\u04FF]/g)||[]).length>=2;if(!d||!y){k.fire({icon:"warning",title:"Перевірте ім’я",text:"Ім’я має містити щонайменше 2 літери."}),i.focus();return}const p=ue(b.value);if(!/^380\d{9}$/.test(p)){k.fire({icon:"warning",title:"Перевірте телефон",text:"Формат телефону має бути 380XXXXXXXXX"}),b.focus();return}const f=t.querySelector("#message"),L=f.value.trim();if(L.length===0){k.fire({icon:"warning",title:"Перевірте коментар",text:"Коментар не може бути порожнім."}),f.focus();return}if(L.length<5){k.fire({icon:"warning",title:"Перевірте коментар",text:`Коментар має бути не менше 5 символів. Зараз ви ввели ${L.length}.`}),f.focus();return}if(!o.checkValidity()){k.fire({icon:"warning",title:"Перевірте форму",text:"Будь ласка, заповніть усі поля правильно."});return}const S=new FormData(o),W={name:d,phone:p,comment:S.get("message").trim(),animalId:e};try{const h=await fetch("https://paw-hut.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(W)}),F=await h.json().catch(()=>null);if(!h.ok)throw new Error((F==null?void 0:F.message)||"Помилка відправки заявки");k.fire({icon:"success",title:"Вітаємо! Заявку надіслано!",text:"Ваш пухнастик буде скоро з вами.😻",background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)"}),X(t)}catch(h){k.fire({icon:"error",title:"Помилка",text:h.message})}})}function X(e){const s=e.querySelector("[data-order-modal-form]");s&&s.reset(),e.remove(),document.body.classList.remove("body-lock")}function De(e){return`
    <div class="details-modal-backdrop" data-details-modal-backdrop>
      <div class="details-modal" role="dialog" aria-modal="true" aria-labelledby="details-modal-title" aria-describedby="details-modal-description">
        <button class="details-modal-close" type="button" aria-label="Закрити" data-details-modal-close>
        <svg class="details-modal-close-icon" width="14" height="14">
        <use href="${m}sprite.svg#icon-close2"></use></svg></button>
        <div class="details-modal-body">
          <div class="details-modal-left">
            <img class="details-modal-img" src="${e.image}" alt="${e.species}" />
          </div>
          <div class="details-modal-right">
            <p class="details-modal-species">${e.species}</p>
            <h3 id="details-modal-title" class="details-modal-name">${e.name}</h3>
            <div class="details-modal-info">
              <p>${e.age}</p>
              <p>${e.gender}</p>
            </div>

            <h4 class="details-modal-subtitle">Опис:</h4>
            <p id="details-modal-description" class="details-modal-description">${e.description||"—"}</p>

            <h4 class="details-modal-subtitle">Здоровʼя:</h4>
            <p class="details-modal-health">${e.health||"—"}</p>

            <h4 class="details-modal-subtitle">Поведінка:</h4>
            <p class="details-modal-behavior">${e.behavior||"—"}</p>

            <button class="details-modal-adopt-btn" type="button" data-details-modal-adopt>Взяти додому</button>
          </div>
        </div>
      </div>
    </div>`}function re(e){const s=De(e);document.body.insertAdjacentHTML("beforeend",s),window.innerWidth-document.documentElement.clientWidth,document.body.classList.add("body-lock");const t=document.querySelector("[data-details-modal-backdrop]"),n=t.querySelector("[data-details-modal-close]"),o=t.querySelector("[data-details-modal-adopt]");n.addEventListener("click",()=>O(t)),t.addEventListener("click",c=>{c.target===t&&O(t)});function i(c){c.key==="Escape"&&(O(t),window.removeEventListener("keydown",i))}window.addEventListener("keydown",i),o.addEventListener("click",()=>{O(t),Ie(e.id)})}function O(e){e.remove(),document.body.classList.remove("body-lock")}l.petsList.addEventListener("click",e=>{var o,i,c,u,b;const s=e.target.closest(".pets-modal-btn");if(!s)return;const t=s.closest(".pets-item"),n={id:t.dataset.id,image:((o=t.querySelector(".pets-img"))==null?void 0:o.src)||"",species:((i=t.querySelector(".pets-species"))==null?void 0:i.textContent)||"",name:((c=t.querySelector(".pets-name"))==null?void 0:c.textContent)||"",age:((u=t.querySelector(".pets-info p:nth-child(1)"))==null?void 0:u.textContent)||"",gender:((b=t.querySelector(".pets-info p:nth-child(2)"))==null?void 0:b.textContent)||"",description:t.dataset.description||"",health:t.dataset.health||"",behavior:t.dataset.behavior||""};re(n)});l.petsList.addEventListener("keydown",e=>{var t,n,o,i,c;const s=e.target.closest(".pets-modal-btn");if(s&&(e.key==="Enter"||e.key===" ")){e.preventDefault();const u=s.closest(".pets-item"),b={id:u.dataset.id,image:((t=u.querySelector(".pets-img"))==null?void 0:t.src)||"",species:((n=u.querySelector(".pets-species"))==null?void 0:n.textContent)||"",name:((o=u.querySelector(".pets-name"))==null?void 0:o.textContent)||"",age:((i=u.querySelector(".pets-info p:nth-child(1)"))==null?void 0:i.textContent)||"",gender:((c=u.querySelector(".pets-info p:nth-child(2)"))==null?void 0:c.textContent)||"",description:u.dataset.description||"",health:u.dataset.health||"",behavior:u.dataset.behavior||""};re(b)}});const V=document.querySelector(".about-swiper-button-next"),K=document.querySelector(".about-swiper-button-prev"),We=[{id:1,description:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,description:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,description:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,description:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,description:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],Fe=We.map(({id:e,description:s})=>`<div class="swiper-slide about-slide">
          <picture>
            <source
              media="(min-width: 1440px)"
              srcset="${m}about-us/desktop/slide-p${e}-desk.webp 1x, ${m}about-us/desktop/slide-p${e}-desk@2x.webp 2x">
            <source
              media="(min-width: 768px)"
              srcset="${m}about-us/tablet/slide-p${e}-tab.webp 1x, ${m}about-us/tablet/slide-p${e}-tab@2x.webp 2x">
            <source
              media="(max-width: 767px)"
              srcset="${m}about-us/mobile/slide-p${e}-mob.webp 1x, ${m}about-us/mobile/slide-p${e}-mob@2x.webp 2x">
            <img 
              class="about-picture"
              src="${m}about-us/mobile/slide-p${e}-mob.webp"
              alt="slide"/>
          </picture>
          <div class="about-overlay">
          <p class="about-id">${s}</p>
          </div>
        </div>`).join("");document.querySelector(".about-swiper-wrapper").innerHTML=Fe;const v=new Z(".about-mySwiper",{modules:[J,Y,G],loop:!1,slidesPerView:1,spaceBetween:10,keyboard:{enabled:!0},pagination:{el:".about .swiper-pagination",clickable:!0},navigation:{nextEl:".about-swiper-button-next",prevEl:".about-swiper-button-prev"}});function le(){const e=document.querySelector(".about .swiper-pagination");window.innerWidth<768?(e.classList.remove("center"),e.classList.add("left")):(e.classList.remove("left"),e.classList.add("center"))}le();window.addEventListener("resize",le);const ce=()=>{v.isEnd?V.classList.add("about-btn-disabled"):V.classList.remove("about-btn-disabled"),v.isBeginning?K.classList.add("about-btn-disabled"):K.classList.remove("about-btn-disabled")};v.on("slideChange",ce);ce();const de=document.querySelector(".about");v.on("slideChangeTransitionStart",()=>{de&&(document.querySelectorAll(".about-id").forEach(e=>e.classList.remove("show")),document.querySelectorAll(".about-overlay").forEach(e=>e.classList.remove("fade-out")))});v.on("slideChangeTransitionEnd",()=>{const e=v.slides[v.activeIndex],s=e.querySelector(".about-id");s&&s.classList.add("show");const t=e.querySelector(".about-overlay");t&&t.classList.add("fade-out")});const je=new IntersectionObserver(e=>{e.forEach(s=>{if(s.isIntersecting){const t=v.slides[v.activeIndex],n=t.querySelector(".about-id"),o=t.querySelector(".about-overlay");n&&(n.classList.remove("show"),n.offsetWidth,n.classList.add("show")),o&&(o.classList.remove("fade-out"),o.offsetWidth,o.classList.add("fade-out"))}})},{threshold:.7});je.observe(de);document.addEventListener("DOMContentLoaded",()=>{new me(".accordion-container",{duration:250,showMultiple:!1,collapse:!0,ariaEnabled:!0})});document.addEventListener("click",e=>{const s=e.target.closest(".ac-trigger");s&&setTimeout(()=>{window.innerWidth<375&&s.scrollIntoView({behavior:"smooth",block:"start"})},450)});I.defaults.baseURL="https://paw-hut.b.goit.study";const He=async()=>(await I.get("/api/feedbacks",{params:{limit:25,page:18}})).data;document.addEventListener("DOMContentLoaded",Ne);async function Ne(){try{const e=await He();ze(e.feedbacks),document.querySelectorAll(".rating").forEach(s=>{const t=s.dataset.score;new pe(s,{score:t,number:5,readOnly:!0,half:!0,starType:"img",starOn:`${m}icons/filled.svg`,starOff:`${m}icons/outline.svg`,starHalf:`${m}icons/half.svg`}).init()})}catch{U.error({message:"Error",position:"center"})}}const ze=e=>{const s=e.map(t=>`<li class="swiper-slide success-item">
            <div class="success-text-box">
                <div class="success-rate-star-box rating" data-score="${t.rate}"></div>
                <p class="success-item-desc">${t.description}</p>
            </div>
            <p class="success-item-author">${t.author}</p>
        </li>`).join("");l.successList.innerHTML=s},T=new Z(".success-swiper",{modules:[J,Y,G,be],spaceBetween:32,slidesPerView:1,loop:!1,wrapperClass:"success-list",slideClass:"success-item",keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0},pagination:{el:".success-swiper-pagination",type:"bullets",clickable:!0,dynamicBullets:!0,dynamicMainBullets:4},navigation:{nextEl:".success-button-forward",prevEl:".success-button-back",disabledClass:".success-btn-disabled"},breakpoints:{767:{slidesPerView:2,pagination:{dynamicBullets:!0,dynamicMainBullets:1}}}});T.on("slideChange",()=>{T.isEnd?l.successBtnForward.classList.add("success-btn-disabled"):l.successBtnForward.classList.remove("success-btn-disabled")});T.on("slideChange",()=>{T.isBeginning?l.successBtnBack.classList.add("success-btn-disabled"):l.successBtnBack.classList.remove("success-btn-disabled")});const Re=l.successAnimation,_=30;for(let e=0;e<_;e++){const s=document.createElement("div");s.classList.add("paw"),s.style.animationDelay=`${(_-e)*.25}s`;const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.classList.add("icon");const n=document.createElementNS("http://www.w3.org/2000/svg","use");n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#paw"),t.appendChild(n),s.appendChild(t),Re.appendChild(s)}
//# sourceMappingURL=index.js.map
