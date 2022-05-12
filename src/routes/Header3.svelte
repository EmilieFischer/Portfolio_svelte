<script>
    import { page } from '$app/stores';

    let open = false;
    function toggleMobileMenu() {
      open = !open;
    }
</script>
    
      <header class="h-[4rem] md:h-[6rem]">
        <section id="navigation" class="justify-between absolute top-0 w-full">
        <div id="brand" class:active={$page.url.pathname === '/'}>
          <a sveltekit:prefetch href="/">
              <img class="h-24" src="logo2.svg" alt="logo">
          </a>
        </div>
        <nav>
          <ul class="gap-20">
            <li class:active={$page.url.pathname === '/projects'}>
              <a sveltekit:prefetch href="/projects" class="hover-underline-animation w3rcontainer text-black text-lg tracking-wider roboto ">My work</a>
            </li>
              <li class:active={$page.url.pathname === '/about'}>
          <a sveltekit:prefetch href="/about" class="hover-underline-animation w3rcontainer text-black text-lg tracking-wider roboto ">Get to know me</a>
        </li>
               
              <li class:active={$page.url.pathname === '#contact_me'}>
          <a sveltekit:prefetch href="#contact_me" class="hover-underline-animation  text-black text-lg tracking-wider  roboto">Contact</a>
        </li>
          </ul>
        </nav>

    
        <div on:click={toggleMobileMenu} id="hamburger-icon" class:open>
          
          <div class="bar1 bar"></div>
          <div class="bar2 bar"></div>
          <div class="bar3 bar"></div>
          <ul class="mobile-menu gap-2">
            <li class:active={$page.url.pathname === '/'}>
                <a sveltekit:prefetch href="/" class="hover-underline-animation text-white text-5xl roboto">Home</a>
              </li>
            <li class:active={$page.url.pathname === '/projects'}>
              <a sveltekit:prefetch href="/projects" class="hover-underline-animation text-white text-5xl roboto">My work</a>
            </li>
            <li class:active={$page.url.pathname === '/about'}>
              <a sveltekit:prefetch href="/about" class="hover-underline-animation text-white text-5xl roboto">Get to know me</a>
            </li>
            <li class:active={$page.url.pathname === '#contact_me'}>
              <a sveltekit:prefetch href="#contact_me" class="hover-underline-animation text-white text-5xl roboto">Contact</a>
            </li>
          </ul>
        
      </div>
       
      </section>
    
     </header>
    
    <style>
    
    
.hover-underline-animation {
  display: inline-block;
  position: relative;
}

.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  transform-origin: bottom right;
  transition: transform 0.4s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
    
    #navigation {
      padding: 1.25rem;
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
      margin-right: 8rem;
      z-index: 998;

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
      margin: 0.375rem 0;
      transition: 0.4s;
    }
    
    .bar {
    background-color: #000000;
      position: relative;
      z-index: 999;
    }

    .open .bar {
        background-color: #fff;     

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
      flex-direction: column;
      align-items: center;
      background-color: #201abd;
      height: 100vh;
      justify-content: center;
    }
    
    /* a {
        font-family: 'BiauKai';
    
    } */
   

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
    
     


/* .biaukai {
        font-family: 'BiauKai';
    } */

    .roboto {
        font-family: 'roboto flex' ;
    }


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
    
    
     
    </style>