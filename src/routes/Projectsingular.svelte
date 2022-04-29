<script>
    import { page } from '$app/stores';
    import Button from './Button.svelte'; 

    export let project_name;
    export let text_project;
    export let redskab1;
    export let redskab2;
    export let redskab3;
    export let redskab4;
    export let redskab5;
    export let redskab6;
    export let programmer;
    export let projektnummer;
    export let src;

</script>



<section class="relative">
    <p class="absolute md:text-[10rem] text-[8rem] md:top-[-8rem] top-[-6rem] md:left-[85%] left-[70%] biaukai">{projektnummer}</p>
    <div class="md:grid md:grid-cols-2 bg-[#A6A396] md:p-10">
        <div class="p-6">
        <h2 class="md:p-10 pb-5 text-5xl">{project_name}</h2>
        <div class="md:col-start-1 pb-5 md:col-span-1 md:pl-10">
            <p>{text_project}</p>
            <h3 class="text-3xl pb-10  pt-16 md:pt-10">{programmer}</h3>
            <div class="flex">
            <div class="pr-28">
                <li class="flex pb-4 items-center">
                    <img class="pr-3" src="tools.svg" alt="tools icon">
                    <p>{redskab1}</p>
                </li>
                <li class="flex pb-4 items-center">
                    <img class="pr-3" src="tools.svg" alt="tools icon">
                    <p>{redskab2}</p>
                </li>
                <li class="flex items-center">
                    <img class="pr-3" src="tools.svg" alt="tools icon">
                    <p>{redskab3}</p>
                </li>
            </div>
            <div class="pr-14 md:pr-0">
                <li class="flex pb-4 items-center">
                    <img class="pr-3" src="tools.svg" alt="tools icon">
                    <p>{redskab4}</p>
                </li>
                <li class="flex pb-4 items-center">
                    <img class="pr-3" src="tools.svg" alt="tools icon">
                    <p>{redskab5}</p>
                </li>
                <li class="flex">
                    <img class="pr-3 items-center" src="tools.svg" alt="tools icon">
                    <p>{redskab6}</p>
                </li>
            </div>
        </div>
        </div>
        </div>
        <div class="col-start-2 col-span-1 grid place-items-center">
            <img {src} class="w-auto" alt="project_picture">
            <Button buttontext="Se website"/>

        </div>
    </div>
    <!-- <div class="md:flex md:justify-between grid grid-cols-2 grid-rows-2">
        <img class="md:h-[23rem] w-auto"  src="bageren1.png" alt="">
        <img class="md:h-[23rem] w-auto"  src="kvadrat.jpg" alt="">
        <img class="md:h-[23rem] w-auto"  src="kvadrat.jpg" alt="">
        <img class="md:h-[23rem] w-auto"  src="kvadrat.jpg" alt="">
    </div> -->
    <!-- <div class="md:grid md:grid-cols-2 bg-cyan-100 mdp-10">
        <div class="md:col-start-1 md:col-span-1 md:p-10 pl-5">
            <h3 class="text-4xl pb-10 pt-5 md:pt-0">{mine_arbejdsopgaver}</h3>
            <p class="pr-14">{text_project}</p>
           
        </div>
        <div class="col-start-2 col-span-1 grid md:place-items-center pl-5 md:pl-0">
        <div class="md:col-start-1 md:col-span-1 md:p-10">
            <h3 class="text-4xl pb-10 pt-16 md:pt-0">{programmer}</h3>
            <ul class="flex justify-between">
                <div>
            <li class="flex pb-4">
                <img src="kaffe.svg" alt="">
                <p>{redskab1}</p>
            </li>
            <li class="flex pb-4">
                <img src="kaffe.svg" alt="">
                <p>{redskab2}</p>
            </li>
            <li class="flex pb-4">
                <img src="kaffe.svg" alt="">
                <p>{redskab3}</p>
            </li>
        </div>
        <div class="pr-14 md:pr-0">
            <li class="flex pb-4">
                <img src="kaffe.svg" alt="">
                <p>{redskab4}</p>
            </li>
            <li class="flex pb-4">
                <img src="kaffe.svg" alt="">
                <p>{redskab5}</p>
            </li>
            <li class="flex">
                <img src="kaffe.svg" alt="">
                <p>{redskab6}</p>
            </li>
        </div>
        </ul>
        </div>
    </div> -->
</section>


<style>
    .biaukai {
        font-family: 'BiauKai';
    }
</style>