<script>
import Footer from "./Footer.svelte";
import Header from "./Header.svelte";
import Button from "./Button.svelte";

</script>

<Header title="CONTACT ME"/>
<main>
 
<div class="grid pt-20 pb-10">
    <h2 class="text-6xl place-self-center pl-5 md:pl-0 biaukai">Do you have something on your mind?</h2>
    <p class="place-self-center">Then please give me a call or write me an email!</p>
</div>

<div>
    <div class="text-center w-full">
     
    </div>
    <div
      class="max-w-screen-xl px-8 md:px-0 grid gap-8 grid-cols-1 md:grid-cols-2 py-16 mx-auto ">
      <div class="flex flex-col">
        <div>
          <h2 class="text-4xl lg:text-5xl leading-tight pb-9 ">Lets talk about everything!</h2>
        </div>
        
      <div>
        <div>
          <span class="uppercase text-sm  font-bold">Full Name / Company</span>
          <input class="w-full  text-gray-900 border-2  bg-[#F6F5F5] border-black mt-2 p-3 focus:outline-none focus:shadow-outline"
            type="text" placeholder="">
        </div>
        <div class="mt-8">
          <span class="uppercase text-sm  font-bold">Email</span>
          <input class="w-full border-2 border-black mt-2 p-3 bg-[#F6F5F5]  focus:outline-none focus:shadow-outline"
            type="text">
        </div>
        <div class="mt-8">
          <span class="uppercase text-sm  font-bold">Please write your message here</span>
          <textarea
            class="w-full h-32 border-2 border-black mt-2 p-3 bg-[#F6F5F5] focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div class="mt-8">
          <Button buttontext="Send me a message!"/>

        </div>
      </div>
    
    </div>
    <div class="grid place-content-center">
        <img class="h-[26rem] mb-5 p-2 border-8 border-[#9B533F]" src="kvadrat.jpg" alt="profilbillede">
        <div class="md:col-start-1 md:col-span-1">
            <ul class="flex justify-between">
                <div>
            <li class="flex pb-4">
                <img src="kaffe.svg" alt="coffee icon">
                <p>+45 2851 3171</p>
            </li>
            <li class="flex pb-4">
                <img src="kaffe.svg" alt="coffee icon">
                <p>emiliefdhansen@hotmail.com</p>
            </li>
        </div>
    </div>
</div>
</div>



<section class="grid bg-[#9B533F] h-auto place-items-center">
  <div class="grid place-items-center mt-10 mb-10">
  <h3 class="text-6xl pb-9 p-2 text-center biaukai">Let's be social!</h3>
  <p class="text-center">Feel free to send me a message in any kind, <br> I would love to get in touch with you! </p>
  </div>

  <div class="md:flex md:gap-80 mb-8">
      <div class="grid place-items-center">
          <a href="sms:(+45)(28513171)">
          <img class="md:h-[3.9rem] h-[2rem]" src="instagram.svg" alt="telephone icon"></a>
          <p class="pt-4 font-bold tracking-widest pb-6 text-[#F0E8CD]">Instagram</p>
      </div> 
      <div class="grid place-items-center">
          <a href="https://www.linkedin.com/in/emilie-fischer-515317234/" target="_blank">
          <img class="md:h-[3.9rem] h-[2rem]" src="linked.svg" alt="linkedin icon"></a>
          <p class="pt-4 font-bold tracking-widest pb-6 text-[#F0E8CD]">LinkedIn</p>
      </div> 
</div>
</section>



</main>

<Footer/>

<style>
  .biaukai {
      font-family: 'BiauKai';
  }
</style>