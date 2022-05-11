<script>
    // export let buttontext;
    import { page } from '$app/stores';
    // export let link;

</script>

<div class="buttons-coll">

<!-- <button class="custom-btn btn-4" class:active={$page.url.pathname === '/about'}>
    <a sveltekit:prefetch href="/about"><span>{buttontext}</span></a>
  </button> -->

<button class="custom-btn btn-4"><span><slot/></span> 
  </button>
</div>


  <style>
      /* .buttons-coll {
  width: 90%;
  text-align: center;
} */

button {
  margin-top: 20px;
  margin-bottom: 20px;
}

.custom-btn {
  padding: 20px 25px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.btn-4 {
  width: 16rem;
  height: 60px;
  line-height: 70px;
  padding: 0;
  border: none;
}
.btn-4 span {
  position: relative;
  display: block;
  width: 100%;
  height: 112%;
}
.btn-4:before,
.btn-4:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  background: #9B533F;
  transition: all 0.3s ease;
}
.btn-4:before {
  height: 50%;
  width: 4px;
}
.btn-4:after {
  width: 20%;
  height: 4px;
}
.btn-4:hover:before {
  height: 112%;
}
.btn-4:hover:after {
  width: 100%;
}
.btn-4 span:before,
.btn-4 span:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  background: #9B533F;
  transition: all 0.3s ease;
}
.btn-4 span:before {
  width: 4px;
  height: 50%;
}
.btn-4 span:after {
  width: 50%;
  height: 4px;
}
.btn-4 span:hover:before {
  height: 100%;
}
.btn-4 span:hover:after {
  width: 100%;
}

@media screen and (min-width: 600px) {
  .btn-4 {
  width: 20rem;
  
}
}

  </style>


  <!-- <button class:active={$page.url.pathname === '/about'}>
    <a sveltekit:prefetch href="/about" class="hover:underline text-black border-2 border-black place-self-center">{buttontext}</a>
  </button> -->

  <!-- Want to know a little more about me? -->