<script>
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
    import { page } from '$app/stores';
    import Kompetencer from "./Allekompetencer.svelte";
    import Evner from "./Evner.svelte";
    import Button from "./Button.svelte"; 
</script>

<Header title="ABOUT ME"/>
<main>
    <section class="md:grid md:grid-cols-2 md:p-28 gap-20">
        <article class="md:col-start-1 md:col-span-1 p-4">
            <h3 class="biaukai text-[7rem] pb-4">A few words about me</h3>
            <p class="biaukai text-4xl pb-10">My name is Emilie Fischer, and I'm studying Multimedia Design at Copenhagen School of Design and Technology.</p>
            <p>Currently I'm at my third semester where I have chosen the selective Digital Design. As a digital design student my main focus is to create and design digital solutions based on both user experience (UX) and user interface (UI). However, within my interests of multimedia design I'm also focusing on developing the digital solutions in respectively HTML, CSS and Javascript.</p>
            <p class="pt-5">As a person I'm curious and interested in all the different aspects of creating digital solutions together with other creative minds, which makes being a multimedia design student a very exciting and interesting study!</p>
            <p>If you look below you will find a little selection of some of my work and projects that I've done at KEA. Each project is a link, so if you click you will be led on to more information about each project.</p>
            <p class="pt-5">I hope you will enjoy!</p>
        </article>
        <div class="md:col-start-2 md:col-span-1 grid justify-items-center">
            <img class="h-auto md:w-[610px] p-2 border-8 border-[#9B533F]" src="kvadrat.jpg" alt="profilbillede">
            <Button buttontext="Want to know me a little bit more?"/>
        </div>
    </section>

    <div class="grid pt-20 pb-20 bg-[#3E4237]">
        <h2 class="text-6xl text-center text-[#F0E8CD] h3_hi">Who am I according to: <br> 16personalities.com</h2>
    </div>
    <section class="md:grid md:grid-cols-2 p-10">
        <div class="md:col-start-1 md:col-span-1 p-10 grid">
            <h3 class=" text-[3rem] pb-10 biaukai ">The protagonist</h3>
            <p class="pb-10">"Protagonists (ENFJs) are warm, idealistic, charismatic, creative, and social. With this wind at their backs, these types can thrive in many diverse roles, at any level of seniority. Moreover, they are generally likable and good-natured – qualities that can propel them to success wherever they have a chance to work with others."</p>
            <p>"As colleagues, Protagonists stand out for their desire to collaborate. They are always on the lookout for opportunities to create win-win situations and help their coworkers reach their full potential. These personalities foster equitable team environments where everyone – whatever their job title – can feel comfortable expressing their opinions and ideas."</p>

        </div>
        <div class="col-start-2 col-span-1 grid place-items-center">
            <img class="h-[50rem] w-auto"  src="scale.svg" alt="profilbillede">
        </div>
    </section>

    <div class="grid pt-20 pb-20 bg-[#3E4237]">
        <h2 class="text-6xl text-center text-[#F0E8CD] h3_hi">Known and used technologies</h2>
    </div>
    <Evner/>

    <!-- <section class="grid bg-[#9B533F] h-auto place-items-center">
        <article class="grid place-items-center mt-10 mb-10">
        <h3 class="text-6xl pb-9 p-2 text-center h3_hi">What am I looking for <br> in my future internship?</h3>
        <div class="flex">
            <p class="text-center">Feel free to send me a message in any kind, I would love to get in touch with you! </p>
            <p class="text-center">Feel free to send me a message in any kind, I would love to get in touch with you! </p>
        </div>
        </article>

        <article class="md:flex md:gap-80 mb-8">
            <div class="grid place-items-center">
                <a href="sms:(+45)(28513171)">
                <img class="md:h-[3.9rem] h-[2rem]" src="phone.svg" alt="telephone icon"></a>
                <p class="pt-4 font-bold tracking-widest pb-6 text-[#F0E8CD]">Download my CV</p>
            </div> 
            <div class="grid place-items-center">
            <a href="mailto:emiliefdhansen@hotmail.com">
                <img class="md:h-[3.9rem] h-[2rem]" src="mail.svg" alt="mail icon"></a>
                <p class="pt-4 font-bold tracking-widest pb-6 text-[#F0E8CD]">Download my recommendations</p>
            </div> 
            <div class="grid place-items-center">
                <a href="https://www.linkedin.com/in/emilie-fischer-515317234/" target="_blank">
                <img class="md:h-[3.9rem] h-[2rem]" src="linked.svg" alt="linkedin icon"></a>
                <p class="pt-4 font-bold tracking-widest pb-6 text-[#F0E8CD]">LinkedIn</p>
            </div> 
        </article>
    </section> -->

    <!-- <div class="grid pt-20 pb-10">
        <h2 class="text-6xl place-self-center">A short resume of which things I've been working with at KEA</h2>
        </div> -->
    <!-- <section class="grid md:place-content-center">
    <div class="md:flex">
        <Kompetencer img_kompetence="kaffe.svg" title_kompetence="Teamwork" text_kompetence="halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj"/>
        <Kompetencer img_kompetence="kaffe.svg" title_kompetence="Web development" text_kompetence="halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj"/>
        <Kompetencer img_kompetence="kaffe.svg" title_kompetence="Tests" text_kompetence="halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj"/>
    </div>
    <div class="md:flex">
        <Kompetencer img_kompetence="kaffe.svg" title_kompetence="UI & UX" text_kompetence="halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj"/>
        <Kompetencer img_kompetence="kaffe.svg" title_kompetence="HTML og CSS" text_kompetence="halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj"/>
        <Kompetencer img_kompetence="kaffe.svg" title_kompetence="HTML og CSS" text_kompetence="halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj halløjs ja jajajaj"/>
    </div>
    </section> -->


    

</main>

<Footer/>

<style>
    .biaukai {
        font-family: 'BiauKai';
    }
</style>