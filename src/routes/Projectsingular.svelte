<script>
    import { page } from '$app/stores';

    export let project_name;
    export let opgavebeskrivelse;
    export let text_project;
    export let redskab;
    export let mine_arbejdsopgaver;
    export let programmer;
</script>



<section>
    <div class="md:grid md:grid-cols-2 bg-cyan-100 mdp-10">
        <h2 class="p-10 text-5xl">{project_name}</h2>
        <div class="md:col-start-1 md:col-span-1 md:p-10">
            <h3 class="text-4xl pb-10">{opgavebeskrivelse}</h3>
            <p>{text_project}</p>
           
        </div>
        <div class="col-start-2 col-span-1 grid place-items-center">
            <img class="h-96 w-auto"  src="/img/bg_image.jpg" alt="">
            <button class:active={$page.url.pathname === '/projects'}>
                <a sveltekit:prefetch href="/projects" class="hover:underline text-black border-2 border-black place-self-center">Portfolio</a>
              </button>
        </div>
    </div>
    <div class="flex justify-between">
        <img class="h-[23rem] w-auto"  src="/img/kvadrat.jpg" alt="">
        <img class="h-[23rem] w-auto"  src="/img/kvadrat.jpg" alt="">
        <img class="h-[23rem] w-auto"  src="/img/kvadrat.jpg" alt="">
        <img class="h-[23rem] w-auto"  src="/img/kvadrat.jpg" alt="">
    </div>
    <div class="md:grid md:grid-cols-2 bg-cyan-100 mdp-10">
        <div class="md:col-start-1 md:col-span-1 md:p-10">
            <h3 class="text-4xl pb-10">{mine_arbejdsopgaver}</h3>
            <p>{text_project}</p>
           
        </div>
        <div class="col-start-2 col-span-1 grid place-items-center">
        <div class="md:col-start-1 md:col-span-1 md:p-10">
            <h3 class="text-4xl pb-10">{programmer}</h3>
            <ul>
            <li class="flex pb-4">
                <img src="/img/kaffe.svg" alt="">
                <p>{redskab}</p>
            </li>
            <li class="flex pb-4">
                <img src="/img/kaffe.svg" alt="">
                <p>{redskab}</p>
            </li>
            <li class="flex pb-4">
                <img src="/img/kaffe.svg" alt="">
                <p>{redskab}</p>
            </li>
            <li class="flex pb-4">
                <img src="/img/kaffe.svg" alt="">
                <p>{redskab}</p>
            </li>
            <li class="flex pb-4">
                <img src="/img/kaffe.svg" alt="">
                <p>{redskab}</p>
            </li>
            <li class="flex">
                <img src="/img/kaffe.svg" alt="">
                <p>{redskab}</p>
            </li>
        </ul>
        </div>
    </div>
</section>