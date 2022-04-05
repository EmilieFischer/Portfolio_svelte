<script>
	import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
    import Card from "./Card.svelte";
    import { page } from '$app/stores';
</script>

<Header title="PORTFOLIO"/>
<main>
    <section class="md:grid md:grid-cols-2 bg-cyan-100 md:p-10 p-4">
        <div class="md:col-start-1 md:col-span-1 p-4">
            <h3 class="text-[7rem] pb-8">Hi!</h3>
            <p class="text-4xl pb-10">My name is Emilie Fischer and I'm currently studying Multimedia Design at Copenhagen School of Design and Technology.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam debitis dolorum illum sequi ea quos animi doloremque delectus nihil voluptatum, facere ad voluptatem esse necessitatibus in rem, et provident! Quisquam corporis atque voluptas at officia, vel beatae eligendi autem eaque culpa eveniet dolores minima exercitationem animi laboriosam perferendis a ad magni, itaque ea asperiores! Minima, dolores ullam. Eum, inventore impedit ma exercitationem animi laboriosam perferendis a ad magni, itaqma exercitationem animi laboriosam perferendis a ad magni, itaq?</p>
        </div>
        <div class="md:col-start-2 md:col-span-1">
            <img class="w-64 h-auto md:h-[710px] md:w-[710px] p-4" src="/img/kvadrat.jpg" alt="">
        </div>
    </section>

    <div class="grid pt-20 pb-10">
        <h2 class="text-6xl place-self-center">My portfolio</h2>
    </div>

    <section class="grid md:grid-cols-6 gap-5 md:grid-rows-8">
        <div class="md:col-start-1 md:col-span-3 md:row-start-1 md:row-span-1">
            <img  src="/img/bg_image.jpg" alt="">
        </div>
        <div class="md:col-start-4 md:col-span-3 md:row-start-1 md:row-span-1">
            <img  src="/img/bg_image.jpg" alt="">
        </div>
        <div class="md:col-start-1 md:col-span-2 md:row-start-2 md:row-span-2">
            <img  src="/img/bg_phone.jpg" alt="">
        </div>
        <div class="md:col-start-3 md:col-span-2 md:row-start-2 md:row-span-1">
            <img  src="/img/kvadrat.jpg" alt="">
        </div>
        <div class="md:col-start-5 md:col-span-2 md:row-start-2 md:row-span-2">
            <img  src="/img/bg_phone.jpg" alt="">
        </div>
        <div class="md:col-start-1 md:col-span-2">
            <img  src="/img/kvadrat.jpg" alt="">
        </div>
        <div class="md:col-start-3 md:col-span-2 md:row-start-3 md:row-span-2">
            <img  src="/img/bg_phone.jpg" alt="">
        </div>
        <div class="md:col-start-5 md:col-span-2">
            <img  src="/img/kvadrat.jpg" alt="">
        </div>

    </section>

    <section class="grid bg-red-200 md:h-80 h-[40rem] place-items-center">
        <div class="grid place-items-center mt-10 mb-10">
        <h3 class="text-6xl">Contact</h3>
        <p>hej med dig hej med dig hej med dig hej med dig</p>
        <p>hej med dig hej med dig</p>
        </div>

        <div class="md:flex md:gap-96 md:mb-10">
        <div class="grid place-items-center pb-16">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m4.78 15.27l2.54-.29c.61-.07 1.21.14 1.64.57l1.84 1.84c2.83-1.44 5.15-3.75 6.59-6.59l-1.85-1.85a1.99 1.99 0 0 1-.57-1.64l.29-2.52c.12-1.01.97-1.77 1.99-1.77h1.73c1.13 0 2.07.94 2 2.07c-.53 8.54-7.36 15.36-15.89 15.89c-1.13.07-2.07-.87-2.07-2v-1.73c-.01-1.01.75-1.86 1.76-1.98z"></path></svg>
            <p class="pt-4 md:pt-8">+45 2851 3171</p>
        </div> 
        <div class="grid place-items-center pb-16">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--clarity" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path fill="currentColor" d="M32.33 6a2 2 0 0 0-.41 0h-28a2 2 0 0 0-.53.08l14.45 14.39Z" class="clr-i-solid clr-i-solid-path-1"></path><path fill="currentColor" d="m33.81 7.39l-14.56 14.5a2 2 0 0 1-2.82 0L2 7.5a2 2 0 0 0-.07.5v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-.12-.61ZM5.3 28H3.91v-1.43l7.27-7.21l1.41 1.41Zm26.61 0h-1.4l-7.29-7.23l1.41-1.41l7.27 7.21Z" class="clr-i-solid clr-i-solid-path-2"></path><path fill="none" d="M0 0h36v36H0z"></path></svg>
            <p class="pt-4 md:pt-8">emiliefdhansen@hotmail.com</p>
        </div> 
        <div class="grid place-items-center pb-16">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--bi" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248c-.822 0-1.359.54-1.359 1.248c0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path></svg>
            <p class="pt-4 md:pt-8">LinkedIn</p>
        </div> 
    </div>
    </section>

    <div class="grid pt-20 pb-10">
    <h2 class="text-6xl place-self-center">Playing around</h2>
    </div>

    <section class="md:grid md:grid-cols-4 md:pl-10 md:pr-10 gap-4 mb-20">
        <img src="kvadrat.jpg" alt="kvadrat">
        <img src="kvadrat.jpg" alt="kvadrat">
        <img src="kvadrat.jpg" alt="kvadrat">
        <img src="kvadrat.jpg" alt="kvadrat">
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
            <img class="h-96 w-auto"  src="/img/kvadrat.jpg" alt="">
        </div>

    
    </section>

   


<!-- 
    <section class="md:flex md:gap-4">
        <Card title="Hej med dig" src="src/img/kvadrat.jpg" text="og ja hej igen"/>
        <Card title="Hej med dig" src="src/img/kvadrat.jpg" text="og ja hej igen"/>
        <Card title="Hej med dig" src="src/img/kvadrat.jpg" text="og ja hej igen"/>
    </section>
    <section class="md:flex md:gap-4">
        <Card title="Hej med dig" src="src/img/kvadrat.jpg" text="og ja hej igen"/>
        <Card title="Hej med dig" src="src/img/kvadrat.jpg" text="og ja hej igen"/>
        <Card title="Hej med dig" src="src/img/kvadrat.jpg" text="og ja hej igen"/>
    </section> -->
</main>

