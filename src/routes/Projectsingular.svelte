<script>
    import { page } from '$app/stores';

    export let project_name;
    export let opgavebeskrivelse;
    export let text_project;
    export let redskab;
    export let mine_arbejdsopgaver;
    export let programmer;
    export let projektnummer;
</script>



<section class="relative">
    <p class="absolute md:text-[10rem] text-[8rem] md:top-[-8rem] top-[-6rem] md:left-[85%] left-[70%]">{projektnummer}</p>
    <div class="md:grid md:grid-cols-2 bg-cyan-100 md:p-10">
        <div class="p-6">
        <h2 class="md:p-10 pb-5 text-5xl">{project_name}</h2>
        <div class="md:col-start-1 pb-5 md:col-span-1 md:pl-10">
            <h3 class="text-4xl md:pb-10 pb-7">{opgavebeskrivelse}</h3>
            <p>{text_project}</p>
        </div>

        </div>
        <div class="col-start-2 col-span-1 grid place-items-center">
            <img class="w-auto md:p-10"  src="bg_image.jpg" alt="">
            <button class:active={$page.url.pathname === '/projects'}>
                <a sveltekit:prefetch href="/projects" class="hover:underline text-black border-2 border-black place-self-center">Portfolio</a>
              </button>
        </div>
    </div>
    <div class="md:flex md:justify-between grid grid-cols-2 grid-rows-2">
        <img class="md:h-[23rem] w-auto"  src="kvadrat.jpg" alt="">
        <img class="md:h-[23rem] w-auto"  src="kvadrat.jpg" alt="">
        <img class="md:h-[23rem] w-auto"  src="kvadrat.jpg" alt="">
        <img class="md:h-[23rem] w-auto"  src="kvadrat.jpg" alt="">
    </div>
    <div class="md:grid md:grid-cols-2 bg-cyan-100 mdp-10">
        <div class="md:col-start-1 md:col-span-1 md:p-10 pl-5">
            <h3 class="text-4xl pb-10 pt-5">{mine_arbejdsopgaver}</h3>
            <p class="pr-14">{text_project}</p>
           
        </div>
        <div class="col-start-2 col-span-1 grid md:place-items-center pl-5 md:pl-0">
        <div class="md:col-start-1 md:col-span-1 md:p-10">
            <h3 class="text-4xl pb-10 pt-16">{programmer}</h3>
            <ul class="flex justify-between">
                <div>
            <li class="flex pb-4">
                <img src="kaffe.svg" alt="">
                <p>{redskab}</p>
            </li>
            <li class="flex pb-4">
                <img src="kaffe.svg" alt="">
                <p>{redskab}</p>
            </li>
            <li class="flex pb-4">
                <img src="kaffe.svg" alt="">
                <p>{redskab}</p>
            </li>
        </div>
        <div class="pr-14 md:pr-0">
            <li class="flex pb-4">
                <img src="kaffe.svg" alt="">
                <p>{redskab}</p>
            </li>
            <li class="flex pb-4">
                <img src="kaffe.svg" alt="">
                <p>{redskab}</p>
            </li>
            <li class="flex">
                <img src="kaffe.svg" alt="">
                <p>{redskab}</p>
            </li>
        </div>
        </ul>
        </div>
    </div>
</section>