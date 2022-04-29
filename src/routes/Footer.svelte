<footer>
    <section>
      <h3 class="font-bold text-2xl tracking-widest pb-6 pt-3">KONTAKT</h3>
      <ul>
        <div class="flex pb-4">
          <a href="sms:(+45)(28513171)"><img class="h-[2rem] pr-3" src="phone.svg" alt="telephone icon"></a>
          <p class="text-[#F0E8CD]">+45 28 51 31 71</p>
        </div>
        <div class="flex">
          <a href="mailto:emiliefdhansen@hotmail.com"><img class="h-[2rem] pr-3" src="mail.svg" alt="mail icon"></a>
          <p class="text-[#F0E8CD]">emiliefdhansen@hotmail.com</p>
        </div>
      </ul>
    </section>
    <section>
      <div class="grid place-items-center">
      <h3 class="font-bold text-2xl tracking-widest pb-6 pt-3">SOCIAL</h3>
        <div class="flex gap-5">
          <a href="https://www.linkedin.com/in/emilie-fischer-515317234/" target="_blank"><img class="h-[4rem]" src="linked.svg" alt="linkedin icon"></a>
          <a href="https://www.linkedin.com/in/emilie-fischer-515317234/" target="_blank"><img class="h-[4rem]" src="instagram.svg" alt="instagram icon"></a>
        </div>
        </div>
      <!-- <ul>
        <li><img src="linked.svg" alt=""></li>
        <li><img src="instagram.svg" alt=""></li>
      </ul> -->
    </section>
    <section>
      <h3 class="font-bold text-2xl tracking-widest pb-6 pt-3">PORTFOLIO</h3>
      <ul>
        <li class="text-[#F0E8CD]">Made by Emilie Fischer</li>
        <li class="text-[#F0E8CD]">Build in Tailwind CSS og SvelteKit</li>
      </ul>
    </section>
  </footer>
  
  <style>
    footer {
      background: var(--footer-background);
      color: var(--primary-font-color);
      padding: 1rem;
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
      section {
        justify-self: center;
      }

    
    }
  </style>