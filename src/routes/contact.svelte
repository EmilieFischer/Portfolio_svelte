<script>
import Footer from "./Footer.svelte";
import Header from "./Header.svelte";

</script>

<Header title="CONTACT ME"/>
<main>
 
<div class="grid pt-20 pb-10">
    <h2 class="text-6xl place-self-center pl-5 md:pl-0">Do you have something on your mind?</h2>
    <p class="place-self-center">Then please give me a call or write me an email!</p>
</div>

<div>
    <div class="text-center w-full">
     
    </div>
    <div
      class="max-w-screen-xl px-8 md:px-0 grid gap-8 grid-cols-1 md:grid-cols-2 py-16 mx-auto bg-gray-100 text-gray-900">
      <div class="flex flex-col">
        <div>
          <h2 class="text-4xl lg:text-5xl leading-tight">Lets talk about everything!</h2>
        </div>
        
      <div>
        <div>
          <span class="uppercase text-sm  font-bold">Full Name</span>
          <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="">
        </div>
        <div class="mt-8">
          <span class="uppercase text-sm  font-bold">Email</span>
          <input class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text">
        </div>
        <div class="mt-8">
          <span class="uppercase text-sm  font-bold">Message</span>
          <textarea
            class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div class="mt-8">
          <button
            class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
            Send Message
          </button>
        </div>
      </div>
    
    </div>
    <div class="grid place-content-center">
        <img class="h-[26rem] mb-5" src="kvadrat.jpg" alt="">
        <div class="md:col-start-1 md:col-span-1">
            <ul class="flex justify-between">
                <div>
            <li class="flex pb-4">
                <img src="kaffe.svg" alt="">
                <p>+45 2851 3171</p>
            </li>
            <li class="flex pb-4">
                <img src="kaffe.svg" alt="">
                <p>emiliefdhansen@hotmail.com</p>
            </li>
        </div>
    </div>
</div>
</div>
<section class="grid bg-red-200  place-items-center">
    <div class="grid place-items-center mt-10 mb-10">
    <h3 class="text-6xl">Let's be social!</h3>
    </div>

    <div class="flex md:gap-96 md:mb-10">
    
    <div class="grid place-items-center pb-16">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ri" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058c.782-.037 1.309-.142 1.797-.331a2.92 2.92 0 0 0 1.08-.702c.337-.337.538-.65.704-1.08c.19-.493.296-1.02.332-1.8c.052-1.104.058-1.49.058-4.029c0-2.474-.007-2.878-.058-4.029c-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08a2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06c1.065.05 1.79.217 2.428.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122c0 2.717-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465c-1.066.047-1.405.06-4.122.06c-2.717 0-3.056-.01-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153a4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"></path></svg>
        <p class="pt-4 md:pt-8">Instagram</p>
    </div> 
    <div class="grid place-items-center pb-16">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--bi" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248c-.822 0-1.359.54-1.359 1.248c0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path></svg>
        <p class="pt-4 md:pt-8">LinkedIn</p>
    </div> 
</div>
</section>
</main>

<Footer/>