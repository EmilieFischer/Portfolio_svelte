<script>
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
    import Projectsingular from "./Projectsingular.svelte";
    import { page } from '$app/stores';
    import Header3 from "./Header3.svelte";
    </script>

<Header3/>
<main class="overflow-hidden">
    <div class="grid pt-20">
        <h2 class="text-6xl md:text-6xl leading-tight  md:text-center text-black biaukai">Some of my projects</h2>
    </div>
  
   <!-- <div class="grid place-content-center">
       <div class="md:flex grid place-content-center">
            <div>
                <ul class="flex place-self-center gap-20 md:mr-20 mb-10 md:mb-0"> -->
                    <!-- <li class:active={$page.url.pathname === '/projects'}>
                    <a sveltekit:prefetch href="/projects" class=" text-black biaukai text-5xl border-2 hover:bg-[#3E4237] hover:text-[#F0E8CD]  border-black rounded-full p-3">01</a>
                    </li> -->
                        <!-- <li>
                        <a href="projects#p1" class=" text-black biaukai text-5xl border-2 hover:bg-[#3E4237] hover:text-[#F0E8CD]  border-black rounded-full p-3">01</a>
                        </li>
                        <li>
                        <a href="projects#p2" class=" text-black biaukai text-5xl border-2 hover:bg-[#3E4237] hover:text-[#F0E8CD]  border-black rounded-full p-3">02</a>
                        </li>
                        <li>
                        <a href="projects#p3" class=" text-black biaukai text-5xl border-2 hover:bg-[#3E4237] hover:text-[#F0E8CD]  border-black rounded-full p-3">03</a>
                        </li> -->
                           

                    <!-- url="/projects#p1" -->
                    <!-- <li class:active={$page.url.pathname === '/about'}>
                    <a sveltekit:prefetch href="/about" class="text-black biaukai text-5xl border-2 hover:bg-[#3E4237] hover:text-[#F0E8CD]  border-black rounded-full p-3">02</a>
                    </li>
                    <li class:active={$page.url.pathname === '/contact'}>
                    <a sveltekit:prefetch href="/contact" class="text-black biaukai text-5xl border-2 hover:bg-[#3E4237] hover:text-[#F0E8CD]  border-black rounded-full p-3">03</a>
                    </li> -->
                <!-- </ul>
            </div>
            <div>
                <ul class="flex place-self-center gap-20"> -->
                    <!-- <li class:active={$page.url.pathname === '/projects'}>
                    <a sveltekit:prefetch href="/projects" class="text-black biaukai text-5xl border-2 hover:bg-[#3E4237] hover:text-[#F0E8CD]  border-black rounded-full p-3">04</a>
                    </li>
                    <li class:active={$page.url.pathname === '/about'}>
                    <a sveltekit:prefetch href="/about" class="text-black biaukai text-5xl border-2 hover:bg-[#3E4237] hover:text-[#F0E8CD]  border-black rounded-full p-3">05</a>
                    </li>
                    <li class:active={$page.url.pathname === '/contact'}>
                    <a sveltekit:prefetch href="/contact" class="text-black biaukai text-5xl border-2 hover:bg-[#3E4237] hover:text-[#F0E8CD]  border-black rounded-full p-3">06</a>
                    </li> -->
                    <!-- <li>

                    <a href="projects#p4" class=" text-black biaukai text-5xl border-2 hover:bg-[#3E4237] hover:text-[#F0E8CD]  border-black rounded-full p-3">04</a>
                </li>
                <li>
                <a href="projects#p5" class=" text-black biaukai text-5xl border-2 hover:bg-[#3E4237] hover:text-[#F0E8CD]  border-black rounded-full p-3">05</a>
                </li>
                <li>
                <a href="projects#p6" class=" text-black biaukai text-5xl border-2 hover:bg-[#3E4237] hover:text-[#F0E8CD]  border-black rounded-full p-3">06</a>
                </li>
                </ul>
            </div>
        </div>
    </div> -->
<section class="mt-40">
    <Projectsingular link="https://emiliefischer.com/kea/1sem/04_animation/website/spil.html" nummeret="1" src="bagerensbroed.png" projektnummer="01" project_name="Bagerens Brød - Game" text_project="This assignment was made on 1st semester of MMD. The assignment was to design and develop a game using HTML, CSS and Javascript, and for me this was also the first time using Javascript. To present the game I created a website which enclosed some of the proces creating the game. If you click on the link you will see the website in which you can also play the game." programmer="Skills used in this project" redskab1="HTML" redskab2="CSS" redskab3="Javascript" redskab4="Adobe Illustrator" redskab5="Adobe Photoshop" redskab6="Adobe Photoshop" />
</section>
<section class="mt-40">
    <Projectsingular link="https://lineberner.com/kea/2_semester/dolah/" nummeret="2" src="dolah.png" projektnummer="02" project_name="Do Lah - Exam project" text_project="This project was our 2nd semester exam project. The assignment was to work with an entrepreneur for whom we had to design and develop a new website using a CMS. We also had to innovate their visual identity, which had to be clarified in the making of new video-, imagery- and SoMe content as well. This assignment was also the first time working with SEO, and therefore we had to make sure that the site was SEO optimized. In this project my main focus was to edit and create the promotion video, which had to be represented on the new website." programmer="Skills & tools used" redskab1="Wordpress (CMS)" redskab2="HTML" redskab3="CSS" redskab4="Javascript" redskab5="Adobe Premiere Pro and After Effects" redskab6="Adobe Illustrator & Photoshop"/>
