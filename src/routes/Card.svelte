<script>
    export let src;
    export let title;
    export let color;
    export let url;

</script>

<section id="card_projects">
    <a href={url} target="_blank">
    <img class="block bg-{color}" src={src} alt="project_picture">
    <div class="overlay">
        <div class="text-overlay">
            <h4 class="text-4xl">{title}</h4>
            <div class="overlay_underline"></div>
            <!-- <p class="overlay-text-description">{text}</p> -->
        </div>
    </div></a>
</section>




<style>
h4 {
    font-family: 'BiauKai';
}
.overlay-text-description {
    line-height: 1.5;
}
.overlay_underline {
    display: block;
    width: 75px;
    border: 1.5px solid;
    margin-top: 10px;
    margin-bottom: 15px;
    color: #9B533F;
}

#card_projects {
    position: relative;
}

img {
    display: block;
    width: 100%;
    height: auto;
}



.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: #ffffff52;
}

.text-overlay {
    color: #000000;
    position: absolute;
    top: 5%;
    left: 8%;
    max-width: 100%;
    margin-right: 12px;
}

#card_projects:hover .overlay {
    opacity: 0.9;
}

/* .slide-right {
	        animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes slide-right {
  0% {
            transform: translateX(0);
  }
  100% {
            transform: translateX(100px);
  }
} */


</style>


