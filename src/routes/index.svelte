<script>
	import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
    import Card from "./Card.svelte";
    import { page } from '$app/stores';
    import Button from "./Button.svelte";
    import Header2 from "./Header2.svelte";
import Header3 from "./Header3.svelte";

</script>



<Header3/>
<main class="overflow-hidden">
    <section class="md:mt-10 mt-16">
        <!-- <hr class="border-[#9B533F] border-2 w-full slide-in-right"> -->
        <hr class="border-[#201abd] border-2 w-full slide-in-right">

        <h1 class="py-10 pl-6 md:pl-0 md:text-center roboto text-6xl md:text-8xl font-medium">WELCOME TO MY PORTFOLIO</h1>
        <hr class="border-[#201abd] border-2 w-full slide-in-left">

    </section>
    <section class="md:grid md:grid-cols-2 md:p-28 gap-20 mt-10 md:mt-0">
        <article class="md:col-start-1 md:col-span-1 p-10 md:p-0">
            <h3 class="roboto text-[6rem] font-medium">Hi!</h3>
            <p class="roboto text-4xl pb-10">My name is Emilie Fischer, and I'm studying Multimedia Design at Copenhagen School of Design and Technology.</p>
            <p>Currently I'm at my third semester where I have chosen the selective Digital Design. As a digital designer my main focus is to do content creation and to design digital solutions based on my knowledge of user experience (UX) and user interface design (UI). However, within my interests of multimedia design I'm also focusing on developing the digital solutions in respectively HTML, CSS and Javascript.</p>
            <p class="pt-5">As a person I'm curious, motivated, responsibly and hardworking. In my upcoming internship I hope to increase my knowledge and skills within webdesign and other digital solutions and all it implies, and I hope to do so in a professional and safe environment in which I can participate in the work proces among other talented and creative people.</p>
            <p class="pt-5">If you look below you will find a little selection of some of my projects that I've done at KEA.</p>
            <p class="pt-5 roboto font-bold">I hope you will enjoy!</p>
            

        </article>
        <div class="md:col-start-2 md:col-span-1 grid justify-items-center">
            <img class="h-auto md:w-[450px] w-[300px] p-2 border-4 border-[#201abd]" src="profil-sh.png" alt="profilbillede">
            <Button> <a href="/about">Want to know me a little bit more?</a> </Button> 

        </div>
    </section>


    <!-- <div class="grid pt-20 pb-20 mt-20 md:mt-0 bg-[#6a6a6a]"> -->
        <!-- <div class="grid pt-20 pb-20 mt-20 md:mt-0 border-t-4 border-b-4 border-[#201abd]"> -->
            <div class="grid pt-20 pb-20 mt-20 md:mt-0 ">

        <!-- <h2 class="text-6xl text-center text-[#b7baff] roboto uppercase font-medium">Some of my projects</h2> -->
        <!-- <h2 class="text-6xl text-center  roboto uppercase font-medium">Some of my projects</h2> -->
        <h2 class="text-6xl md:text-8xl pl-6 md:pl-28  roboto uppercase font-medium">Some of <br> my projects</h2>


    </div>

    <section class="grid md:grid-cols-3 md:grid-rows-2 gap-2 m-2">
        <div>
            <Card url="/projects#p1" src="bagerensbroed.png"  title="Animation Game"/>
        </div>
        <div>
            <Card url="/projects#p2" src="dolah.png"  title="Do Lah Soap Bars"/>
        </div>
        <div>
            <Card url="/projects#p3" src="musikloftet.png"  title="Musikloftet.dk" />
        </div>
        <div>
            <Card url="/projects#p4" src="skolemad.png" title="Skolemad.dk"/>
        </div>
        <div>
            <Card url="/projects#p5" src="ungdomsbyen.png"  title="Ungdomsbyen.dk"/>
        </div>
        <div>
            <Card url="/projects#p6" src="crazyfont.png"  title="Typography Assignment"/>
        </div>
    </section>


    <section id="contact_me" class=" md:grid md:grid-cols-3 h-auto mt-[2rem]">
        <article class="mt-10 mb-10">
        <h3 class="pr-10 md:pr-0  p-2 text-6xl md:text-8xl  pl-10 md:pl-28 roboto uppercase font-medium">Looking for a new intern?</h3>    
        </article>
        <article>
        <p class=" pl-10 md:pl-28 px-10 md:px-0 md:pt-[10rem] ">I'm a multimedia design student looking for a digital internship! <br> If you're in need of an ambitious, curious and hardworking intern/coworker, <br> feel free to send me a message in any kind! I would love to get in touch with you!</p>
        </article>
        <article class="mt-10 mb-8 place-self-center col-start-3">
            <div class="grid place-items-center mb-5">
                <a href="sms:(+45)(28513171)">
                <img class="md:h-[3.9rem] h-[2rem]" src="phoneblue.svg" alt="telephone icon"></a>
                <p class="pt-4 font-bold tracking-widest pb-6 text-[#201abd]">+45 28 51 31 71</p>
            </div> 
            <div class="grid place-items-center mb-5">
            <a href="mailto:emiliefdhansen@hotmail.com">
                <img class="md:h-[3.9rem] h-[2rem]" src="mailblue.svg" alt="mail icon"></a>
                <p class="pt-4 font-bold tracking-widest pb-6 text-[#201abd]">emiliefdhansen@hotmail.com</p>
            </div> 
            <div class="grid place-items-center">
                <a href="https://www.linkedin.com/in/emilie-fischer-515317234/" target="_blank">
                <img class="md:h-[3.9rem] h-[2rem]" src="linkblue.svg" alt="linkedin icon"></a>
                <p class="pt-4 font-bold tracking-widest pb-6 text-[#201abd]">LinkedIn</p>
            </div> 
     
        </article>

       
    </section>

    <!-- <section id="contact_me" class="grid bg-[#9B533F] h-auto place-items-center mt-[2rem]">
        <article class="grid place-items-center mt-10 mb-10">
        <h3 class="text-5xl md:text-6xl pl-10 pr-10 md:pl-0 md:pr-0  pb-9 p-2 text-center roboto uppercase font-medium">Looking for a new intern?</h3>
        <p class="text-center px-10 md:px-0">I'm a multimedia design student looking for a digital internship! <br> If you're in need of an ambitious, curious and hardworking intern/coworker, feel free to send me a message in any kind!</p>
        <p class="text-center pt-5"> I would love to get in touch with you! </p>
        </article>

        <article class="md:flex md:gap-80 mb-8">
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
        </article>
    </section> -->

</main>


<Footer/>

<style>
    /* .biaukai {
        font-family: 'BiauKai';
    } */

    .roboto {
        font-family: 'roboto flex' ;
    }

  
    .slide-in-right {
    animation: slide-in-right 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes slide-in-right {
0% {
        transform: translateX(-100%);
opacity: 1;
}
100% {
        transform: translateX(0);
opacity: 1;
}
}

.slide-in-left {
    animation: slide-in-left 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes slide-in-left {
0% {
        transform: translateX(100%);
opacity: 1;
}
100% {
        transform: translateX(0);
opacity: 1;
}
}

  
</style>