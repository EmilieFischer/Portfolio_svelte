<script>
	import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
    import Card from "./Card.svelte";
    import { page } from '$app/stores';
    import Button from "./Button.svelte";
</script>

<Header title="PORTFOLIO"/>
<main>
    <section class="md:grid md:grid-cols-2 md:p-20 p-4">
        <div class="md:col-start-1 md:col-span-1 p-4">
            <h3 class="text-[7rem] pb-8">Hi!</h3>
            <img src="pil.png" alt="">
            <p class="text-4xl pb-10">My name is Emilie Fischer, and I'm studying Multimedia Design at Copenhagen School of Design and Technology.</p>
            <p>Currently I'm at my third semester where I have chosen the selective Digital Design. As a digital design student my main focus is to create and design digital solutions based on both user experience and user interface. However, within my interests of multimedia design I'm also focusing on developing the digital solutions in respectively HTML, CSS and Javascript. </p>
            <p>As a person I'm curious and interested in all the different aspects of creating digital solutions together with other creative minds, which makes being a multimedia design student a very exciting and interesting study!</p>
            <p>If you look below you will find a little selection of some of my work and projects that I've done at KEA. Each project is a link, so if you click you will be led on to more information about each project.</p>
            <p>I hope you will enjoy!</p>
        </div>
        <div class="md:col-start-2 md:col-span-1 grid justify-center">
            <img class="w-64 h-auto md:h-[710px] md:w-[710px] p-4" src="kvadrat.jpg" alt="">
            <Button buttontext="Want to know me a little bit more?"/>
        </div>
    </section>


    <div class="grid pt-20 pb-20 bg-blue-800">
        <h2 class="text-6xl place-self-center">My work</h2>
    </div>

    <section class="grid md:grid-cols-3 md:grid-rows-2">
        <div>
            <img class="bg-red-200" src="bagerensbroed.png" alt="">
        </div>
        <div>
            <img class="bg-blue-200"  src="dolah.png" alt="">
        </div>
        <div>
            <img class="bg-green-200"  src="musikloftet.png" alt="">
        </div>
        <div>
            <img class="bg-yellow-200"  src="skolemad.png" alt="">
        </div>
        <div>
            <img class="bg-purple-200"  src="ungdomsbyen.png" alt="">
        </div>
        <div>
            <img class="bg-orange-200"  src="crazyfont.png" alt="">
        </div>
    </section>

    <!-- <section class="grid md:grid-cols-6 gap-5 md:grid-rows-8">
        <div class="md:col-start-1 md:col-span-3 md:row-start-1 md:row-span-1">
            <img  src="projekt1.png" alt="">
        </div>
        <div class="md:col-start-4 md:col-span-3 md:row-start-1 md:row-span-1">
            <img  src="projekt3.png" alt="">
        </div>
        <div class="md:col-start-1 md:col-span-2 md:row-start-2 md:row-span-2">
            <img  src="bg_phone.jpg" alt="">
        </div>
        <div class="md:col-start-3 md:col-span-2 md:row-start-2 md:row-span-1">
            <img  src="projekt2kvadrat.png" alt="">
        </div>
        <div class="md:col-start-5 md:col-span-2 md:row-start-2 md:row-span-2">
            <img  src="bg_phone.jpg" alt="">
        </div>
        <div class="md:col-start-1 md:col-span-2">
            <img  src="kvadrat.jpg" alt="">
        </div>
        <div class="md:col-start-3 md:col-span-2 md:row-start-3 md:row-span-2">
            <img  src="bg_phone.jpg" alt="">
        </div>
        <div class="md:col-start-5 md:col-span-2">
            <img  src="kvadrat.jpg" alt="">
        </div>

    </section> -->

    <section class="grid bg-red-200 md:h-80 h-[40rem] place-items-center">
        <div class="grid place-items-center mt-10 mb-10">
        <h3 class="text-6xl md:pb-9">Do you have something on your mind?</h3>
        <p>Feel free to send me a message in any kind, I would love to get in touch with you! </p>
        </div>

        <div class="md:flex md:gap-80 md:mb-10">
        <div class="grid place-items-center pb-16">
            <a href="sms:(+45)(28513171)">
            <img class="h-[3.9rem]" src="phone.svg" alt=""></a>
            <p class="pt-4 font-bold tracking-widest pb-6 text-[#F0E8CD]">+45 28 51 31 71</p>
        </div> 
        <div class="grid place-items-center pb-16">
           <a href="mailto:emiliefdhansen@hotmail.com"><img class="h-[3.9rem]" src="mail.svg" alt=""></a>
            <p class="pt-4 font-bold tracking-widest pb-6 text-[#F0E8CD]">emiliefdhansen@hotmail.com</p>


        </div> 
        <div class="grid place-items-center pb-16">
            <a href="https://www.linkedin.com/in/emilie-fischer-515317234/" target="_blank"><img class="h-[4rem]" src="linked.svg" alt=""></a>
            <p class="pt-4 font-bold tracking-widest pb-6 text-[#F0E8CD]">LinkedIn</p>
        </div> 
    </div>
    </section>

    <!-- <div class="grid pt-20 pb-10">
    <h2 class="text-6xl place-self-center">Playing around</h2>
    </div> -->
<!-- 
    <section class="md:grid md:grid-cols-4 md:pl-10 md:pr-10 gap-4 mb-20">
        <img src="kvadrat.jpg" alt="kvadrat">
        <img src="kvadrat.jpg" alt="kvadrat">
        <img src="kvadrat.jpg" alt="kvadrat">
        <img src="kvadrat.jpg" alt="kvadrat">
    </section> -->

    <section class="md:grid md:grid-cols-2  p-10">
        <div class="md:col-start-1 md:col-span-1 p-10 grid justify-center">
            <h3 class="text-4xl pb-10 flex place-self-center">Looking for a new intern?</h3>
            <p>Multimedia designer looking for a digital workplace. <br> If you're missing an ambitious, curious and hardworking intern/coworker, don't hesitate to send me a message. I'm sure I would love to hear from you.</p>
            <Button buttontext="Contact me here"/>

        </div>
        <div class="col-start-2 col-span-1 grid place-items-center">
            <img class="h-96 w-auto"  src="kvadrat.jpg" alt="">
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


<Footer/>