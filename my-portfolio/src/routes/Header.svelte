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

<header class="relative h-screen bg-cover">
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
  
    <section>
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
      <p class="portfolio_animation text-white tracking-in-expand-fwd z-50">PORTFOLIO.</p>
</header>


<style>
header {
    background-image: url("src/img/bg_phone.jpg");
}

a {
    font-family: 'BiauKai';

}
/* ***************************** ANIMATIONS *****************************  */

  /* slider opacity box og navigation ned fra oven */
  .slide-down-opacity {
	        animation: slide-down-opacity 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

  @keyframes slide-down-opacity {
    0% {
        transform: translateY(-1000px);
    }
    100% {
              transform: translateX(0);
    }
  }


  /* typografi-animation*/
    .typing-demo1 {
    --w: 18ch;
    width: 0ch;
    animation: typing 2.5s steps(22) forwards, blink .5s step-end infinite alternate ;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: 'BiauKai';
    font-size: 3em;
    animation-delay: 0.5s;

  }

  .typing-demo2 {
    --w: 21ch;
    width: 0ch;
    animation: typing 2.5s steps(22) forwards, blink .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: 'BiauKai';
    font-size: 3em;
    animation-delay: 2s;

  }
  .typing-demo3 {
    --w: 26ch;
    width: 0ch;
    animation: typing 2.5s steps(22) forwards, blink .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: 'BiauKai';
    font-size: 3em;
    animation-delay: 4s;
  }
@keyframes typing {
  to {
    width: var(--w);
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent;
  }
}
@keyframes caret {
    50% {
      border-color: transparent;
    }
  }

  
    /* portfolio-animation */
  .portfolio_animation {
    font-family: 'BiauKai';
    grid-column: 1/-1;
    font-size: 8rem;
    grid-row: 2;
    display: flex;
    justify-content: center;
    z-index: 1;
    letter-spacing: 0.5rem;
    animation-delay: 10s;
  }
  .tracking-in-expand-fwd {
	        animation: tracking-in-expand-fwd 2.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) 2.2s both;
}

  @keyframes tracking-in-expand-fwd {
    0% {
      letter-spacing: -0.5em;
              transform: translateZ(-700px);
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
              transform: translateZ(0);
      opacity: 1;
    }
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
    header {
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