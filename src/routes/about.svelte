<script>
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
    import { page } from '$app/stores';
    import Kompetencer from "./Allekompetencer.svelte";
    import Evner from "./Evner.svelte";
</script>

<Header title="ABOUT ME"/>
<main>
    <section class="md:grid md:grid-cols-2 bg-cyan-100 p-10">
        <div class="md:col-start-1 md:col-span-1 p-10 grid">
            <h3 class="text-4xl pb-10">Looking for a new intern?</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam debitis dolorum illum sequi ea quos animi doloremque delectus nihil voluptatum, facere ad voluptatem esse necessitatibus in rem, et provident! Quisquam corporis atque voluptas at officia, vel beatae eligendi autem eaque culpa eveniet dolores minima exercitationem animi laboriosam perferendis a ad magni, itaque ea asperiores! Minima, dolores ullam. Eum, inventore impedit ma exercitationem animi laboriosam perferendis a ad magni, itaqma exercitationem animi laboriosam perferendis a ad magni, itaq?</p>
            <button class:active={$page.url.pathname === '/projects'}>
                <a sveltekit:prefetch href="/projects" class="hover:underline text-black border-2 border-black place-self-center">Portfolio</a>
              </button>
        </div>
        <div class="col-start-2 col-span-1 grid place-items-center">
            <img class="h-96 w-auto"  src="kvadrat.jpg" alt="profilbillede">
        </div>
    </section>
    <div class="grid pt-20 pb-20 bg-blue-800">
        <h2 class="text-6xl place-self-center">Known and used technologies</h2>
    </div>
    <Evner/>

    <div class="grid pt-20 pb-10">
        <h2 class="text-6xl place-self-center">Kompetencer</h2>
        </div>
<section class="grid md:place-content-center">
    <div class="md:flex">
        <Kompetencer img_kompetence="kaffe.svg" title_kompetence="HTML og CSS" text_kompetence="halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj"/>
        <Kompetencer img_kompetence="kaffe.svg" title_kompetence="HTML og CSS" text_kompetence="halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj"/>
        <Kompetencer img_kompetence="kaffe.svg" title_kompetence="HTML og CSS" text_kompetence="halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj"/>
    </div>
    <div class="md:flex">
        <Kompetencer img_kompetence="kaffe.svg" title_kompetence="HTML og CSS" text_kompetence="halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj"/>
        <Kompetencer img_kompetence="kaffe.svg" title_kompetence="HTML og CSS" text_kompetence="halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj"/>
        <Kompetencer img_kompetence="kaffe.svg" title_kompetence="HTML og CSS" text_kompetence="halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj"/>
    </div>
    </section>

    <section class="md:grid md:grid-cols-2 bg-cyan-100 p-10">
        <div class="md:col-start-1 md:col-span-1 p-10 grid">
            <h3 class="text-4xl pb-10">Looking for a new intern?</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam debitis dolorum illum sequi ea quos animi doloremque delectus nihil voluptatum, facere ad voluptatem esse necessitatibus in rem, et provident! Quisquam corporis atque voluptas at officia, vel beatae eligendi autem eaque culpa eveniet dolores minima exercitationem animi laboriosam perferendis a ad magni, itaque ea asperiores! Minima, dolores ullam. Eum, inventore impedit ma exercitationem animi laboriosam perferendis a ad magni, itaqma exercitationem animi laboriosam perferendis a ad magni, itaq?</p>
            <button class:active={$page.url.pathname === '/projects'}>
                <a sveltekit:prefetch href="/projects" class="hover:underline text-black border-2 border-black place-self-center">Portfolio</a>
              </button>
        </div>
        <div class="col-start-2 col-span-1 grid place-items-center">
            <img class="h-96 w-auto"  src="kvadrat.jpg" alt="profilbillede">
        </div>
    </section>

    <section class="md:grid md:grid-cols-2 bg-cyan-100 p-10">
        <div class="md:col-start-1 md:col-span-1 p-10 grid">
            <h3 class="text-4xl pb-10">Looking for a new intern?</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam debitis dolorum illum sequi ea quos animi doloremque delectus nihil voluptatum, facere ad voluptatem esse necessitatibus in rem, et provident! Quisquam corporis atque voluptas at officia, vel beatae eligendi autem eaque culpa eveniet dolores minima exercitationem animi laboriosam perferendis a ad magni, itaque ea asperiores! Minima, dolores ullam. Eum, inventore impedit ma exercitationem animi laboriosam perferendis a ad magni, itaqma exercitationem animi laboriosam perferendis a ad magni, itaq?</p>
            <button class:active={$page.url.pathname === '/projects'}>
                <a sveltekit:prefetch href="/projects" class="hover:underline text-black border-2 border-black place-self-center">Portfolio</a>
              </button>
        </div>
        <div class="col-start-2 col-span-1 grid place-items-center">
            <img class="h-96 w-auto"  src="kvadrat.jpg" alt="profilbillede">
        </div>
    </section>

</main>

<Footer/>