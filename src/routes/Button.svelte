<script>
    export let buttontext;
    import { page } from '$app/stores';

</script>

<div class="buttons-coll">

<button class="custom-btn btn-4" class:active={$page.url.pathname === '/about'}>
    <a sveltekit:prefetch href="/about"><span>{buttontext}</span></a>
  </button>
</div>


  <style>
      /* .buttons-coll {
  width: 90%;
  text-align: center;
} */

button {
  margin: 20px;
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
  width: 20rem;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;
}
.btn-4 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-4:before,
.btn-4:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  background: #000;
  transition: all 0.3s ease;
}
.btn-4:before {
  height: 50%;
  width: 2px;
}
.btn-4:after {
  width: 20%;
  height: 2px;
}
.btn-4:hover:before {
  height: 100%;
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
  background: #000;
  transition: all 0.3s ease;
}
.btn-4 span:before {
  width: 2px;
  height: 50%;
}
.btn-4 span:after {
  width: 20%;
  height: 2px;
}
.btn-4 span:hover:before {
  height: 100%;
}
.btn-4 span:hover:after {
  width: 100%;
}

  </style>


  <!-- <button class:active={$page.url.pathname === '/about'}>
    <a sveltekit:prefetch href="/about" class="hover:underline text-black border-2 border-black place-self-center">{buttontext}</a>
  </button> -->

  <!-- Want to know a little more about me? -->