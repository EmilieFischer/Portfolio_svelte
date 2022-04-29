<script>
	import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
    import Card from "./Card.svelte";
    import { page } from '$app/stores';
    import Button from "./Button.svelte";
</script>

<Header title="PORTFOLIO"/>
<main>
    <section class="md:grid md:grid-cols-2 md:p-28 p-4 gap-20">
        <div class="md:col-start-1 md:col-span-1 p-4">
            <h3 class="h3_hi text-[7rem] pb-4">Hi!</h3>
            <p class="p_hi text-4xl pb-10">My name is Emilie Fischer, and I'm studying Multimedia Design at Copenhagen School of Design and Technology.</p>
            <p>Currently I'm at my third semester where I have chosen the selective Digital Design. As a digital design student my main focus is to create and design digital solutions based on both user experience (UX) and user interface (UI). However, within my interests of multimedia design I'm also focusing on developing the digital solutions in respectively HTML, CSS and Javascript.</p>
            <p class="pt-5">As a person I'm curious and interested in all the different aspects of creating digital solutions together with other creative minds, which makes being a multimedia design student a very exciting and interesting study!</p>
            <p>If you look below you will find a little selection of some of my work and projects that I've done at KEA. Each project is a link, so if you click you will be led on to more information about each project.</p>
            <p class="pt-5">I hope you will enjoy!</p>
        </div>
        <div class="md:col-start-2 md:col-span-1 grid justify-items-center">
            <img class="h-auto md:w-[610px] p-2 border-8 border-[#9B533F]" src="kvadrat.jpg" alt="profilbillede">
            <Button buttontext="Want to know me a little bit more?"/>
        </div>
    </section>


    <div class="grid pt-20 pb-20 bg-[#3E4237]">
        <h2 class="text-6xl text-center text-[#F0E8CD] h3_hi">Some of my projects</h2>
    </div>

    <section class="grid md:grid-cols-3 md:grid-rows-2 gap-2 m-2">
        <div>
            <Card url="https://emiliefischer.com/kea/1sem/04_animation/website/spil.html" src="bagerensbroed.png" color="[#A6A396]" title="Bagerens Brød - Game" text="1st semester project"/>
            <!-- <Card url="#projekt1" src="bagerensbroed.png" color="red-200" title="Bagerens Brød - Game" text="1st semester project"/> -->

            <!-- <img class="bg-red-200" src="bagerensbroed.png" alt=""> -->
        </div>
        <div>
            <Card url="https://lineberner.com/kea/2_semester/dolah/" src="dolah.png" color="[#A6A396]" title="Do Lah Soap Bars" text="1st semester project"/>

            <!-- <img class="bg-blue-200"  src="dolah.png" alt=""> -->
        </div>
        <div>
            <Card url="https://skuret.eu/kea/3semester/musikloftet/" src="musikloftet.png" color="[#A6A396]" title="Musikloftet.dk" text="1st semester project"/>

            <!-- <img class="bg-green-200"  src="musikloftet.png" alt=""> -->
        </div>
        <div>
            <Card url="https://skolemad.netlify.app/?fbclid=IwAR3VsCZgsTrKTNjSM4pHKRn4V07VT2IHTS1168prkR_Fg4w_UlfmHk132MU" src="skolemad.png" color="[#A6A396]" title="Skolemad.dk" text="1st semester project"/>

            <!-- <img class="bg-yellow-200"  src="skolemad.png" alt=""> -->
        </div>
        <div>
                <Card url="https://www.amadeusnoah.dk/kea/semester_2/09_cms/g11_ungdomsbyen/?fbclid=IwAR1jmJ6_z9SIeg0W44v9erKhNS9gvnL0YrcPqOevjhrr-DdGMhyORcRlhFA" src="ungdomsbyen.png" color="[#A6A396]" title="Ungdomsbyen.dk" text="1st semester project"/>

            <!-- <img class="bg-purple-200"  src="ungdomsbyen.png" alt=""> -->
        </div>
        <div>
            <Card url="https://emiliefischer.com/kea/3sem/Typografi/promoveringssite/dist/index.html" src="crazyfont.png" color="[#A6A396]" title="Crazy Font" text="1st semester project"/>

            <!-- <img class="bg-orange-200"  src="crazyfont.png" alt=""> -->
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

    <section class="grid bg-[#9B533F] h-auto place-items-center">
        <div class="grid place-items-center mt-10 mb-10">
        <h3 class="text-6xl pb-9 p-2 text-center h3_hi">Do you have something <br> on your mind?</h3>
        <p class="text-center">Feel free to send me a message in any kind, <br> I would love to get in touch with you! </p>
        </div>

        <div class="md:flex md:gap-80 mb-8">
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

    <section class="md:grid md:grid-cols-2 p-4 md:p-10">
        <div class="md:col-start-1 md:col-span-1 p-10 grid justify-items-center">
            <div class="grid justify-items-center">
            <h3 class="text-4xl pb-8 text-center h3_hi">Looking for a new intern?</h3>
            <p class="text-center">I'm a multimedia design student looking for a digital internship. If you're in need of an ambitious, curious and hardworking intern/coworker, don't hesitate to send me a message. I'm sure I would love to hear from you.</p>
            <Button buttontext="Contact me here"/>
        </div>
        </div>
        <div class="col-start-2 col-span-1 grid place-items-center">
            <img class="h-96 w-auto border-8 p-2 border-[#9B533F]"  src="kvadrat.jpg" alt="profilbillede">
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

<style>
    .h3_hi {
        font-family: 'BiauKai';
    }

    .p_hi {
        font-family: 'BiauKai';

    }
</style>