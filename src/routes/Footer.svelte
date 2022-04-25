<footer>
    <section>
      <h3>KONTAKT</h3>
      <ul>
        <li>TLF. + 45 2851 3171</li>
        <li>PRIVATE EMAIL <a href="mailto:emiliefdhansen@hotmail.com">emiliefdhansen@hotmail.com</a></li>
        <li>SCHOOL EMAIL <a href="mailto:emil609u@stud.kea.dk">emil609u@stud.kea.com</a></li>
      </ul>
    </section>
    <section>
      <h3>SOCIAL</h3>
      <ul>
        <li>LinkedIn</li>
      </ul>
    </section>
    <section>
      <h3>PORTFOLIO</h3>
      <ul>
        <li>Made by Emilie Fischer</li>
        <li>Build in Tailwind CSS og SvelteKit</li>
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