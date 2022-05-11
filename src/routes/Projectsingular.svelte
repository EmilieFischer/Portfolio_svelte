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
    export let nummeret;
    export let link;

</script>



<section id={`p${nummeret}`} class="relative">
    <div class="pt-10 bg-[#3E4237] pb-10">
            <p class="absolute md:text-[10rem] text-[8rem] md:top-[-8rem] top-[-7rem] md:left-[85%] left-[67%] biaukai">{projektnummer}</p>
            <div class="md:m-10 m-[1rem] md:p-10 p-4 bg-[#F0E8CD] border-8 border-[#A6A396] md:grid md:grid-cols-2">
                <div class="md:col-start-1 pb-5 md:col-span-1">
                        <h2 class="pb-10 text-5xl md:text-6xl biaukai">{project_name}</h2>
                        <p>{text_project}</p>
                        <h3 class="text-3xl pt-16 md:pt-10 biaukai pb-10">{programmer}</h3>
                    <div class="flex">
                        <div class="pr-[3rem]">
                            <li class="flex pb-4 items-center">
                                <img class="pr-3 h-[1.3rem]" src="tools.svg" alt="tools icon">
                                <p class="text-[0.9rem] md:text-[1rem]">{redskab1}</p>
                            </li>
                            <li class="flex pb-4 items-center">
                                <img class="pr-3 h-[1.3rem]" src="tools.svg" alt="tools icon">
                                <p class="text-[0.9rem] md:text-[1rem]">{redskab2}</p>
                            </li>
                            <li class="flex items-center">
                                <img class="pr-3 h-[1.3rem]" src="tools.svg" alt="tools icon">
                                <p class="text-[0.9rem] md:text-[1rem]">{redskab3}</p>
                            </li>
                        </div>
                        <div class="md:pr-0">
                            <li class="flex pb-4 items-center">
                                <img class="pr-3 h-[1.3rem]" src="tools.svg" alt="tools icon">
                                <p class="text-[0.9rem] md:text-[1rem]">{redskab4}</p>
                            </li>
                            <li class="flex pb-4 items-center">
                                <img class="pr-3 h-[1.3rem]" src="tools.svg" alt="tools icon">
                                <p class="text-[0.9rem] md:text-[1rem]">{redskab5}</p>
                            </li>
                            <li class="flex">
                                <img class="pr-3 h-[1.3rem] items-center" src="tools.svg" alt="tools icon">
                                <p class="text-[0.9rem] md:text-[1rem]">{redskab6}</p>
                            </li>
                        </div>
                    </div>
            </div> 
            <div class="col-start-2 col-span-1 grid place-items-center ">
                <img {src} class="w-auto" alt="project_picture">
                <Button> <a href={link} target="blank">Visit the website</Button> 
            </div>
    </div>
</section>


<style>
#p1 {
    z-index: -1;
}

    .biaukai {
        font-family: 'BiauKai';
    }
</style>