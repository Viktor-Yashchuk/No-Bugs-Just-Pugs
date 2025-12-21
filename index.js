import{i as Y,a as I,S as E,b as Z,N as G,P as Q,K as ee,A as ge,R as ve,M as fe}from"./assets/vendor-6LYjMKHJ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const c={successList:document.querySelector(".success-list"),successBtnForward:document.querySelector(".success-button-forward"),successBtnBack:document.querySelector(".success-button-back"),successAnimation:document.querySelector(".ajax-loader"),ctgsList:document.querySelector(".pets-ctgs-list"),petsList:document.querySelector(".pets-list"),petsLoadBtn:document.querySelector(".pets-load-btn"),petsLoader:document.querySelector(".pets-loader"),petsPagination:document.querySelector(".pets-pagination")},he=document.querySelector(".burger-btn"),x=document.querySelector(".mobile-menu");document.querySelector(".mobile-menu-btn");document.querySelector(".mobile-menu-container");const ye=document.querySelectorAll(".mobile-menu-nav-link, .mobile-menu-button"),te=document.querySelector(".mobile-burger-menu-top-line"),se=document.querySelector(".mobile-burger-menu-mid-line"),ae=document.querySelector(".mobile-burger-menu-bot-line"),we=document.querySelector(".header"),oe=e=>{e.key==="Escape"&&B()},Le=()=>{te.classList.toggle("top-line"),se.classList.toggle("mid-line"),ae.classList.toggle("bot-line")},ke=()=>{te.classList.remove("top-line"),se.classList.remove("mid-line"),ae.classList.remove("bot-line")},Se=()=>{document.body.style.overflow="hidden",document.addEventListener("keydown",oe),x.classList.toggle("is-open"),x.className!=="mobile-menu is-open"&&(document.body.style.overflow=""),Le()},B=()=>{document.body.style.overflow="",x.classList.remove("is-open"),document.removeEventListener("keydown",oe),ke()},Ee=e=>{e.target.closest(".mobile-menu-btn, .mobile-menu-nav-link, .mobile-menu-button")||B()},xe=e=>{e.target.closest(".header-logo, .burger-btn")||B()};he.addEventListener("click",Se);we.addEventListener("click",xe);x.addEventListener("click",Ee);ye.forEach(e=>{e.addEventListener("click",B)});window.addEventListener("resize",()=>{innerWidth>=1440&&(document.body.style.overflow="",x.classList.remove("is-open"),B())});const m="/project-10/",ie=()=>window.innerWidth<768?"mobile":window.innerWidth<1440?"tablet":"desktop",ne=()=>q==="mobile"||q==="tablet"?8:9;let $,r=1,k,q=ie(),w=ne();const C=()=>q==="mobile",re=e=>Y.show({message:`Error: ${e}`,position:"topRight",color:"red",close:!1});function N(){const e=Math.ceil(k/w);if(e<=1)return;let s="";if(s+=`<li>
      <button class="pagination-btn-arrow" data-action="prev" aria-label="Попередня сторінка" ${r===1?"disabled":""}><svg class="arrow-icon" width="24" height="24">
          <use href="${m}sprite.svg#icon-arrow-back"></use>
        </svg>
      </button>
    </li>`,r===1){for(let t=1;t<=Math.min(3,e);t++)s+=L(t);e>3&&(s+='<li class="dots">…</li>',s+=L(e))}else if(r===e){s+=L(1),e>3&&(s+='<li class="dots">…</li>');for(let t=e-2;t<=e;t++)t>1&&(s+=L(t))}else{s+=L(1),r>3&&(s+='<li class="dots">…</li>');for(let t=r-1;t<=r+1;t+=1)t>1&&t<e&&(s+=L(t));r<e-2&&(s+='<li class="dots">…</li>'),e>1&&(s+=L(e))}s+=`<li>
      <button class="pagination-btn-arrow" data-action="next" aria-label="Наступна сторінка" ${r===e?"disabled":""}> <svg class="arrow-icon" width="24" height="24">
          <use href="${m}sprite.svg#icon-arrow-forward"></use>
        </svg>
      </button>
    </li>`,c.petsPagination.style.display="flex",c.petsPagination.innerHTML=s}function L(e){return`
    <li>
      <button
        class="pagination-btn ${r===e?"active":""}"
        aria-label="Сторінка ${e}"
        data-page="${e}">
        ${e}
      </button>
    </li>
  `}const $e=async e=>{const s=e.target.closest("button");if(!s)return;const t=Math.ceil(k/w);s.dataset.action==="prev"&&r>1&&(r-=1),s.dataset.action==="next"&&r<t&&(r+=1),s.dataset.page&&(r=+s.dataset.page);const i=c.petsList.getBoundingClientRect().top+window.pageYOffset-200;window.scrollTo({top:i,behavior:"smooth"}),H(),await M(r,$),N()};c.petsPagination.addEventListener("click",$e);const qe=async()=>await I("https://paw-hut.b.goit.study/api/categories"),Ce=e=>{e.unshift({name:"Всі"});const s=["Всі","Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"];return e.sort((t,i)=>s.indexOf(t.name)-s.indexOf(i.name)),e.map(t=>`<li class="pets-ctgs-item"><button class="pets-ctgs-btn" aria-pressed="false" data-id="${t._id}" type="button">${t.name}</button></li>`).join("")},Be=async()=>{try{const e=await qe();c.ctgsList.innerHTML=Ce(e.data);const s=document.querySelector(".pets-ctgs-btn");s.classList.add("active"),s.dataset.id="all",s.setAttribute("aria-pressed","true")}catch(e){re(e.message)}},Me=async(e,s)=>{const t={page:e,limit:w};return s&&(t.categoryId=s),await I("https://paw-hut.b.goit.study/api/animals",{params:t})},_=e=>e.map(s=>`<li class="pets-item" role="listitem" data-id="${s._id}" data-description="${s.description||""}" data-health="${s.healthStatus||""}" data-behavior="${s.behavior||""}">
    <img class="pets-img" src="${s.image}" alt="${s.species}" loading="lazy" decoding="async">
    <p class="pets-species">${s.species}</p>
    <h3 class="pets-name">${s.name}</h3>
    <ul class="pets-own-ctgs-list">${s.categories.map(t=>`<li class="pets-own-ctgs-item"><p>${t.name}</p></li>`).join("")}</ul>
    <ul class="pets-info">
    <li><p>${s.age}</p></li>
    <li><p>${s.gender}</p></li>
    </ul>
    <p class="pets-short-desc">${s.shortDescription}</p>
    <button class="pets-modal-btn" type="button">Дізнатись більше</button>
