<script>
    import { page } from '$app/stores';

    let open = false;
    function toggleMobileMenu() {
      open = !open;
    }
</script>
    
      <header class="h-[4rem] md:h-[6rem]">
    
        <!-- <section id="hero-section" class=" h-[5rem] grid"> 
         
        
        </section> -->
        <section id="navigation" class="justify-between absolute top-0 w-full">
        <div id="brand" class:active={$page.url.pathname === '/'}>
          <a sveltekit:prefetch href="/">
              <img class="h-20" src="logo.svg" alt="logo">
          </a>
        </div>
        <nav>
          <ul>
            <li class:active={$page.url.pathname === '/projects'}>
              <a sveltekit:prefetch href="/projects" class="hover-underline-animation w3rcontainer text-black text-lg tracking-wider biaukai ">My work</a>
            </li>
              <li class:active={$page.url.pathname === '/about'}>
          <a sveltekit:prefetch href="/about" class="hover-underline-animation w3rcontainer text-black text-lg tracking-wider biaukai ">Get to know me</a>
        </li>
               
              <li class:active={$page.url.pathname === '#contact_me'}>
          <a sveltekit:prefetch href="#contact_me" class="hover-underline-animation  text-black text-lg tracking-wider  biaukai">Contact</a>
        </li>
          </ul>
        </nav>

    
        <div on:click={toggleMobileMenu} id="hamburger-icon" class:open>
          
          <div class="bar1 bar"></div>
          <div class="bar2 bar"></div>
          <div class="bar3 bar"></div>
          <ul class="mobile-menu">
            <li class:active={$page.url.pathname === '/projects'}>
              <a sveltekit:prefetch href="/projects" class="hover-underline-animation text-black">My work</a>
            </li>
            <li class:active={$page.url.pathname === '/about'}>
              <a sveltekit:prefetch href="/about" class="hover-underline-animation text-black">Get to know me</a>
            </li>
            <li class:active={$page.url.pathname === '#contact_me'}>
              <a sveltekit:prefetch href="#contact_me" class="hover-underline-animation text-black">Contact</a>
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
  background-color: #9B533F;
  transform-origin: bottom right;
  transition: transform 0.4s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
    
    #navigation {
      padding: 1.25rem;
      /* height: 5rem; */
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
      height: 100vh;
    }
    
    a {
        font-family: 'BiauKai';
    
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
    
     


.biaukai {
        font-family: 'BiauKai';
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