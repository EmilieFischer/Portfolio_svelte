<script>
import { page } from '$app/stores';

function toggleMenu() {
  console.log("toggleMenu");

  document.querySelector("#menu").classList.toggle("show_none");

  let erSkjult = document.querySelector("#menu").classList.contains("show_none");

  if (erSkjult == true) {
    document.querySelector("#menuknap").textContent = "☰";
  } else {
    document.querySelector("#menuknap").textContent = "✕";
  }
}
</script>

<header class="relative h-screen bg-img-desk bg-cover">
    
        <div class="container flex place-items-center sticky justify-between z-50">
            <figure  class:active={$page.url.pathname === '/index'}>
                 <a sveltekit:prefetch href="/index">
                     <img class="h-24" src="src/img/logo.svg" alt="logo">
                 </a>
             </figure>
         <nav>          
             <div on:click={toggleMenu} id="menuknap">☰</div>
                <ul id="menu" class="show_none text-black text-lg z-50 place-items-center md:left-0 md:pt-1 md:gap-20 slide-in-right">
                    <li class:active={$page.url.pathname === '/about'}>
				        <a sveltekit:prefetch href="/about" class="hover:underline text-black hover:text-white">About</a>
			        </li>
                     <li class:active={$page.url.pathname === '/projects'}>
				        <a sveltekit:prefetch href="/projects" class="hover:underline text-black hover:text-white">Projects</a>
			        </li>
                    <li class:active={$page.url.pathname === '/contact'}>
				        <a sveltekit:prefetch href="/contact" class="hover:underline text-black hover:text-white">Contact</a>
			        </li>
                </ul>
         </nav>
        </div>      
  
    <section class="opacity_box">
        <div class="bg-white/50 absolute z-30 top-0 slide-down-opacity h-full w-[45rem] ml-[39rem] grid content-center">
          <div class="typing-demo1">
              WEBDEVELOPER.
          </div>
          <div class="typing-demo2">
              DIGITAL DESIGNER.
          </div>
            <div  class="typing-demo3">
              MULTIMEDIA DESIGNER.
            </div>
        </div>
      </section>
      <p class="portfolio_animation text-sm tracking-in-expand-fwd z-50 text-text-hover">PORTFOLIO.</p>
</header>


<style>
.bg-img-phone {
    background-image: url("src/img/bg_phone.jpg");
}
/* --------------------  BURGERMENU MOBILE -------------------- */
.show_none {
  opacity: 0;
  transform: translateX(100%);
}
/* -----positionerer 'X' i burgermenuen------ */
nav {
  /* display: grid; */
  text-align: end;
  overflow: hidden;
}

#menuknap {
  cursor: pointer;
  font-size: 3rem;
  color: #000000;
}

#menu {
  text-align: end;
  list-style-type: none;
  transition: transform 0.3s;
  position: absolute;
}



@media (min-width: 600px) {
    .bg-img-desk {
        background-image: url("src/img/bg_image.jpg");
    }
    /* --------------------  BURGERMENU DESKTOP -------------------- */
    #menuknap {
      display: none;
    }

    #menu {
      position: static;
    }
  
    #menu.show_none {
      transform: translateX(0);
      opacity: 1;
    }
  
    #menu li {
      display: inline-block;
      padding: 2rem;
    }
  
    p {
      text-align: justify;
    }

    /* slider navigationen ind */
  
  .slide-in-right {
    animation: slide-in-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes slide-in-right {
0% {
        transform: translateX(-100%);
opacity: 0;
}
100% {
        transform: translateX(0);
opacity: 1;
}
}
  }

</style>