</li>`).join(""),M=async(e,s)=>{try{Te();const t=await Me(e,s);Oe(),C()?c.petsList.insertAdjacentHTML("beforeend",_(t.data.animals)):c.petsList.innerHTML=_(t.data.animals),k=t.data.totalItems,c.petsList.querySelectorAll(".pets-item").forEach((o,n)=>{const l=t.data.animals[n];l&&(o.dataset.description=l.description||"",o.dataset.health=l.healthStatus||"",o.dataset.behavior=l.behavior||"")})}catch(t){re(t.message)}},ce=()=>c.petsList.innerHTML="",Pe=e=>{document.querySelectorAll(".pets-ctgs-btn").forEach(t=>{t.classList.remove("active"),t.setAttribute("aria-pressed","false")}),e.classList.add("active"),e.setAttribute("aria-pressed","true")},Ae=async e=>{e.target.nodeName==="BUTTON"&&(F(),H(),Pe(e.target),$=e.target.dataset.id==="all"?void 0:e.target.dataset.id,r=1,ce(),await M(r,$),C()&&k>w?z():C()||N())};c.ctgsList.addEventListener("click",Ae);const Xe=async()=>{r++,await M(r,$),r*w>=k&&F()};c.petsLoadBtn.addEventListener("click",Xe);const F=()=>{c.petsLoadBtn.style.display="none"},z=()=>{c.petsLoadBtn.style.display="block"},Oe=()=>{c.petsLoader.style.display="none"},Te=()=>{c.petsLoader.style.display="block"},H=()=>{c.petsPagination.style.display="none"},De=()=>{const e=ie();e!==q&&(ce(),F(),H(),q=e,w=ne(),r=1,M(r,$),e==="mobile"&&r*w<k?z():e!=="mobile"&&N())};window.addEventListener("resize",De);const Ie=async()=>{await Be(),await M(r),C()&&k>w?z():C()||N()};Ie();function Ne(){return`
    <div class="order-modal-overlay" data-order-modal-backdrop>
      <div class="order-modal container" role="dialog" aria-modal="true" aria-labelledby="order-modal-title">
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
              maxlength="300"
              autocomplete="off"
            ></textarea>
            <span id="comment-error" class="error-message"></span>
            <span id="comment-counter" class="counter"></span>
          </label>
          <button class="order-modal-send-button" type="submit">Надіслати заявку</button>
        </form>
      </div>
    </div>`}function je(e){const s=Ne();document.body.insertAdjacentHTML("beforeend",s),document.body.classList.add("body-lock");const t=document.querySelector("[data-order-modal-backdrop]"),i=t.querySelector("[data-order-modal-close]"),o=t.querySelector("[data-order-modal-form]"),n=t.querySelector("#username"),l=/[^a-zA-Z\u0400-\u04FF\s'’`-]/g;function d(a){return a.replace(l,"").replace(/\s+/g," ").replace(/-+/g,"-").trim()}n.addEventListener("input",a=>{const u=a.target,h=u.value,b=u.selectionStart,S=d(h);if(S===h)return;u.value=S;const A=h.length-S.length,y=Math.max(0,b-A);u.setSelectionRange(y,y)}),n.addEventListener("paste",a=>{a.preventDefault();const u=(a.clipboardData||window.clipboardData).getData("text"),h=d(u),b=a.target,S=b.selectionStart,A=b.selectionEnd,y=b.value.slice(0,S),X=b.value.slice(A);b.value=d(y+h+X);const v=(y+h).length;b.setSelectionRange(v,v)}),n.addEventListener("blur",a=>{a.target.value=d(a.target.value)});const p=t.querySelector("#phone");p.addEventListener("focus",()=>{p.value.trim()===""&&(p.value="+38 (0")}),p.addEventListener("input",()=>{let a=p.value.replace(/\D/g,"");a.startsWith("380")||(a.startsWith("0")?a="380"+a.slice(1):a.startsWith("3")?a=a:a.length>0&&(a="380"+a));let u="+38 (0";a.length>3&&(u+=a.substring(3,5)),a.length>5&&(u+=") "+a.substring(5,8)),a.length>8&&(u+=" "+a.substring(8,10)),a.length>10&&(u+=" "+a.substring(10,12)),p.value=u});function pe(a){return a.replace(/\D/g,"").slice(0,12)}const g=t.querySelector("#message"),P=t.querySelector("#comment-error"),be=t.querySelector("#comment-counter");function j(){const a=g.value.trim().length;be.textContent=`${a}/300`,a===0?(P.textContent="",g.classList.remove("invalid")):a<5?(P.textContent="Коментар має бути не менше 5 символів",g.classList.add("invalid")):a>300?(P.textContent="Коментар має бути не більше 300 символів",g.classList.add("invalid")):(P.textContent="",g.classList.remove("invalid"))}g.addEventListener("input",j),g.addEventListener("blur",j);const R=t.querySelectorAll(".order-modal-input, .order-modal-input-textarea");R.forEach(a=>{a.addEventListener("input",()=>{a.value=a.value.trim(),a.validity.valueMissing||a.validity.patternMismatch||a.validity.tooShort||a.validity.tooLong?a.classList.add("invalid"):a.classList.remove("invalid")}),a.addEventListener("blur",()=>{a.validity.valueMissing||a.validity.patternMismatch||a.validity.tooShort||a.validity.tooLong?a.classList.add("invalid"):a.classList.remove("invalid")})}),i.addEventListener("click",()=>O(t)),t.addEventListener("click",a=>{a.target===t&&O(t)}),window.addEventListener("keydown",a=>{a.key==="Escape"&&O(t)}),o.addEventListener("submit",async a=>{a.preventDefault(),R.forEach(v=>v.dispatchEvent(new Event("blur")));const u=d(n.value),h=(u.match(/[a-zA-Z\u0400-\u04FF]/g)||[]).length>=2;if(!u||!h){E.fire({icon:"warning",title:"Перевірте ім’я",text:"Ім’я має містити щонайменше 2 літери.",background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)"}),n.focus();return}const b=pe(p.value);if(!/^380\d{9}$/.test(b)){E.fire({icon:"warning",title:"Перевірте телефон",text:"Формат телефону має бути 380XXXXXXXXX",background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)"}),p.focus();return}if(g.value.trim(),j(),g.classList.contains("invalid")){g.focus();return}if(!o.checkValidity()){E.fire({icon:"warning",title:"Перевірте форму",text:"Будь ласка, заповніть усі поля правильно.",background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)"});return}const y=(new FormData(o).get("message")||"").trim(),X={name:u,phone:b,animalId:e};y!==""&&(X.comment=y);try{const v=await fetch("https://paw-hut.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(X)}),W=await v.json().catch(()=>null);if(!v.ok)throw new Error((W==null?void 0:W.message)||"Помилка відправки заявки");E.fire({icon:"success",title:`Вітаємо, ${u}! Заявку надіслано!😻Ваш пухнастик буде скоро з вами.`,html:`
    <div class="dog-container">
      <div class="dog">
        <div class="dog-head">
          <div class="dog-ears ears-left"></div>
          <div class="dog-ears ears-right"></div>
          <div class="dog-eyes"></div>
          <div class="dog-mouth">
            <div class="dog-nose"></div>
            <div class="dog-tongue"></div>
          </div>
        </div>
        <div class="dog-tail"></div>
        <div class="dog-body">
          <div class="dog-foot"></div>
        </div>
        <a href="https://github.com/Viktor-Yashchuk/project-10" 
                target="_blank"
                rel="noopener noreferrer"
                class="ball" 
                style="cursor: pointer; text-decoration: none;">
            No Bugs Just Pugs</a>
		   </div>
      </div> `,background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)",showClass:{popup:"animate__animated animate__bounceIn"},hideClass:{popup:"animate__animated animate__fadeOutUp"}}),O(t)}catch(v){E.fire({icon:"error",title:"Помилка",text:v.message,background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)"})}})}function O(e){const s=e.querySelector("[data-order-modal-form]");s&&s.reset(),e.remove(),document.body.classList.remove("body-lock")}function We(e){return`
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
    </div>`}function le(e){const s=We(e);document.body.insertAdjacentHTML("beforeend",s),window.innerWidth-document.documentElement.clientWidth,document.body.classList.add("body-lock");const t=document.querySelector("[data-details-modal-backdrop]"),i=t.querySelector("[data-details-modal-close]"),o=t.querySelector("[data-details-modal-adopt]");i.addEventListener("click",()=>T(t)),t.addEventListener("click",l=>{l.target===t&&T(t)});function n(l){l.key==="Escape"&&(T(t),window.removeEventListener("keydown",n))}window.addEventListener("keydown",n),o.addEventListener("click",()=>{T(t),je(e.id)})}function T(e){e.remove(),document.body.classList.remove("body-lock")}c.petsList.addEventListener("click",e=>{var o,n,l,d,p;const s=e.target.closest(".pets-modal-btn");if(!s)return;const t=s.closest(".pets-item"),i={id:t.dataset.id,image:((o=t.querySelector(".pets-img"))==null?void 0:o.src)||"",species:((n=t.querySelector(".pets-species"))==null?void 0:n.textContent)||"",name:((l=t.querySelector(".pets-name"))==null?void 0:l.textContent)||"",age:((d=t.querySelector(".pets-info p:nth-child(1)"))==null?void 0:d.textContent)||"",gender:((p=t.querySelector(".pets-info p:nth-child(2)"))==null?void 0:p.textContent)||"",description:t.dataset.description||"",health:t.dataset.health||"",behavior:t.dataset.behavior||""};le(i)});c.petsList.addEventListener("keydown",e=>{var t,i,o,n,l;const s=e.target.closest(".pets-modal-btn");if(s&&(e.key==="Enter"||e.key===" ")){e.preventDefault();const d=s.closest(".pets-item"),p={id:d.dataset.id,image:((t=d.querySelector(".pets-img"))==null?void 0:t.src)||"",species:((i=d.querySelector(".pets-species"))==null?void 0:i.textContent)||"",name:((o=d.querySelector(".pets-name"))==null?void 0:o.textContent)||"",age:((n=d.querySelector(".pets-info p:nth-child(1)"))==null?void 0:n.textContent)||"",gender:((l=d.querySelector(".pets-info p:nth-child(2)"))==null?void 0:l.textContent)||"",description:d.dataset.description||"",health:d.dataset.health||"",behavior:d.dataset.behavior||""};le(p)}});const V=document.querySelector(".about-swiper-button-next"),K=document.querySelector(".about-swiper-button-prev"),Fe=[{id:1,description:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,description:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,description:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,description:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,description:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],ze=Fe.map(({id:e,description:s})=>`<div class="swiper-slide about-slide">
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
              alt="slide" loading="lazy" decoding="async"/>
          </picture>
          <div class="about-overlay">
          <p class="about-id">${s}</p>
          </div>
        </div>`).join("");document.querySelector(".about-swiper-wrapper").innerHTML=ze;const f=new Z(".about-mySwiper",{modules:[G,Q,ee],loop:!1,slidesPerView:1,spaceBetween:10,keyboard:{enabled:!0},pagination:{el:".about .swiper-pagination",clickable:!0},navigation:{nextEl:".about-swiper-button-next",prevEl:".about-swiper-button-prev"}});function de(){const e=document.querySelector(".about .swiper-pagination");window.innerWidth<768?(e.classList.remove("center"),e.classList.add("left")):(e.classList.remove("left"),e.classList.add("center"))}de();window.addEventListener("resize",de);const ue=()=>{f.isEnd?V.classList.add("about-btn-disabled"):V.classList.remove("about-btn-disabled"),f.isBeginning?K.classList.add("about-btn-disabled"):K.classList.remove("about-btn-disabled")};f.on("slideChange",ue);ue();const me=document.querySelector(".about");f.on("slideChangeTransitionStart",()=>{me&&(document.querySelectorAll(".about-id").forEach(e=>e.classList.remove("show")),document.querySelectorAll(".about-overlay").forEach(e=>e.classList.remove("fade-out")))});f.on("slideChangeTransitionEnd",()=>{const e=f.slides[f.activeIndex],s=e.querySelector(".about-id");s&&s.classList.add("show");const t=e.querySelector(".about-overlay");t&&t.classList.add("fade-out")});const He=new IntersectionObserver(e=>{e.forEach(s=>{if(s.isIntersecting){const t=f.slides[f.activeIndex],i=t.querySelector(".about-id"),o=t.querySelector(".about-overlay");i&&(i.classList.remove("show"),i.offsetWidth,i.classList.add("show")),o&&(o.classList.remove("fade-out"),o.offsetWidth,o.classList.add("fade-out"))}})},{threshold:.7});He.observe(me);document.addEventListener("DOMContentLoaded",()=>{new ge(".accordion-container",{duration:250,showMultiple:!1,collapse:!0,ariaEnabled:!0})});document.addEventListener("click",e=>{const s=e.target.closest(".ac-trigger");s&&setTimeout(()=>{window.innerWidth<375&&s.scrollIntoView({behavior:"smooth",block:"start"})},450)});const Re=document.querySelector(".faq-ajax-loader"),U=30;for(let e=0;e<U;e++){const s=document.createElement("div");s.classList.add("paw"),s.style.animationDelay=`${(U-e)*.25+5}s`;const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.classList.add("icon");const i=document.createElementNS("http://www.w3.org/2000/svg","use");i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#paw"),t.appendChild(i),s.appendChild(t),Re.appendChild(s)}I.defaults.baseURL="https://paw-hut.b.goit.study";const _e=async()=>(await I.get("/api/feedbacks",{params:{limit:25,page:18}})).data;document.addEventListener("DOMContentLoaded",Ve);async function Ve(){try{const e=await _e();Ke(e.feedbacks),document.querySelectorAll(".rating").forEach(s=>{const t=s.dataset.score;new ve(s,{score:t,number:5,readOnly:!0,half:!0,starType:"img",starOn:`${m}icons/filled.svg`,starOff:`${m}icons/outline.svg`,starHalf:`${m}icons/half.svg`}).init()})}catch{Y.error({message:"Error",position:"center"})}}const Ke=e=>{const s=e.map(t=>`<li class="swiper-slide success-item">
            <div class="success-text-box">
                <div class="success-rate-star-box rating" data-score="${t.rate}"></div>
                <p class="success-item-desc">${t.description}</p>
            </div>
            <p class="success-item-author">${t.author}</p>
        </li>`).join("");c.successList.innerHTML=s},D=new Z(".success-swiper",{modules:[G,Q,ee,fe],spaceBetween:32,slidesPerView:1,loop:!1,wrapperClass:"success-list",slideClass:"success-item",keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0},pagination:{el:".success-swiper-pagination",type:"bullets",clickable:!0,dynamicBullets:!0,dynamicMainBullets:4},navigation:{nextEl:".success-button-forward",prevEl:".success-button-back",disabledClass:".success-btn-disabled"},breakpoints:{767:{slidesPerView:2,pagination:{dynamicBullets:!0,dynamicMainBullets:1}}}});D.on("slideChange",()=>{D.isEnd?c.successBtnForward.classList.add("success-btn-disabled"):c.successBtnForward.classList.remove("success-btn-disabled")});D.on("slideChange",()=>{D.isBeginning?c.successBtnBack.classList.add("success-btn-disabled"):c.successBtnBack.classList.remove("success-btn-disabled")});const Ue=c.successAnimation,J=30;for(let e=0;e<J;e++){const s=document.createElement("div");s.classList.add("paw"),s.style.animationDelay=`${(J-e)*.25}s`;const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.classList.add("icon");const i=document.createElementNS("http://www.w3.org/2000/svg","use");i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#paw"),t.appendChild(i),s.appendChild(t),Ue.appendChild(s)}
//# sourceMappingURL=index.js.map
