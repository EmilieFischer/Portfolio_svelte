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
    <Projectsingular project_name="Tema 1" opgavebeskrivelse="Opgavebeskrivelse" text_project="Hej med dig Hej med dig Hej med dig Hej med dig Hej med dig Hej med dig Hej med dig Hej med dig" mine_arbejdsopgaver="Mine arbejdsopgaver" programmer="Programmer jeg har brugt" redskab="HTML CSS"/>
</section>

</main>

<Footer/>