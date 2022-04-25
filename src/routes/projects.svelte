<script>
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
    import Projectsingular from "./Projectsingular.svelte";
    import { page } from '$app/stores';

    </script>

<Header title="MY PORTFOLIO"/>
<main>
    <div class="grid pt-20 pb-10">
        <h2 class="text-6xl place-self-center">My work</h2>
    </div>
  
   <div class="grid place-content-center">
       <div class="md:flex grid place-content-center">
            <div>
                <ul class="flex place-self-center gap-20 md:mr-20 mb-10 md:mb-0">
                    <li class:active={$page.url.pathname === '/projects'}>
                    <a sveltekit:prefetch href="/projects" class="hover:underline text-black">Project 1</a>
                    </li>
                    <li class:active={$page.url.pathname === '/about'}>
                    <a sveltekit:prefetch href="/about" class="hover:underline text-black">Project 2</a>
                    </li>
                    <li class:active={$page.url.pathname === '/contact'}>
                    <a sveltekit:prefetch href="/contact" class="hover:underline text-black">Project 3</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul class="flex place-self-center gap-20">
                    <li class:active={$page.url.pathname === '/projects'}>
                    <a sveltekit:prefetch href="/projects" class="hover:underline text-black">Project 4</a>
                    </li>
                    <li class:active={$page.url.pathname === '/about'}>
                    <a sveltekit:prefetch href="/about" class="hover:underline text-black">Project 5</a>
                    </li>
                    <li class:active={$page.url.pathname === '/contact'}>
                    <a sveltekit:prefetch href="/contact" class="hover:underline text-black">Project 6</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
<section class="mt-40">
    <Projectsingular src="projekt1.png" projektnummer="01" project_name="Bagerens Brød - Game" text_project="This project was made on 1st semester at KEA. The assignment was to design and develop a game using HTML, CSS and Javascript, and for me this was also the first time using Javascript. To present the game I created a website which enclosed some of the proces creating the game. If you click on the link you will see the website in which you can also play the game." programmer="Skills used in this project" redskab1="HTML" redskab2="CSS" redskab3="Javascript" redskab4="Adobe Illustrator" redskab5="Adobe Photoshop" redskab6="Adobe Photoshop" />
</section>
<section class="mt-40">
    <Projectsingular src="projekt2.png" projektnummer="02" project_name="Do Lah - Exam project" text_project="This project was our second semester exam project. The assignment was to work with an entrepreneur for whom we had to design and develop a new website using a CMS, innovate their visual identity and also to make video-, imagery- and SoMe content as well. This assignment was also the first time working with SEO, and therefore to make sure that the site was SEO optimized." programmer="Skills & tools used" redskab1="Wordpress" redskab2="HTML" redskab3="CSS" redskab4="Javascript" redskab5="Adobe Premiere Pro" redskab6="Adobe Illustrator & Photoshop"/>
</section>
<section class="mt-40">
    <Projectsingular src="projekt3.png" projektnummer="03" project_name="Skolemad - 3th semester project" text_project="Hej med dig Hej med dig Hej med dig Hej med dig Hej med dig Hej med dig Hej med dig Hej med dig" programmer="Skills & tools used" redskab1="HTML" redskab2="HTML" redskab3="HTML" redskab4="HTML" redskab5="HTML" redskab6="HTML"/>
</section>
<section class="mt-40">
    <Projectsingular src="projekt4.png" projektnummer="04" project_name="Musikloftet - 3th semester project"  text_project="Hej med dig Hej med dig Hej med dig Hej med dig Hej med dig Hej med dig Hej med dig Hej med dig" programmer="Skills & tools used" redskab1="HTML" redskab2="HTML" redskab3="HTML" redskab4="HTML" redskab5="HTML" redskab6="HTML"/>
</section>
<section class="mt-40">
    <Projectsingular src="projekt4.png" projektnummer="05" project_name="Ungdomsbyen - 2th semester project" text_project="Hej med dig Hej med dig Hej med dig Hej med dig Hej med dig Hej med dig Hej med dig Hej med dig" programmer="Skills & tools used" redskab1="HTML" redskab2="HTML" redskab3="HTML" redskab4="HTML" redskab5="HTML" redskab6="HTML"/>
</section>
<section class="mt-40">
    <Projectsingular src="projekt4.png" projektnummer="06" project_name="Typography assignment - 3th semester" text_project="Hej med dig Hej med dig Hej med dig Hej med dig Hej med dig Hej med dig Hej med dig Hej med dig" programmer="Skills & tools used" redskab1="HTML" redskab2="HTML" redskab3="HTML" redskab4="HTML" redskab5="HTML" redskab6="HTML"/>
</section>

</main>

<Footer/>