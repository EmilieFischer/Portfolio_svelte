<script>
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
    import { page } from '$app/stores';
    import Kompetencer from "./Allekompetencer.svelte";
    import Evner from "./Evner.svelte";
    import Button from "./Button.svelte"; 
import Header3 from "./Header3.svelte";
</script>

<Header3/>
<main class="overflow-hidden">
    
    <section class="md:grid md:grid-cols-2 md:px-28 md:py-10 gap-20">
        <article class="md:col-start-1 md:col-span-1 p-4 px-10 md:px-0">
            <h3 class="biaukai text-6xl md:text-6xl leading-tight pb-16 md:mt-10 mt-28">A few words about me</h3>
            <p>Currently I'm at my third semester where I have chosen the selective Digital Design. As a digital design student my main focus is to create and design digital solutions based on both knowledge about user experience (UX) and user interface design (UI). However, within my interests of multimedia design I'm also focusing on developing the digital solutions in respectively HTML, CSS and Javascript.</p>
            <p class="pt-5">As a person I'm curious and interested in all the different aspects of creating digital solutions together with other creative people. In my upcoming internship I'm hoping to develop my knowledge and skills within designing digital solutions. I hope to do so in a professional environment in which I can participate and share my knowledge and learn from </p>
            <p>If you look below you will find a little selection of some of my work and projects that I've done at KEA. Each project is a link, so if you click you will be led on to more information about each project.</p>
            <p class="pt-5 pb-10 md:pb-0">I hope you will enjoy!</p>
        </article>
        <div class="md:col-start-2 md:col-span-1 grid justify-items-center">
            <img class="h-auto md:w-[450px] w-[300px] p-2 border-4 border-[#9B533F]" src="profil.png" alt="profilbillede">
        </div>
    </section>


    <div class="grid py-20 pl-10 pr-10 bg-[#3E4237] mt-10">
        <h2 class="text-5xl md:text-6xl text-center text-[#F0E8CD] biaukai">Who I am according to: <span class="text-3xl md:text-6xl"> <br> 16personalities.com </span></h2>
    </div>
    <section class="md:grid md:grid-cols-2 md:px-28 md:py-10 gap-20">
        <div class="p-4 px-10 md:px-0">
            <h3 class="text-3xl md:text-5xl pb-10 biaukai">The protagonist</h3>
            <p class="pb-10">"Protagonists (ENFJs) are warm, idealistic, charismatic, creative, and social. With this wind at their backs, these types can thrive in many diverse roles, at any level of seniority. Moreover, they are generally likable and good-natured – qualities that can propel them to success wherever they have a chance to work with others."</p>
            <p>"As colleagues, Protagonists stand out for their desire to collaborate. They are always on the lookout for opportunities to create win-win situations and help their coworkers reach their full potential. These personalities foster equitable team environments where everyone – whatever their job title – can feel comfortable expressing their opinions and ideas."</p>

        </div>
        <div class="col-start-2 col-span-1 grid place-items-center pt-14 md:pt-0">
            <img class="md:h-[25rem] w-auto pb-24 px-5 md:px-0 md:pb-0" src="skala.svg" alt="profilbillede">
        </div>
    </section>

    <div class="grid py-20 px-8 bg-[#3E4237]">
        <h2 class="text-5xl md:text-6xl text-center text-[#F0E8CD] biaukai">Known and most used technologies</h2>
    </div>
    <Evner/>

    <section id="contact_me" class="grid bg-[#9B533F] h-auto place-items-center mt-[2rem]">
        <article class="grid place-items-center mt-10 mb-10">
        <h3 class="text-5xl md:text-6xl pl-10 pr-10 md:pl-0 md:pr-0  pb-9 p-2 text-center biaukai">Looking for a new intern?</h3>
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
    </section>
    

</main>

<Footer/>

<style>
    .biaukai {
        font-family: 'BiauKai';
    }
</style>