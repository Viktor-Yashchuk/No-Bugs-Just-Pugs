import{i as Z,a as I,S,b as J,N as Y,P as G,K as Q,A as be,R as ge,M as fe}from"./assets/vendor-6LYjMKHJ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();const c={successList:document.querySelector(".success-list"),successBtnForward:document.querySelector(".success-button-forward"),successBtnBack:document.querySelector(".success-button-back"),successAnimation:document.querySelector(".ajax-loader"),ctgsList:document.querySelector(".pets-ctgs-list"),petsList:document.querySelector(".pets-list"),petsLoadBtn:document.querySelector(".pets-load-btn"),petsLoader:document.querySelector(".pets-loader"),petsPagination:document.querySelector(".pets-pagination")},he=document.querySelector(".burger-btn"),$=document.querySelector(".mobile-menu");document.querySelector(".mobile-menu-btn");document.querySelector(".mobile-menu-container");const ve=document.querySelectorAll(".mobile-menu-nav-link, .mobile-menu-button"),ee=document.querySelector(".mobile-burger-menu-top-line"),te=document.querySelector(".mobile-burger-menu-mid-line"),se=document.querySelector(".mobile-burger-menu-bot-line"),ye=document.querySelector(".header"),oe=e=>{e.key==="Escape"&&M()},we=()=>{ee.classList.toggle("top-line"),te.classList.toggle("mid-line"),se.classList.toggle("bot-line")},Le=()=>{ee.classList.remove("top-line"),te.classList.remove("mid-line"),se.classList.remove("bot-line")},ke=()=>{document.body.style.overflow="hidden",document.addEventListener("keydown",oe),$.classList.toggle("is-open"),$.className!=="mobile-menu is-open"&&(document.body.style.overflow=""),we()},M=()=>{document.body.style.overflow="",$.classList.remove("is-open"),document.removeEventListener("keydown",oe),Le()},Se=e=>{e.target.closest(".mobile-menu-btn, .mobile-menu-nav-link, .mobile-menu-button")||M()},Ee=e=>{e.target.closest(".header-logo, .burger-btn")||M()};he.addEventListener("click",ke);ye.addEventListener("click",Ee);$.addEventListener("click",Se);ve.forEach(e=>{e.addEventListener("click",M)});window.addEventListener("resize",()=>{innerWidth>=1440&&(document.body.style.overflow="",$.classList.remove("is-open"),M())});const m="/project-10/",ae=()=>window.innerWidth<768?"mobile":window.innerWidth<1440?"tablet":"desktop",ie=()=>C==="mobile"||C==="tablet"?8:9;let q,r=1,x,C=ae(),y=ie();const B=()=>C==="mobile",ne=e=>Z.show({message:`Error: ${e}`,position:"topRight",color:"red",close:!1});function D(){const e=Math.ceil(x/y);if(e<=1)return;let s="";if(s+=`<li>
      <button class="pagination-btn-arrow" data-action="prev" aria-label="Попередня сторінка" ${r===1?"disabled":""}><svg class="arrow-icon" width="24" height="24">
          <use href="${m}sprite.svg#icon-arrow-back"></use>
        </svg>
      </button>
    </li>`,r===1){for(let t=1;t<=Math.min(3,e);t++)s+=E(t);e>3&&(s+='<li class="dots">…</li>',s+=E(e))}else if(r===e){s+=E(1),e>3&&(s+='<li class="dots">…</li>');for(let t=e-2;t<=e;t++)t>1&&(s+=E(t))}else{s+=E(1),r>3&&(s+='<li class="dots">…</li>');for(let t=r-1;t<=r+1;t+=1)t>1&&t<e&&(s+=E(t));r<e-2&&(s+='<li class="dots">…</li>'),e>1&&(s+=E(e))}s+=`<li>
      <button class="pagination-btn-arrow" data-action="next" aria-label="Наступна сторінка" ${r===e?"disabled":""}> <svg class="arrow-icon" width="24" height="24">
          <use href="${m}sprite.svg#icon-arrow-forward"></use>
        </svg>
      </button>
    </li>`,c.petsPagination.style.display="flex",c.petsPagination.innerHTML=s}function E(e){return`
    <li>
      <button
        class="pagination-btn ${r===e?"active":""}"
        aria-label="Сторінка ${e}"
        data-page="${e}">
        ${e}
      </button>
    </li>
  `}const xe=async e=>{const s=e.target.closest("button");if(!s)return;const t=Math.ceil(x/y);s.dataset.action==="prev"&&r>1&&(r-=1),s.dataset.action==="next"&&r<t&&(r+=1),s.dataset.page&&(r=+s.dataset.page);const n=c.petsList.getBoundingClientRect().top+window.pageYOffset-200;window.scrollTo({top:n,behavior:"smooth"}),N(),await P(r,q),D()};c.petsPagination.addEventListener("click",xe);const $e=async()=>await I("https://paw-hut.b.goit.study/api/categories"),qe=e=>{e.unshift({name:"Всі"});const s=["Всі","Собаки","Коти","Кролики","Гризуни","Птахи","Тварини з особливими потребами","Терміново шукають дім"];return e.sort((t,n)=>s.indexOf(t.name)-s.indexOf(n.name)),e.map(t=>`<li class="pets-ctgs-item"><button class="pets-ctgs-btn" aria-pressed="false" data-id="${t._id}" type="button">${t.name}</button></li>`).join("")},Ce=async()=>{try{const e=await $e();c.ctgsList.innerHTML=qe(e.data);const s=document.querySelector(".pets-ctgs-btn");s.classList.add("active"),s.dataset.id="all",s.setAttribute("aria-pressed","true")}catch(e){ne(e.message)}},Be=async(e,s)=>{const t={page:e,limit:y};return s&&(t.categoryId=s),await I("https://paw-hut.b.goit.study/api/animals",{params:t})},V=e=>e.map(s=>`<li class="pets-item" role="listitem" data-id="${s._id}" data-description="${s.description||""}" data-health="${s.healthStatus||""}" data-behavior="${s.behavior||""}">
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
</li>`).join(""),P=async(e,s)=>{try{Oe();const t=await Be(e,s);Xe(),B()?c.petsList.insertAdjacentHTML("beforeend",V(t.data.animals)):c.petsList.innerHTML=V(t.data.animals),x=t.data.totalItems,c.petsList.querySelectorAll(".pets-item").forEach((a,i)=>{const l=t.data.animals[i];l&&(a.dataset.description=l.description||"",a.dataset.health=l.healthStatus||"",a.dataset.behavior=l.behavior||"")})}catch(t){ne(t.message)}},re=()=>c.petsList.innerHTML="",Me=e=>{document.querySelectorAll(".pets-ctgs-btn").forEach(t=>{t.classList.remove("active"),t.setAttribute("aria-pressed","false")}),e.classList.add("active"),e.setAttribute("aria-pressed","true")},Pe=async e=>{e.target.nodeName==="BUTTON"&&(j(),N(),Me(e.target),q=e.target.dataset.id==="all"?void 0:e.target.dataset.id,r=1,re(),await P(r,q),B()&&x>y?H():B()||D())};c.ctgsList.addEventListener("click",Pe);const Ae=async()=>{r++,await P(r,q),r*y>=x&&j()};c.petsLoadBtn.addEventListener("click",Ae);const j=()=>{c.petsLoadBtn.style.display="none"},H=()=>{c.petsLoadBtn.style.display="block"},Xe=()=>{c.petsLoader.style.display="none"},Oe=()=>{c.petsLoader.style.display="block"},N=()=>{c.petsPagination.style.display="none"},Te=()=>{const e=ae();e!==C&&(re(),j(),N(),C=e,y=ie(),r=1,P(r,q),e==="mobile"&&r*y<x?H():e!=="mobile"&&D())};window.addEventListener("resize",Te);const Ie=async()=>{await Ce(),await P(r),B()&&x>y?H():B()||D()};Ie();function De(){return`
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
            <span id="comment-counter" class="counter"></span>
          </label>

          <button class="order-modal-send-button" type="submit">Надіслати заявку</button>
        </form>
      </div>
    </div>`}function We(e){const s=De();document.body.insertAdjacentHTML("beforeend",s),document.body.classList.add("body-lock");const t=document.querySelector("[data-order-modal-backdrop]"),n=t.querySelector("[data-order-modal-close]"),a=t.querySelector("[data-order-modal-form]"),i=t.querySelector("#username"),l=/[^a-zA-Z\u0400-\u04FF\s'’`-]/g;function u(o){return o.replace(l,"").replace(/\s+/g," ").replace(/-+/g,"-").trim()}i.addEventListener("input",o=>{const d=o.target,v=d.value,p=d.selectionStart,g=u(v);if(g===v)return;d.value=g;const L=v.length-g.length,k=Math.max(0,p-L);d.setSelectionRange(k,k)}),i.addEventListener("paste",o=>{o.preventDefault();const d=(o.clipboardData||window.clipboardData).getData("text"),v=u(d),p=o.target,g=p.selectionStart,L=p.selectionEnd,k=p.value.slice(0,g),W=p.value.slice(L);p.value=u(k+v+W);const f=(k+v).length;p.setSelectionRange(f,f)}),i.addEventListener("blur",o=>{o.target.value=u(o.target.value)});const b=t.querySelector("#phone");b.addEventListener("input",()=>{let o=b.value.replace(/\D/g,"");o.startsWith("380")||(o.startsWith("0")?o="380"+o.slice(1):o.startsWith("3")?o=o:o.length>0&&(o="380"+o));let d="";o.length>0&&(d="+38"),o.length>2&&(d+=" (0"),o.length>3&&(d+=o.substring(3,5)),o.length>5&&(d+=") "+o.substring(5,8)),o.length>8&&(d+=" "+o.substring(8,10)),o.length>10&&(d+=" "+o.substring(10,12)),b.value=d});function me(o){return o.replace(/\D/g,"").slice(0,12)}const w=t.querySelector("#message"),A=t.querySelector("#comment-error"),pe=t.querySelector("#comment-counter");function z(){const o=w.value.trim().length;pe.textContent=`${o}/300`,o===0?(A.textContent="Коментар не може бути порожнім",w.classList.add("invalid")):o<5?(A.textContent=`Коментар має бути не менше 5 символів. Зараз ви ввели ${o}.`,w.classList.add("invalid")):o>300?(A.textContent="Коментар має бути не більше 300 символів",w.classList.add("invalid")):(A.textContent="",w.classList.remove("invalid"))}w.addEventListener("input",z),w.addEventListener("blur",z);const R=t.querySelectorAll(".order-modal-input, .order-modal-input-textarea");R.forEach(o=>{o.addEventListener("input",()=>{o.value=o.value.trim(),o.validity.valueMissing||o.validity.patternMismatch||o.validity.tooShort||o.validity.tooLong?o.classList.add("invalid"):o.classList.remove("invalid")}),o.addEventListener("blur",()=>{o.validity.valueMissing||o.validity.patternMismatch||o.validity.tooShort||o.validity.tooLong?o.classList.add("invalid"):o.classList.remove("invalid")})}),n.addEventListener("click",()=>X(t)),t.addEventListener("click",o=>{o.target===t&&X(t)}),window.addEventListener("keydown",o=>{o.key==="Escape"&&X(t)}),a.addEventListener("submit",async o=>{o.preventDefault(),R.forEach(f=>f.dispatchEvent(new Event("blur")));const d=u(i.value),v=(d.match(/[a-zA-Z\u0400-\u04FF]/g)||[]).length>=2;if(!d||!v){S.fire({icon:"warning",title:"Перевірте ім’я",text:"Ім’я має містити щонайменше 2 літери.",background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)"}),i.focus();return}const p=me(b.value);if(!/^380\d{9}$/.test(p)){S.fire({icon:"warning",title:"Перевірте телефон",text:"Формат телефону має бути 380XXXXXXXXX",background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)"}),b.focus();return}const g=t.querySelector("#message"),L=g.value.trim();if(L.length===0){S.fire({icon:"warning",title:"Перевірте коментар",text:"Коментар не може бути порожнім.",background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)"}),g.focus();return}if(L.length<5){S.fire({icon:"warning",title:"Перевірте коментар",text:`Коментар має бути не менше 5 символів. Зараз ви ввели ${L.length}.`,background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)"}),g.focus();return}if(!a.checkValidity()){S.fire({icon:"warning",title:"Перевірте форму",text:"Будь ласка, заповніть усі поля правильно.",background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)"});return}const k=new FormData(a),W={name:d,phone:p,comment:k.get("message").trim(),animalId:e};try{const f=await fetch("https://paw-hut.b.goit.study/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(W)}),F=await f.json().catch(()=>null);if(!f.ok)throw new Error((F==null?void 0:F.message)||"Помилка відправки заявки");S.fire({icon:"success",title:"Вітаємо! Заявку надіслано!",text:"Ваш пухнастик буде скоро з вами.😻",background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)"}),X(t)}catch(f){S.fire({icon:"error",title:"Помилка",text:f.message,background:"var(--color-scheme-1-foreground)",confirmButtonColor:"var(--color-mariner-dark)"})}})}function X(e){const s=e.querySelector("[data-order-modal-form]");s&&s.reset(),e.remove(),document.body.classList.remove("body-lock")}function Fe(e){return`
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
    </div>`}function ce(e){const s=Fe(e);document.body.insertAdjacentHTML("beforeend",s),window.innerWidth-document.documentElement.clientWidth,document.body.classList.add("body-lock");const t=document.querySelector("[data-details-modal-backdrop]"),n=t.querySelector("[data-details-modal-close]"),a=t.querySelector("[data-details-modal-adopt]");n.addEventListener("click",()=>O(t)),t.addEventListener("click",l=>{l.target===t&&O(t)});function i(l){l.key==="Escape"&&(O(t),window.removeEventListener("keydown",i))}window.addEventListener("keydown",i),a.addEventListener("click",()=>{O(t),We(e.id)})}function O(e){e.remove(),document.body.classList.remove("body-lock")}c.petsList.addEventListener("click",e=>{var a,i,l,u,b;const s=e.target.closest(".pets-modal-btn");if(!s)return;const t=s.closest(".pets-item"),n={id:t.dataset.id,image:((a=t.querySelector(".pets-img"))==null?void 0:a.src)||"",species:((i=t.querySelector(".pets-species"))==null?void 0:i.textContent)||"",name:((l=t.querySelector(".pets-name"))==null?void 0:l.textContent)||"",age:((u=t.querySelector(".pets-info p:nth-child(1)"))==null?void 0:u.textContent)||"",gender:((b=t.querySelector(".pets-info p:nth-child(2)"))==null?void 0:b.textContent)||"",description:t.dataset.description||"",health:t.dataset.health||"",behavior:t.dataset.behavior||""};ce(n)});c.petsList.addEventListener("keydown",e=>{var t,n,a,i,l;const s=e.target.closest(".pets-modal-btn");if(s&&(e.key==="Enter"||e.key===" ")){e.preventDefault();const u=s.closest(".pets-item"),b={id:u.dataset.id,image:((t=u.querySelector(".pets-img"))==null?void 0:t.src)||"",species:((n=u.querySelector(".pets-species"))==null?void 0:n.textContent)||"",name:((a=u.querySelector(".pets-name"))==null?void 0:a.textContent)||"",age:((i=u.querySelector(".pets-info p:nth-child(1)"))==null?void 0:i.textContent)||"",gender:((l=u.querySelector(".pets-info p:nth-child(2)"))==null?void 0:l.textContent)||"",description:u.dataset.description||"",health:u.dataset.health||"",behavior:u.dataset.behavior||""};ce(b)}});const K=document.querySelector(".about-swiper-button-next"),_=document.querySelector(".about-swiper-button-prev"),je=[{id:1,description:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,description:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,description:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,description:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,description:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],He=je.map(({id:e,description:s})=>`<div class="swiper-slide about-slide">
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
        </div>`).join("");document.querySelector(".about-swiper-wrapper").innerHTML=He;const h=new J(".about-mySwiper",{modules:[Y,G,Q],loop:!1,slidesPerView:1,spaceBetween:10,keyboard:{enabled:!0},pagination:{el:".about .swiper-pagination",clickable:!0},navigation:{nextEl:".about-swiper-button-next",prevEl:".about-swiper-button-prev"}});function le(){const e=document.querySelector(".about .swiper-pagination");window.innerWidth<768?(e.classList.remove("center"),e.classList.add("left")):(e.classList.remove("left"),e.classList.add("center"))}le();window.addEventListener("resize",le);const de=()=>{h.isEnd?K.classList.add("about-btn-disabled"):K.classList.remove("about-btn-disabled"),h.isBeginning?_.classList.add("about-btn-disabled"):_.classList.remove("about-btn-disabled")};h.on("slideChange",de);de();const ue=document.querySelector(".about");h.on("slideChangeTransitionStart",()=>{ue&&(document.querySelectorAll(".about-id").forEach(e=>e.classList.remove("show")),document.querySelectorAll(".about-overlay").forEach(e=>e.classList.remove("fade-out")))});h.on("slideChangeTransitionEnd",()=>{const e=h.slides[h.activeIndex],s=e.querySelector(".about-id");s&&s.classList.add("show");const t=e.querySelector(".about-overlay");t&&t.classList.add("fade-out")});const Ne=new IntersectionObserver(e=>{e.forEach(s=>{if(s.isIntersecting){const t=h.slides[h.activeIndex],n=t.querySelector(".about-id"),a=t.querySelector(".about-overlay");n&&(n.classList.remove("show"),n.offsetWidth,n.classList.add("show")),a&&(a.classList.remove("fade-out"),a.offsetWidth,a.classList.add("fade-out"))}})},{threshold:.7});Ne.observe(ue);document.addEventListener("DOMContentLoaded",()=>{new be(".accordion-container",{duration:250,showMultiple:!1,collapse:!0,ariaEnabled:!0})});document.addEventListener("click",e=>{const s=e.target.closest(".ac-trigger");s&&setTimeout(()=>{window.innerWidth<375&&s.scrollIntoView({behavior:"smooth",block:"start"})},450)});I.defaults.baseURL="https://paw-hut.b.goit.study";const ze=async()=>(await I.get("/api/feedbacks",{params:{limit:25,page:18}})).data;document.addEventListener("DOMContentLoaded",Re);async function Re(){try{const e=await ze();Ve(e.feedbacks),document.querySelectorAll(".rating").forEach(s=>{const t=s.dataset.score;new ge(s,{score:t,number:5,readOnly:!0,half:!0,starType:"img",starOn:`${m}icons/filled.svg`,starOff:`${m}icons/outline.svg`,starHalf:`${m}icons/half.svg`}).init()})}catch{Z.error({message:"Error",position:"center"})}}const Ve=e=>{const s=e.map(t=>`<li class="swiper-slide success-item">
            <div class="success-text-box">
                <div class="success-rate-star-box rating" data-score="${t.rate}"></div>
                <p class="success-item-desc">${t.description}</p>
            </div>
            <p class="success-item-author">${t.author}</p>
        </li>`).join("");c.successList.innerHTML=s},T=new J(".success-swiper",{modules:[Y,G,Q,fe],spaceBetween:32,slidesPerView:1,loop:!1,wrapperClass:"success-list",slideClass:"success-item",keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0},pagination:{el:".success-swiper-pagination",type:"bullets",clickable:!0,dynamicBullets:!0,dynamicMainBullets:4},navigation:{nextEl:".success-button-forward",prevEl:".success-button-back",disabledClass:".success-btn-disabled"},breakpoints:{767:{slidesPerView:2,pagination:{dynamicBullets:!0,dynamicMainBullets:1}}}});T.on("slideChange",()=>{T.isEnd?c.successBtnForward.classList.add("success-btn-disabled"):c.successBtnForward.classList.remove("success-btn-disabled")});T.on("slideChange",()=>{T.isBeginning?c.successBtnBack.classList.add("success-btn-disabled"):c.successBtnBack.classList.remove("success-btn-disabled")});const Ke=c.successAnimation,U=30;for(let e=0;e<U;e++){const s=document.createElement("div");s.classList.add("paw"),s.style.animationDelay=`${(U-e)*.25}s`;const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.classList.add("icon");const n=document.createElementNS("http://www.w3.org/2000/svg","use");n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#paw"),t.appendChild(n),s.appendChild(t),Ke.appendChild(s)}
//# sourceMappingURL=index.js.map
