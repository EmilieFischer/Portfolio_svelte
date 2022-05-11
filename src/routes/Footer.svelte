<footer class="grid md:place-content-center">
    <article class="mb-10 md:mt-0">
      <h3 class="font-bold text-2xl tracking-widest pb-5 md:pb-10 ml-5 md:ml-0 pt-3">CONTACT</h3>
      <ul>
        <div class="flex pb-4 ml-10 md:ml-0">
          <a href="sms:(+45)(28513171)"><img class="h-[2rem] pr-3" src="phone.svg" alt="telephone icon"></a>
          <p class="text-[#F0E8CD]">+45 28 51 31 71</p>
        </div>
        <div class="flex ml-10 md:ml-0">
          <a href="mailto:emiliefdhansen@hotmail.com"><img class="h-[2rem] pr-3" src="mail.svg" alt="mail icon"></a>
          <p class="text-[#F0E8CD]">emiliefdhansen@hotmail.com</p>
        </div>
      </ul>
    </article>
    <article class="mb-10 md:mt-0">
      <div>
      <h3 class="font-bold text-2xl tracking-widest pb-5 md:pb-10 ml-5 md:ml-0 pt-3">SOCIALS</h3>
        <div class="flex gap-4 md:gap-4 ml-10 md:ml-0">
          <a href="https://www.linkedin.com/in/emilie-fischer-515317234/" target="_blank"><img class="h-[4rem]" src="linked.svg" alt="linkedin icon"></a>
          <a href="https://www.instagram.com/emiliefischer/" target="_blank"><img class="h-[4rem]" src="instagram.svg" alt="instagram icon"></a>
        </div>
      </div>
    </article>
    <article class="md:mt-0">
      <h3 class="font-bold text-2xl tracking-widest ml-5 md:ml-0 pb-5 md:pb-10 pt-3">PORTFOLIO</h3>
      <ul class="ml-10 md:ml-0">
        <li class="text-[#F0E8CD] pt-0 pb-4">Made by Emilie Fischer</li>
        <li class="text-[#F0E8CD]">Build in Tailwind CSS og SvelteKit</li>
      </ul>
    </article>
  </footer>
  
  <style>
    footer {
      background: var(--footer-background);
      color: var(--primary-font-color);
      padding: 1rem;
      padding-top: 3rem;
      padding-bottom: 3rem;

      margin-top: 2rem;
    }
    li {
      list-style: none;
      padding-top: 0.5rem;
    }
    ul {
      padding: 0;
    }
    h3 {
      color: var( --h3-footer-color);
      font-family: 'BiauKai';
    }
    @media (min-width: 600px) {
      footer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      }
      article {
        justify-self: center;
      }

    
    }
  </style>