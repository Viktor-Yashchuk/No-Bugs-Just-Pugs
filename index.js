import{i as Z,a as D,S as q,b as G,N as Q,P as me,K as ee,A as pe,R as be,M as ge}from"./assets/vendor-BG3zRxPs.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();const o={successList:document.querySelector(".success-list"),successBtnForward:document.querySelector(".success-button-forward"),successBtnBack:document.querySelector(".success-button-back"),successAnimation:document.querySelector(".ajax-loader"),successPagination:document.querySelector(".success-pagination"),ctgsList:document.querySelector(".pets-ctgs-list"),petsList:document.querySelector(".pets-list"),petsLoadBtn:document.querySelector(".pets-load-btn"),petsLoader:document.querySelector(".pets-loader"),petsPagination:document.querySelector(".pets-pagination"),faqListEl:document.querySelector("#faqList"),aboutSection:document.querySelector(".about"),aboutBtnForward:document.querySelector(".about-swiper-button-next"),aboutBtnBack:document.querySelector(".about-swiper-button-prev"),aboutSwiperWrapper:document.querySelector(".about-swiper-wrapper"),aboutPaginationElem:document.querySelector(".about .swiper-pagination"),header:document.querySelector(".header"),headerBurgerBtn:document.querySelector(".burger-btn"),headerMobileMenu:document.querySelector(".mobile-menu"),headerMobileLinks:document.querySelectorAll(".mobile-menu-nav-link, .mobile-menu-button"),headerBurgerTopLine:document.querySelector(".mobile-burger-menu-top-line"),headerBurgerMidLine:document.querySelector(".mobile-burger-menu-mid-line"),headerBurgerBotLine:document.querySelector(".mobile-burger-menu-bot-line")},te=e=>{e.key==="Escape"&&M()},fe=()=>{o.headerBurgerTopLine.classList.toggle("top-line"),o.headerBurgerMidLine.classList.toggle("mid-line"),o.headerBurgerBotLine.classList.toggle("bot-line")},he=()=>{o.headerBurgerTopLine.classList.remove("top-line"),o.headerBurgerMidLine.classList.remove("mid-line"),o.headerBurgerBotLine.classList.remove("bot-line")},ve=()=>{document.body.style.overflow="hidden",document.addEventListener("keydown",te),o.headerMobileMenu.classList.toggle("is-open"),o.headerMobileMenu.className!=="mobile-menu is-open"&&(document.body.style.overflow=""),fe()},M=()=>{document.body.style.overflow="",o.headerMobileMenu.classList.remove("is-open"),document.removeEventListener("keydown",te),he()},ye=e=>{e.target.closest(".mobile-menu-btn, .mobile-menu-nav-link, .mobile-menu-button")||M()},we=e=>{e.target.closest(".header-logo, .burger-btn")||M()};o.headerBurgerBtn.addEventListener("click",ve);o.header.addEventListener("click",we);o.headerMobileMenu.addEventListener("click",ye);o.headerMobileLinks.forEach(e=>{e.addEventListener("click",M)});window.addEventListener("resize",()=>{innerWidth>=1440&&(document.body.style.overflow="",o.headerMobileMenu.classList.remove("is-open"),M())});const W=document.querySelectorAll(".header-nav-link"),Le=document.querySelectorAll(".footer-nav-list a"),ke=document.querySelectorAll("section[id]");let z=null,$=!1;const H=()=>{W.forEach(e=>{e.classList.remove("is-active","is-inactive")}),z=null};window.addEventListener("scroll",()=>{window.scrollY===0&&(H(),$=!1)});const se=e=>{H(),z=e,e.classList.add("is-active")},ae=e=>{$=!0;const s=e.getAttribute("href").slice(1),t=document.querySelector(`.header-nav-link[href="#${s}"]`);t&&(se(t),W.forEach(i=>{i!==t&&i.classList.add("is-inactive")}));const n=document.getElementById(s);n&&n.scrollIntoView({behavior:"smooth"})};W.forEach(e=>{e.addEventListener("click",s=>{s.preventDefault(),ae(e)})});Le.forEach(e=>{e.addEventListener("click",s=>{s.preventDefault(),ae(e)})});const Se=new IntersectionObserver(e=>{e.forEach(s=>{if(!s.isIntersecting)return;const t=s.target.id,n=document.querySelector(`.header-nav-link[href="#${t}"]`);if(!n){H(),$=!1;return}if(!$){se(n);return}n===z&&(W.forEach(i=>i.classList.remove("is-inactive")),$=!1)})},{threshold:.3});ke.forEach(e=>Se.observe(e));const p="/project-10/",oe=()=>window.innerWidth<768?"mobile":window.innerWidth<1440?"tablet":"desktop",ie=()=>x==="mobile"||x==="tablet"?8:9;let B,c=1,k,x=oe(),w=ie();const C=()=>x==="mobile",ne=e=>Z.error({title:"",message:`Помилка бекенду від "GoIt": 
    ${e}`,position:"topRight",iconUrl:`${p}public/error.svg`,messageColor:"#fafafb",messageSize:"16",titleWeight:"700",backgroundColor:"#ef4040",progressBarColor:"#b51b1b",timeout:3e3,maxWidth:432,theme:"dark",close:!0,class:"my-toast"});function j(){const e=Math.ceil(k/w);if(e<=1)return;let s="";if(s+=`<li>
      <button class="pagination-btn-arrow" data-action="prev" aria-label="Попередня сторінка" ${c===1?"disabled":""}><svg class="arrow-icon" width="24" height="24">
          <use href="${p}sprite.svg#icon-arrow-back"></use>
        </svg>
      </button>
    </li>`,c===1){for(let t=1;t<=Math.min(3,e);t++)s+=L(t);e>3&&(s+='<li class="dots">…</li>',s+=L(e))}else if(c===e){s+=L(1),e>3&&(s+='<li class="dots">…</li>');for(let t=e-2;t<=e;t++)t>1&&(s+=L(t))}else{s+=L(1),c>3&&(s+='<li class="dots">…</li>');for(let t=c-1;t<=c+1;t+=1)t>1&&t<e&&(s+=L(t));c<e-2&&(s+='<li class="dots">…</li>'),e>1&&(s+=L(e))}s+=`<li>
      <button class="pagination-btn-arrow" data-action="next" aria-label="Наступна сторінка" ${c===e?"disabled":""}> <svg class="arrow-icon" width="24" height="24">
          <use href="${p}sprite.svg#icon-arrow-forward"></use>
        </svg>
      </button>
    </li>`,o.petsPagination.style.display="flex",o.petsPagination.innerHTML=s}function L(e){return`
    <li>
      <button
        class="pagination-btn ${c===e?"active":""}"
        aria-label="Сторінка ${e}"
        data-page="${e}">
        ${e}
      </button>
    </li>
  `}const Ee=async e=>{const s=e.target.closest("button");if(!s)return;const t=Math.ceil(k/w);s.dataset.action==="prev"&&c>1&&(c-=1),s.dataset.action==="next"&&c<t&&(c+=1),s.dataset.page&&(c=+s.dataset.page);const n=o.petsList.getBoundingClientRect().top+window.pageYOffset-200;window.scrollTo({top:n,behavior:"smooth"}),V(),await P(c,B),j()};o.petsPagination.addEventListener("click",Ee);const qe=async()=>await D("https://paw-hut.b.goit.study/api/categories"),$e=e=>{e.unshift({name:"Всі"});const s=["Всі","Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"];return e.sort((t,n)=>s.indexOf(t.name)-s.indexOf(n.name)),e.map(t=>`<li class="pets-ctgs-item"><button class="pets-ctgs-btn" aria-pressed="false" data-id="${t._id}" type="button">${t.name}</button></li>`).join("")},Be=async()=>{try{const e=await qe();o.ctgsList.innerHTML=$e(e.data);const s=document.querySelector(".pets-ctgs-btn");s.classList.add("active"),s.dataset.id="all",s.setAttribute("aria-pressed","true")}catch(e){ne(e.message)}},xe=async(e,s)=>{const t={page:e,limit:w};return s&&(t.categoryId=s),await D("https://paw-hut.b.goit.study/api/animals",{params:t})},K=e=>e.map(s=>`<li class="pets-item" role="listitem" data-id="${s._id}" data-description="${s.description||""}" data-health="${s.healthStatus||""}" data-behavior="${s.behavior||""}">
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
</li>`).join(""),P=async(e,s)=>{try{Xe();const t=await xe(e,s);Ae(),C()?o.petsList.insertAdjacentHTML("beforeend",K(t.data.animals)):o.petsList.innerHTML=K(t.data.animals),k=t.data.totalItems,o.petsList.querySelectorAll(".pets-item").forEach((i,l)=>{const u=t.data.animals[l];u&&(i.dataset.description=u.description||"",i.dataset.health=u.healthStatus||"",i.dataset.behavior=u.behavior||"")})}catch(t){ne(t.message)}},re=()=>o.petsList.innerHTML="",Ce=e=>{document.querySelectorAll(".pets-ctgs-btn").forEach(t=>{t.classList.remove("active"),t.setAttribute("aria-pressed","false")}),e.classList.add("active"),e.setAttribute("aria-pressed","true")},Me=async e=>{e.target.nodeName==="BUTTON"&&(R(),V(),Ce(e.target),B=e.target.dataset.id==="all"?void 0:e.target.dataset.id,c=1,re(),await P(c,B),C()&&k>w?_():C()||j())};o.ctgsList.addEventListener("click",Me);const Pe=async()=>{c++,await P(c,B),c*w>=k&&R()};o.petsLoadBtn.addEventListener("click",Pe);const R=()=>{o.petsLoadBtn.style.display="none"},_=()=>{o.petsLoadBtn.style.display="block"},Ae=()=>{o.petsLoader.style.display="none"},Xe=()=>{o.petsLoader.style.display="block"},V=()=>{o.petsPagination.style.display="none"},Ie=()=>{const e=oe();e!==x&&(re(),R(),V(),x=e,w=ie(),c=1,P(c,B),e==="mobile"&&c*w<k?_():e!=="mobile"&&j())};window.addEventListener("resize",Ie);const Te=async()=>{await Be(),await P(c),C()&&k>w?_():C()||j()};Te();function Oe(){return`
    <div class="order-modal-overlay" data-order-modal-backdrop>
      <div class="order-modal container" role="dialog" aria-modal="true" aria-labelledby="order-modal-title">
        <button class="order-modal-close-btn" type="button" aria-label="Закрити" data-order-modal-close>
          <svg class="icon-close" width="14" height="14">
            <use href="${p}sprite.svg#icon-close2"></use>
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
    </div>`}function De(e){const s=Oe();document.body.insertAdjacentHTML("beforeend",s),document.body.classList.add("body-lock");const t=document.querySelector("[data-order-modal-backdrop]"),n=t.querySelector("[data-order-modal-close]"),i=t.querySelector("[data-order-modal-form]"),l=t.querySelector("#username"),u=/[^a-zA-Z\u0400-\u04FF\s'’`-]/g;function r(a){return a.replace(u,"").replace(/\s+/g," ").replace(/-+/g,"-").trim()}l.addEventListener("input",a=>{const m=a.target,v=m.value,g=m.selectionStart,E=r(v);if(E===v)return;m.value=E;const X=v.length-E.length,y=Math.max(0,g-X);m.setSelectionRange(y,y)}),l.addEventListener("paste",a=>{a.preventDefault();const m=(a.clipboardData||window.clipboardData).getData("text"),v=r(m),g=a.target,E=g.selectionStart,X=g.selectionEnd,y=g.value.slice(0,E),I=g.value.slice(X);g.value=r(y+v+I);const f=(y+v).length;g.setSelectionRange(f,f)}),l.addEventListener("blur",a=>{a.target.value=r(a.target.value)});const d=t.querySelector("#phone");d.addEventListener("focus",()=>{d.value.trim()===""&&(d.value="+38 (0")}),d.addEventListener("input",()=>{let a=d.value.replace(/\D/g,"");a.startsWith("380")||(a.startsWith("0")?a="380"+a.slice(1):a.startsWith("3")?a=a:a.length>0&&(a="380"+a));let m="+38 (0";a.length>3&&(m+=a.substring(3,5)),a.length>5&&(m+=") "+a.substring(5,8)),a.length>8&&(m+=" "+a.substring(8,10)),a.length>10&&(m+=" "+a.substring(10,12)),d.value=m});function S(a){return a.replace(/\D/g,"").slice(0,12)}const b=t.querySelector("#message"),A=t.querySelector("#comment-error"),ue=t.querySelector("#comment-counter");function F(){const a=b.value.trim().length;ue.textContent=`${a}/300`,a===0?(A.textContent="",b.classList.remove("invalid")):a<5?(A.textContent="Коментар має бути не менше 5 символів",b.classList.add("invalid")):a>300?(A.textContent="Коментар має бути не більше 300 символів",b.classList.add("invalid")):(A.textContent="",b.classList.remove("invalid"))}b.addEventListener("input",F),b.addEventListener("blur",F);const U=t.querySelectorAll(".order-modal-input, .order-modal-input-textarea");U.forEach(a=>{a.addEventListener("input",()=>{a.value=a.value.trim(),a.validity.valueMissing||a.validity.patternMismatch||a.validity.tooShort||a.validity.tooLong?a.classList.add("invalid"):a.classList.remove("invalid")}),a.addEventListener("blur",()=>{a.validity.valueMissing||a.validity.patternMismatch||a.validity.tooShort||a.validity.tooLong?a.classList.add("invalid"):a.classList.remove("invalid")})}),n.addEventListener("click",()=>T(t)),t.addEventListener("click",a=>{a.target===t&&T(t)}),window.addEventListener("keydown",a=>{a.key==="Escape"&&T(t)}),i.addEventListener("submit",async a=>{a.preventDefault(),U.forEach(f=>f.dispatchEvent(new Event("blur")));const m=r(l.value),v=(m.match(/[a-zA-Z\u0400-\u04FF]/g)||[]).length>=2;if(!m||!v){q.fire({icon:"warning",title:"Перевірте ім’я",text:"Ім’я має містити щонайменше 2 літери.",background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)"}),l.focus();return}const g=S(d.value);if(!/^380\d{9}$/.test(g)){q.fire({icon:"warning",title:"Перевірте телефон",text:"Формат телефону має бути 380XXXXXXXXX",background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)"}),d.focus();return}if(b.value.trim(),F(),b.classList.contains("invalid")){b.focus();return}if(!i.checkValidity()){q.fire({icon:"warning",title:"Перевірте форму",text:"Будь ласка, заповніть усі поля правильно.",background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)"});return}const y=(new FormData(i).get("message")||"").trim(),I={name:m,phone:g,animalId:e};y!==""&&(I.comment=y);try{const f=await fetch("https://paw-hut.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(I)}),N=await f.json().catch(()=>null);if(!f.ok)throw new Error((N==null?void 0:N.message)||"Помилка відправки заявки");q.fire({icon:"success",title:`Вітаємо, ${m}! Заявку надіслано!😻Ваш пухнастик буде скоро з вами.`,html:`
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
      </div> `,background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)",showClass:{popup:"animate__animated animate__bounceIn"},hideClass:{popup:"animate__animated animate__fadeOutUp"}}),T(t)}catch(f){q.fire({icon:"error",title:"Помилка",text:f.message,background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)"})}})}function T(e){const s=e.querySelector("[data-order-modal-form]");s&&s.reset(),e.remove(),document.body.classList.remove("body-lock")}function We(e){return`
    <div class="details-modal-backdrop" data-details-modal-backdrop>
      <div class="details-modal" role="dialog" aria-modal="true" aria-labelledby="details-modal-title" aria-describedby="details-modal-description">
        <button class="details-modal-close" type="button" aria-label="Закрити" data-details-modal-close>
        <svg class="details-modal-close-icon" width="14" height="14">
        <use href="${p}sprite.svg#icon-close2"></use></svg></button>
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
    </div>`}function je(e){const s=We(e);document.body.insertAdjacentHTML("beforeend",s),window.innerWidth-document.documentElement.clientWidth,document.body.classList.add("body-lock");const t=document.querySelector("[data-details-modal-backdrop]"),n=t.querySelector(".details-modal"),i=t.querySelector("[data-details-modal-close]"),l=t.querySelector("[data-details-modal-adopt]");n.setAttribute("tabindex","-1"),n.focus(),i.addEventListener("click",()=>O(t)),t.addEventListener("click",r=>{r.target===t&&O(t)});function u(r){r.key==="Escape"&&(O(t),window.removeEventListener("keydown",u))}window.addEventListener("keydown",u),l.addEventListener("click",()=>{O(t),De(e.id)})}function O(e){e.remove(),document.body.classList.remove("body-lock")}o.petsList.addEventListener("click",e=>{var i,l,u,r,d;const s=e.target.closest(".pets-modal-btn");if(!s)return;const t=s.closest(".pets-item"),n={id:t.dataset.id,image:((i=t.querySelector(".pets-img"))==null?void 0:i.src)||"",species:((l=t.querySelector(".pets-species"))==null?void 0:l.textContent)||"",name:((u=t.querySelector(".pets-name"))==null?void 0:u.textContent)||"",age:((r=t.querySelector(".pets-info p:nth-child(1)"))==null?void 0:r.textContent)||"",gender:((d=t.querySelector(".pets-info p:nth-child(2)"))==null?void 0:d.textContent)||"",description:t.dataset.description||"",health:t.dataset.health||"",behavior:t.dataset.behavior||""};je(n)});const Fe=[{id:1,description:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,description:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,description:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,description:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,description:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],Ne=Fe.map(({id:e,description:s})=>`<div class="swiper-slide about-slide">
          <picture>
            <source
              media="(min-width: 1440px)"
              srcset="${p}about-us/desktop/slide-p${e}-desk.webp 1x, ${p}about-us/desktop/slide-p${e}-desk@2x.webp 2x">
            <source
              media="(min-width: 768px)"
              srcset="${p}about-us/tablet/slide-p${e}-tab.webp 1x, ${p}about-us/tablet/slide-p${e}-tab@2x.webp 2x">
            <source
              media="(max-width: 767px)"
              srcset="${p}about-us/mobile/slide-p${e}-mob.webp 1x, ${p}about-us/mobile/slide-p${e}-mob@2x.webp 2x">
            <img 
              class="about-picture"
              src="${p}about-us/mobile/slide-p${e}-mob.webp"
              alt="slide" loading="lazy" decoding="async"/>
          </picture>
          <div class="about-overlay">
          <p class="about-id">${s}</p>
          </div>
        </div>`).join("");o.aboutSwiperWrapper.innerHTML=Ne;const h=new G(".about-mySwiper",{modules:[Q,me,ee],speed:1e3,loop:!1,slidesPerView:1,spaceBetween:10,keyboard:{enabled:!0},pagination:{el:".about .swiper-pagination",clickable:!0},navigation:{nextEl:".about-swiper-button-next",prevEl:".about-swiper-button-prev"}});function le(){window.innerWidth<768?(o.aboutPaginationElem.classList.remove("center"),o.aboutPaginationElem.classList.add("left")):(o.aboutPaginationElem.classList.remove("left"),o.aboutPaginationElem.classList.add("center"))}le();window.addEventListener("resize",le);const ce=()=>{h.isEnd?o.aboutBtnForward.classList.add("about-btn-disabled"):o.aboutBtnForward.classList.remove("about-btn-disabled"),h.isBeginning?o.aboutBtnBack.classList.add("about-btn-disabled"):o.aboutBtnBack.classList.remove("about-btn-disabled")};h.on("slideChange",ce);ce();const de=o.aboutSection;h.on("slideChangeTransitionStart",()=>{de&&(document.querySelectorAll(".about-id").forEach(e=>e.classList.remove("show")),document.querySelectorAll(".about-overlay").forEach(e=>e.classList.remove("fade-out")))});h.on("slideChangeTransitionEnd",()=>{const e=h.slides[h.activeIndex],s=e.querySelector(".about-id");s&&s.classList.add("show");const t=e.querySelector(".about-overlay");t&&t.classList.add("fade-out")});const ze=new IntersectionObserver(e=>{e.forEach(s=>{if(s.isIntersecting){const t=h.slides[h.activeIndex],n=t.querySelector(".about-id"),i=t.querySelector(".about-overlay");n&&(n.classList.remove("show"),n.offsetWidth,n.classList.add("show")),i&&(i.classList.remove("fade-out"),i.offsetWidth,i.classList.add("fade-out"))}})},{threshold:.7});ze.observe(de);const He=[{q:"Я мрію про пухнастика! Що мені потрібно зробити, щоб забрати хвостика додому?",blocks:[{type:"p",text:"Це чудово, що ви готові подарувати дім одному з наших підопічних! Ми дуже раді будемо вам у цьому допомогти. Процес «усиновлення» у нас простий та зрозумілий:"},{type:"ol",items:["Оберіть друга: Придивіться до наших хвостиків у розділі «Знайди друга».","Залиште заявку: Коли відчуєте, що це «ваша» тваринка, натискайте кнопку «Взяти додому» та заповніть коротку анкету.","Поговоріть з куратором: Наш волонтер зателефонує вам, щоб познайомитись ближче, розповісти про характер тваринки та відповісти на всі ваші питання.","Приїжджайте знайомитись: Якщо ви ідеально підходите одне одному, ми домовимось про зустріч у притулку.","Дорога додому: Після знайомства та підписання договору про відповідальне утримання, ваш новий друг поїде з вами у своє нове, щасливе життя!"]}]},{q:"Як мені найкраще підготувати свій дім та родину до появи хвостика?",blocks:[{type:"p",text:"Чудове питання, яке показує вашу турботу! Переїзд — це завжди невеликий стрес для тваринки, але правильна підготовка зробить цей процес легким і радісним. Ось кілька порад:"},{type:"ul",items:["Безпечний простір: Переконайтесь, що на вікнах є сітки, а дроти та побутова хімія сховані.","Особисті речі: Підготуйте для хвостика дві мисочки (для їжі та води), лежанку чи будиночок, лоток з наповнювачем для котика або повідець і нашийник для собачки.","Сімейна розмова: Обговоріть з рідними майбутні обов'язки. Важливо, щоб усі були готові до появи нового мешканця.","Терпіння та любов: Дайте тваринці час, щоб звикнути. Не квапте її, будьте поруч, розмовляйте лагідним голосом — і ваша любов творитиме дива!"]}]},{q:"Чи можу я бути впевненим, що тваринка здорова? Розкажіть про щеплення.",blocks:[{type:"p",text:"Так, звісно. Здоров'я наших підопічних — наш головний пріоритет. Кожна тваринка, яка потрапляє до нас, проходить повний огляд у ветеринара. Ми гарантуємо, що:"},{type:"ul",items:["Усі хвостики оброблені від бліх та глистів.","Усі вакциновані комплексною вакциною за віком.","Дорослі тварини (зазвичай від 6-8 місяців) стерилізовані/кастровані."]},{type:"p",text:"Разом із тваринкою ви обов'язково отримаєте її ветеринарний паспорт з усіма відмітками. Якщо у когось є особливі потреби у догляді чи харчуванні, ми чесно і детально про це розповімо."}]},{q:"Я дуже хочу допомогти, але поки не готовий до адопції. Чим я можу підтримати «Хатинку лапок»?",blocks:[{type:"p",text:"Дякуємо вам за велике серце та бажання допомогти! Кожна допомога для нас безцінна. Навіть якщо ви не можете взяти тваринку, ви можете стати її янголом-охоронцем. Ось як:"},{type:"ul",items:["Допомогти фінансово: Ваша пожертва піде на корм, ліки, оплату комунальних послуг та зарплату персоналу.","Стати волонтером: Нам завжди потрібні люблячі руки для прогулянок з собачками, прибирання та, найголовніше, для спілкування з тваринками.","Подарувати необхідне: Ми завжди раді кормам, лікам, наповнювачам для лотків, іграшкам, теплим ковдрам.","Допомогти інформаційно: Найпростіший, але дуже дієвий спосіб — розповідати про нас у соцмережах. Можливо, саме ваш репост допоможе комусь знайти свою долю!"]}]},{q:"Мені сподобалась одна з ваших тваринок на сайті. Чи можу я приїхати, щоб познайомитися з нею особисто?",blocks:[{type:"ul",items:["Авжеж! Ми віримо, що справжня магія стається лише при особистій зустрічі. Щоб знайомство було комфортним і для вас, і для тваринки, ми просимо вас спочатку заповнити онлайн-заявку на нашому сайті.","Після цього з вами зв'яжеться куратор тваринки, щоб домовитись про зручний час для вашого візиту. Такий підхід дозволяє нам приділити вам максимум уваги та уникнути зайвого стресу для наших підопічних. З нетерпінням чекаємо на знайомство!"]}]}],Re=e=>{if(e.type==="p")return`<p>${e.text}</p>`;if(e.type==="ol"||e.type==="ul"){const t=(e.items??[]).map(n=>`<li>${n}</li>`).join("");return`<${e.type}>${t}</${e.type}>`}return""},_e=({q:e,blocks:s=[]})=>`
  <li class="ac">
    <h3 class="ac-header">
      <button class="ac-trigger" type="button">
        <span class="faq-question">${e}</span>
        <span class="faq-icon">
          <svg aria-hidden="true" width="24" height="24">
            <use href="${p}sprite.svg#icon-add"></use>
          </svg>
        </span>
      </button>
    </h3>

    <div class="ac-panel">
      <div class="faq-content">
        ${s.map(Re).join("")}
      </div>
    </div>
  </li>
`;o.faqListEl.innerHTML=He.map(_e).join("");new pe(".accordion-container",{duration:1e3,showMultiple:!1,collapse:!0,ariaEnabled:!0});const Ve=document.querySelector(".faq-ajax-loader"),Y=20;for(let e=0;e<Y;e++){const s=document.createElement("div");s.classList.add("paw"),s.style.animationDelay=`${(Y-e)*.25+5}s`;const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.classList.add("icon");const n=document.createElementNS("http://www.w3.org/2000/svg","use");n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#paw"),t.appendChild(n),s.appendChild(t),Ve.appendChild(s)}D.defaults.baseURL="https://paw-hut.b.goit.study";const Ue=async()=>(await D.get("/api/feedbacks",{params:{limit:25,page:18}})).data;document.addEventListener("DOMContentLoaded",Ke);async function Ke(){try{let u=function(r){t.forEach(b=>b.classList.remove("active","near","far")),t[r].classList.add("active"),t[r-1]&&t[r-1].classList.add("near"),t[r+1]&&t[r+1].classList.add("near"),t[r-2]&&t[r-2].classList.add("far"),t[r+2]&&t[r+2].classList.add("far");const d=l-i;let S=r-2;S=Math.max(0,Math.min(S,d)),o.successPagination.style.transform=`translateX(${-S*n}px)`};const e=await Ue();Ye(e.feedbacks),document.querySelectorAll(".rating").forEach(r=>{const d=r.dataset.score;new be(r,{score:d,number:5,readOnly:!0,half:!0,starType:"img",starOn:`${p}icons/filled.svg`,starOff:`${p}icons/outline.svg`,starHalf:`${p}icons/half.svg`}).init()});const s=new G(".success-swiper",{modules:[Q,ee,ge],speed:1e3,spaceBetween:32,slidesPerView:1,loop:!1,wrapperClass:"success-list",slideClass:"success-item",keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0},navigation:{nextEl:".success-button-forward",prevEl:".success-button-back",disabledClass:".success-btn-disabled"},breakpoints:{767:{slidesPerView:2}}}),t=[],n=16,i=6;let l=s.slides.length;for(let r=0;r<l;r++){const d=document.createElement("span");d.classList.add("success-bullet"),d.dataset.index=r,d.addEventListener("click",()=>{s.slideTo(r)}),o.successPagination.appendChild(d),t.push(d)}s.on("slideChange",()=>{u(s.activeIndex)}),u(0),s.on("slideChange",()=>{s.isEnd?o.successBtnForward.classList.add("success-btn-disabled"):o.successBtnForward.classList.remove("success-btn-disabled")}),s.on("slideChange",()=>{s.isBeginning?o.successBtnBack.classList.add("success-btn-disabled"):o.successBtnBack.classList.remove("success-btn-disabled")})}catch{Z.error({title:"",message:"Шось воно не робе!",position:"topRight",iconUrl:`${p}public/error.svg`,messageColor:"#fafafb",messageSize:"16",titleWeight:"700",backgroundColor:"#ef4040",progressBarColor:"#b51b1b",timeout:3e3,maxWidth:432,theme:"dark",close:!0,class:"my-toast"})}}const Ye=e=>{const s=e.map(t=>`<li class="swiper-slide success-item">
            <div class="success-text-box">
                <div class="success-rate-star-box rating" data-score="${t.rate}"></div>
                <p class="success-item-desc">${t.description}</p>
            </div>
            <p class="success-item-author">${t.author}</p>
        </li>`).join("");o.successList.innerHTML=s},Je=o.successAnimation,J=15;for(let e=0;e<J;e++){const s=document.createElement("div");s.classList.add("paw"),s.style.animationDelay=`${(J-e)*.25}s`;const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.classList.add("icon");const n=document.createElementNS("http://www.w3.org/2000/svg","use");n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#paw"),t.appendChild(n),s.appendChild(t),Je.appendChild(s)}
//# sourceMappingURL=index.js.map
