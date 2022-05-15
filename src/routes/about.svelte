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

    <div class="grid pt-20 pb-20 md:mt-10 mt-16 ">
        <h2 class="text-6xl md:text-8xl pl-10 md:pl-28 roboto uppercase font-medium">A few words <br> about me</h2>
    </div>
    
    <section class="md:grid md:grid-cols-2 md:px-28 md:py-10 gap-20 " >
        <article class="md:col-start-1 md:col-span-1 p-4 px-10 md:px-0">
            <p class="roboto text-4xl pb-10">I’m a creative soul who newly discovered the possibility to actually spent your life working with what you love most - working in a creative environment - how amazing is that?!</p>
            <p> Being creative comes in many ways. I love to draw, paint, build, knit and crochet, and currently I’m practising the use of Adobe Illustrator to create digital works and drawings. A totally different world from drawing on paper, but so rewarding in so many ways! 
            </p>
            <p class="pt-5">In my spare time I use most of my time being social and networking. I’m an extrovert person, so being in social environments, whether it’s private or in the context of work, always gives me so much energy and a smile on my face. </p>
            <p>I moved to Copenhagen a few years ago, and I still investigate all the many opportunities this city has to offer. Even though I really love living in the city now and being social all the time, my love for the outdoor world will never disappear. I grew up on the country side, and sometimes when the city’s too noisy, I put on my outdoor clothes and disappear into nature. This is where I find my peace and have the time to think. 
            </p>
            <p class="pt-5">Sport has always been a big part of me and my spare time. This is where I retrieve my energy, especially when I do it together with my friends. I’ve spent most years of my life being a gymnast and dancer, but after being at Idrætshøjskole I discovered my love for a lot of different sports such as: swimming, kayaking and Beachvolley and so much more. When I’m not doing sports, working or other activities, you will find me sitting at a local bar og down by the water, drinking a cold beer, talking and laughing with my friends.</p>
            <p class="pt-5">
                As a person I always thrive to be as positive as possible, because being around positive people myself always helpes me, and I always find it very important to participate in the wellbeing of the people around me.
            </p>
        </article>
        <div class="md:col-start-2 md:col-span-1 grid justify-items-center mt-10 md:mt-0">
            <img class="h-auto md:w-[550px] w-[400px] p-2 " src="skitse.svg" alt="profilbillede">
           
        </div>
    </section>

  

    <!-- <div class="grid py-20 pl-10 pr-10 bg-[#3E4237] mt-10">
        <h2 class="text-5xl md:text-6xl text-center text-[#F0E8CD] biaukai">Who I am according to: <span class="text-3xl md:text-6xl"> <br> 16personalities.com </span></h2>
    </div> -->
    <div class="grid pt-20 pb-20 mt-20 md:mt-0 ">
        <h2 class="text-6xl md:text-8xl pl-6 md:pl-28  roboto uppercase font-medium">Who I am <br> according to <br> <span class="text-4xl md:text-8xl"> 16personalities.com </span></h2>
    </div>
    <section class="md:grid md:grid-cols-2 md:px-28 md:py-10 gap-20">
        <div class="p-4 px-10 md:px-0">
            <h3 class="text-3xl md:text-5xl pb-10 roboto uppercase">The protagonist</h3>
            <p class="pb-10">"Protagonists (ENFJs) are warm, idealistic, charismatic, creative, and social. With this wind at their backs, these types can thrive in many diverse roles, at any level of seniority. Moreover, they are generally likable and good-natured – qualities that can propel them to success wherever they have a chance to work with others."</p>
            <p>"As colleagues, Protagonists stand out for their desire to collaborate. They are always on the lookout for opportunities to create win-win situations and help their coworkers reach their full potential. These personalities foster equitable team environments where everyone – whatever their job title – can feel comfortable expressing their opinions and ideas."</p>

        </div>
        <div class="col-start-2 col-span-1 grid place-items-center pt-14 md:pt-0">
            <img class="md:h-[25rem] w-auto pb-24 px-5 md:px-0 md:pb-0" src="skala.svg" alt="profilbillede">
        </div>
    </section>

    <!-- <div class="grid py-20 px-8 bg-[#3E4237]">
        <h2 class="text-5xl md:text-6xl text-center text-[#F0E8CD] biaukai">Known and most used technologies</h2>
    </div> -->

    <div class="grid pt-20 pb-20 mt-20 md:mt-0 ">
        <h2 class="text-6xl md:text-8xl pl-6 md:pl-28  roboto uppercase font-medium">Known and used <br> technologies</h2>
    </div>
    <Evner/>

    <section id="contact_me" class=" md:grid md:grid-cols-3 h-auto mt-[2rem]">
        <article class="mt-10 mb-10">
        <h3 class="pr-10 md:pr-0  p-2 text-6xl md:text-8xl pl-6 md:pl-28 roboto uppercase font-medium">Looking for a new intern?</h3>    
        </article>
        <article>
        <p class="pl-6 md:pl-28 px-10 md:px-0 md:pt-[10rem] ">I'm a multimedia design student looking for a digital internship! <br> If you're in need of an ambitious, curious and hardworking intern/coworker, <br> feel free to send me a message in any kind! I would love to get in touch with you!</p>
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

</style>