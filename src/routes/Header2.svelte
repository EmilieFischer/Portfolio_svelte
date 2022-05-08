<script>
    import { page } from '$app/stores';

    let open = false;
    function toggleMobileMenu() {
      open = !open;
    }
</script>
    
      <header>
    
        <section id="hero-section" class=" h-[5rem] grid"> 
         
        
        </section>
        <section id="navigation" class="justify-between absolute top-0 w-full">
        <div id="brand" class:active={$page.url.pathname === '/'}>
          <a sveltekit:prefetch href="/">
              <img class="h-20" src="logo.svg" alt="logo">
          </a>
        </div>
        <nav>
          <ul>
            <li class:active={$page.url.pathname === '/projects'}>
              <a sveltekit:prefetch href="/projects" class="hover:underline text-black text-lg tracking-wider uppercase">My work</a>
            </li>
              <li class:active={$page.url.pathname === '/about'}>
          <a sveltekit:prefetch href="/about" class="hover:underline text-black text-lg tracking-wider	uppercase">Get to know me</a>
        </li>
               
              <li class:active={$page.url.pathname === '/contact'}>
          <a sveltekit:prefetch href="/contact" class="hover:underline text-black text-lg tracking-wider uppercase">Contact</a>
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