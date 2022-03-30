<script>
    export let img_kompetence;
    export let title_kompetence;
    export let text_kompetence;
</script>



<section class="grid grid-cols-4 grid-rows-4 w-96 h-96">
    <div class=" row-start-1 row-span-1 col-span-1 p-5">
        <img class="h-[4rem]" src="{img_kompetence}" alt="">
    </div>
    <div class="col-start-2 col-span-7 pt-8">
        <h4 class="text-3xl">{title_kompetence}</h4>

    </div>
    <div class="row-start-2 row-span-4 col-start-2 col-span-6 pr-4">
        <p>{text_kompetence}</p>
    </div>
</section>