<script>
import { page } from '$app/stores';
export let title;


// function toggleMenu() {
//   console.log("toggleMenu");

//   document.querySelector("#menu").classList.toggle("show_none");

//   let erSkjult = document.querySelector("#menu").classList.contains("show_none");

//   if (erSkjult == true) {
//     document.querySelector("#menuknap").textContent = "☰";
//   } else {
//     document.querySelector("#menuknap").textContent = "✕";
//   }
// }
// const menu = document.querySelector(".mobile-menu");

let open = false;
function toggleMobileMenu() {
  open = !open;

}




</script>
<!-- 
<header class="relative h-screen bg-cover">
        <div class="container flex place-items-center sticky justify-between z-50">
            <figure  class:active={$page.url.pathname === '/'}>
                 <a sveltekit:prefetch href="/">
                     <img class="h-24" src="/img/logo.svg" alt="logo">
                 </a>
             </figure>
         <nav>          
             <div on:click={toggleMenu} id="menuknap">☰</div>
                <ul id="menu" class="show_none text-black text-lg z-50 place-items-center md:left-0 md:pt-1 md:gap-20 slide-in-right">
                  <li class:active={$page.url.pathname === '/projects'}>
                    <a sveltekit:prefetch href="/projects" class="hover:underline text-black hover:text-white">Portfolio</a>
                  </li>
                    <li class:active={$page.url.pathname === '/about'}>
				        <a sveltekit:prefetch href="/about" class="hover:underline text-black hover:text-white">About</a>
			        </li>
                     
                    <li class:active={$page.url.pathname === '/contact'}>
				        <a sveltekit:prefetch href="/contact" class="hover:underline text-black hover:text-white">Contact</a>
			        </li>
                </ul>
         </nav>
        </div>      
  
    <section>
        <div class="bg-white/50 absolute z-30 md:top-0 slide-down-opacity h-[30rem] md:h-full w-[25rem] md:w-[45rem] md:ml-[39rem] grid content-center">
          <div class="typing-demo1">
            DIGITAL DESIGNER.
          </div>
          <div class="typing-demo2">
              CONTENT CREATOR.
          </div>
            <div  class="typing-demo3">
              MULTIMEDIA DESIGNER.
            </div>
        </div>
      </section>
      <p class="portfolio_animation text-white tracking-in-expand-fwd z-50">PORTFOLIO.</p>
</header> -->

  <header>

    <section id="hero-section" class="bg-red-200 h-screen grid"> 
      <div class="grid place-items-center relative">
        <h1 class="absolute inset-x-auto bottom-6">{title}</h1>
      </div>
      <div class="grid place-items-center relative" class:active={$page.url.pathname === '/projects'}>
        <a class="absolute inset-x-auto bottom-6 pulsate-bck" sveltekit:prefetch href="/projects"> <img class="h-16 " src="scroll_down.png" alt="scrolldown button"></a>
      </div>

    </section>
    <section id="navigation" class="justify-between absolute top-0 w-full">
    <div id="brand" class:active={$page.url.pathname === '/'}>
      <a sveltekit:prefetch href="/">
          <img class="h-16" src="logo.svg" alt="logo">
      </a>
    </div>
    <nav>
      <ul>
        <li class:active={$page.url.pathname === '/projects'}>
          <a sveltekit:prefetch href="/projects" class="hover:underline text-black">My work</a>
        </li>
          <li class:active={$page.url.pathname === '/about'}>
      <a sveltekit:prefetch href="/about" class="hover:underline text-black">Get to know me</a>
    </li>
           
          <li class:active={$page.url.pathname === '/contact'}>
      <a sveltekit:prefetch href="/contact" class="hover:underline text-black">Contact</a>
    </li>
      </ul>
    </nav>

    <div on:click={toggleMobileMenu} id="hamburger-icon" class:open>
      
      <div class="bar1 bar"></div>
      <div class="bar2 bar"></div>
      <div class="bar3 bar"></div>
      <ul class="mobile-menu">
        <li class:active={$page.url.pathname === '/projects'}>
          <a sveltekit:prefetch href="/projects" class="hover:underline text-black">My work</a>
        </li>
        <li class:active={$page.url.pathname === '/about'}>
          <a sveltekit:prefetch href="/about" class="hover:underline text-black">Get to know me</a>
        </li>
        <li class:active={$page.url.pathname === '/contact'}>
          <a sveltekit:prefetch href="/contact" class="hover:underline text-black">Contact</a>
        </li>
      </ul>
    
  </div>
   
  </section>
 </header>

<style>


#navigation {
  padding: 1.25rem;
  height: 5rem;
  display: flex;
}

#brand {
  display: flex;
  align-items: center;
}

ul {
  list-style: none;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-right: 8rem;
}

ul li:hover {
  transform: scale(1.1);
  transition: 0.3s;
}

.mobile-menu {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
}

.mobile-menu li {
  margin-bottom: 0.625rem;
  margin-top: 5rem;

}

#hamburger-icon {
  margin: auto 0;
  display: none;
  cursor: pointer;
}

#hamburger-icon div {
  width: 2.188rem;
  height: 0.188rem;
  background-color: #000000;
  margin: 0.375rem 0;
  transition: 0.4s;
}

.bar {
  position: relative;
  z-index: 10;
}
.open .bar1 {
  transform: rotate(-45deg) translate(-6px, 6px);
}

.open .bar2 {
  opacity: 0;

}

.open .bar3 {
  transform: rotate(45deg) translate(-6px, -8px);

}

.open .mobile-menu{
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  background-color: pink;
}

a {
    font-family: 'BiauKai';

}
/* ***************************** ANIMATIONS *****************************  */

  /* slider opacity box og navigation ned fra oven */


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
    --w: 20ch;
    width: 0ch;
    animation: typing 2.5s steps(22) forwards, blink .5s step-end infinite alternate ;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: 'BiauKai';
    font-size: 2rem;
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
    font-size: 2rem;
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
    font-size: 2rem;
    animation-delay: 2.5s;
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
    font-size: 4rem;
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
/* .show_none {
  opacity: 0;
  transform: translateX(100%);
} */
/* -----positionerer 'X' i burgermenuen------ */
/* nav { */
  /* display: grid; */
  /* text-align: end;
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
} */





  @media only screen and (max-width: 600px) {
       /* header {
        background-image: url("src/img/bg_image.jpg");
    } */
  header nav {
    display: none;
  }

  #hamburger-icon {
    display: block;
  }
}

    .typing-demo1, .typing-demo2, .typing-demo3 {
        font-size: 3em;
    }
    
    /* --------------------  BURGERMENU DESKTOP -------------------- */
    /* #menuknap {
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
    } */

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

.portfolio_animation {
    font-family: 'BiauKai';
    grid-column: 1/-1;
    font-size: 8rem;
    grid-row: 2;
    display: flex;
    justify-content: center;
    z-index: 1;
    letter-spacing: 0.5rem;
    animation-delay: 3s;
  }
</style>