</section>
<section class="mt-40">
    <Projectsingular link="https://emiliefischer.com//kea/3sem/tailwind-starter-template-3/dist/index.html" nummeret="3" src="musikloftet.png" projektnummer="03" project_name="Musikloftet - 3th semester Tailwind project" text_project="This project was the first project of 3th semester in the elective Digital Design, and it was also the first time using Tailwind CSS and Tailwind components. The assignment was to design and develop a website that had the purpose of renting rehearsal rooms for musicians. This assignment was given with the purpose of learning how to work with Tailwind CSS. In this assignment my main focus was to design the website, create copy & microcopy and also to create the different elements in Adobe Illustrator. This assignment was also the first time using components in Figma, and therefore the beginning of learning how to work with component-based design." programmer="Skills & tools used" redskab1="HTML" redskab2="Tailwind CSS" redskab3="Tailwind Animations" redskab4="Adobe Illustrator" redskab5="Adobe Photoshop" redskab6="Figma"/>
</section>
<section class="mt-40">
    <Projectsingular link="https://skolemad.netlify.app/?fbclid=IwAR2XwG4E0yuH8DSqMrcU4es8UINkvrrACBLjZ7cXCKNADJS0UpiE0Cbx_d8" nummeret="4" src="skolemad.png" projektnummer="04" project_name="Skolemad - 3th semester Sveltekit project"  text_project="This project was, with a little knowledge of both Tailwind CSS and Svelte, the first time working with Sveltkit. The assignment was to redesign and develop Skolemad.dk, in which we had to focus on the user experience while ordering. This is also why not all the pages on the website are either functional or visible. If by interest, the way to begin the user journey you have to press 'login' or 'opret bruger'. In this assignment my main focus was to design the website and also to assemble the elements of the proces in Figma." programmer="Skills & tools used" redskab1="HTML" redskab2="CSS" redskab3="Sveltekit" redskab4="Adobe Illustrator" redskab5="Keyframe Animations" redskab6="Figma"/>
</section>
<section class="mt-40">
    <Projectsingular link="https://www.amadeusnoah.dk/kea/semester_2/09_cms/g11_ungdomsbyen/?fbclid=IwAR22zplX4keAPL9Z76mzaIos-Y1n9OBZN1oyTQgxQ5w2qhYnnt5PIFHRBOA" nummeret="5" src="ungdomsbyen.png" projektnummer="05" project_name="Ungdomsbyen - 2nd semester CMS project" text_project="This project was the first time using a content management system (CMS), in this case Wordpress. The purpose of this assignment was to redesign the website of Ungdomsbyen.dk, in which we had to mainly focus on the information architecture with the purpose of improving the user experience." programmer="Skills & tools used" redskab1="Wordpress (CMS) & PHP" redskab2="HTML" redskab3="CSS" redskab4="Javascript" redskab5="Yoast & Smush" redskab6="Adobe Illustrator"/>
</section>
<section class="mt-40">
    <Projectsingular link="https://emiliefischer.com/kea/3sem/Typografi/promoveringssite/dist/index.html" nummeret="6" src="crazyfont.png" projektnummer="06" project_name="Typography assignment - 3th semester" text_project="This assignment was one of the small ones taking part in the course of typography and variable fonts. The purpose was to design, create and build our own creative font and then build a promotion site. The promotion site had to show the use of our font i different scenarios with no limitations. Therefore, this assignment was also an assignment in which I got to learn more about the technical use of Adobe Photoshop and Adobe Illustrator." programmer="Skills & tools used" redskab1="HTML & CSS" redskab2="Tailwind CSS & keyframe animations" redskab3="Figma" redskab4="Adobe Photoshop" redskab5="Adobe Illustrator" redskab6="Adobe After Effects"/>
</section>


<section id="contact_me" class="grid bg-[#9B533F] h-auto place-items-center mt-[2rem]">
    <article class="grid place-items-center mt-10 mb-10">
    <h3 class="text-5xl md:text-6xl pl-10 pr-10 md:pl-0 md:pr-0  pb-9 p-2 text-center biaukai">Looking for a new intern?</h3>
    <p class="text-center px-10 md:px-0">I'm a multimedia design student looking for a digital internship! <br> If you're in need of an ambitious, curious and hardworking intern/coworker, feel free to send me a message in any kind!</p>
    <p class="text-center pt-5"> I would love to get in touch with you! </p>
    </article>

    <article class="md:flex md:gap-80 mb-8">
        <div class="grid place-items-center">
            <a href="sms:(+45)(28513171)">
            <img class="md:h-[3.9rem] h-[2rem]" src="phone.svg" alt="telephone icon"></a>
            <p class="pt-4 font-bold tracking-widest pb-6 text-[#F0E8CD]">+45 28 51 31 71</p>
        </div> 
        <div class="grid place-items-center">
        <a href="mailto:emiliefdhansen@hotmail.com">
            <img class="md:h-[3.9rem] h-[2rem]" src="mail.svg" alt="mail icon"></a>
            <p class="pt-4 font-bold tracking-widest pb-6 text-[#F0E8CD]">emiliefdhansen@hotmail.com</p>
        </div> 
        <div class="grid place-items-center">
            <a href="https://www.linkedin.com/in/emilie-fischer-515317234/" target="_blank">
            <img class="md:h-[3.9rem] h-[2rem]" src="linked.svg" alt="linkedin icon"></a>
            <p class="pt-4 font-bold tracking-widest pb-6 text-[#F0E8CD]">LinkedIn</p>
        </div> 
    </article>
</section>
</main>

<Footer/>

<style>
    .biaukai {
        font-family: 'BiauKai';
    }
</style>