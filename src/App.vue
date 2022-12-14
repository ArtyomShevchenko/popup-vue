<template ref="app" >
  <h1>Vue popups</h1>
  <button @click="openPopup" class="btn btn-primary">Open popup</button>
  <Popup ref="popupInfo">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet delectus ea expedita ab tenetur rem, quas non
    aliquid earum, iste inventore minima accusantium consequuntur obcaecati saepe vitae eum nesciunt. Quos.
  </Popup>

  <Popup ref="popupGreating">
    Hello,
    <br />you are on
    <br />Artem's website.
  </Popup>

  <p v-motion-slide-visible-top>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis veritatis dolore accusamus
    voluptatibus, beatae
    numquam dignissimos voluptas! Quibusdam iste dignissimos sunt, ipsa voluptatibus consequatur quis porro dolores,
    sint assumenda similique.</p>
  <p v-motion-slide-left>Dicta cupiditate quos expedita cum similique quaerat tenetur quisquam in quod adipisci aliquam
    unde repellat
    molestiae nemo autem, aperiam officia asperiores, provident praesentium est. Sapiente nihil eum provident nobis
    repellendus.</p>
  <p v-motion-slide-right>Provident nobis molestiae eos aliquid officiis dolores repellendus aperiam esse, assumenda
    nemo laborum? Aliquid
    assumenda ad, omnis accusantium dolorum excepturi unde dolor maiores iusto minima? Ab quisquam iusto recusandae
    mollitia.</p>
  <p v-motion-slide-left>Labore veniam non iure quaerat accusantium similique voluptatem asperiores omnis soluta, sint
    harum reiciendis,
    atque officiis aliquam optio quod voluptas praesentium placeat debitis impedit minima aut. Aperiam, illum? Dolores,
    eligendi!</p>
  <p v-motion-slide-right>Provident nobis molestiae eos aliquid officiis dolores repellendus aperiam esse, assumenda
    nemo laborum? Aliquid
    assumenda ad, omnis accusantium dolorum excepturi unde dolor maiores iusto minima? Ab quisquam iusto recusandae
    mollitia.</p>
  <p v-motion-slide-left>Labore veniam non iure quaerat accusantium similique voluptatem asperiores omnis soluta, sint
    harum reiciendis,
    atque officiis aliquam optio quod voluptas praesentium placeat debitis impedit minima aut. Aperiam, illum? Dolores,
    eligendi!</p>
  <p v-motion-slide-right>Provident nobis molestiae eos aliquid officiis dolores repellendus aperiam esse, assumenda
    nemo laborum? Aliquid
    assumenda ad, omnis accusantium dolorum excepturi unde dolor maiores iusto minima? Ab quisquam iusto recusandae
    mollitia.</p>
  <p v-motion-slide-left>Labore veniam non iure quaerat accusantium similique voluptatem asperiores omnis soluta, sint
    harum reiciendis,
    atque officiis aliquam optio quod voluptas praesentium placeat debitis impedit minima aut. Aperiam, illum? Dolores,
    eligendi!</p>
  <p>Nulla suscipit fuga reiciendis tempore distinctio. Adipisci iste ratione asperiores vitae, saepe cumque veniam odit
    commodi recusandae. Ratione consectetur eum, maxime corrupti vel temporibus nemo harum illum necessitatibus deleniti
    obcaecati?</p>
  <p>Dicta provident rem quibusdam fugiat, temporibus numquam ipsum enim in inventore laboriosam, nostrum mollitia
    cumque reprehenderit. Sequi ut excepturi minima aspernatur possimus ab fugiat ipsam? Nesciunt, odit. Aperiam, dicta
    tempora.</p>
  <p>Saepe aperiam sit porro quae suscipit, fugit molestias id tempora doloribus error soluta, velit laborum eum
    consequuntur ipsa temporibus! Ipsa, accusantium? Eligendi est voluptatem eos ab, fuga numquam excepturi odit.</p>
  <p>Recusandae, corrupti sint suscipit nesciunt quos doloribus minima quaerat quia veniam sit ducimus qui quod
    consequatur similique, porro quasi voluptate temporibus! Alias facilis perspiciatis atque quaerat laborum reiciendis
    rem ipsum.</p>
  <p>Adipisci officia accusamus perferendis labore itaque. Itaque laborum incidunt iure tempore, accusamus maxime
    architecto asperiores molestias, quam error dolorem eaque dolor, similique quis nam exercitationem quaerat facere.
    Tempora, et vitae!</p>

  <!-- castom v-motion from main.js -->
  <p v-motion-pop-bottom>Ducimus explicabo odit consequatur recusandae accusamus repudiandae totam libero ad esse
    dolores error quasi illum,
    repellat culpa in eveniet fuga sapiente deserunt nihil laboriosam. Cupiditate ut excepturi ipsam nisi earum.</p>
  <p v-motion :initial='{ opaciti: 0, x: -100 }' :visible='{ opacity: 1, x: 0 }'>Nostrum, rerum ullam possimus iusto
    consectetur temporibus culpa,
    animi voluptas perspiciatis reprehenderit ipsa
    sunt officia eligendi totam unde neque laudantium ab. Tempora ipsa similique illo quod, minima autem? Incidunt,
    odio?</p>

  <p> Taras... Fugit rem dicta dignissimos eaque, doloribus maiores? Nemo quo aspernatur dolorem, id ipsa, eum inventore
    deleniti
    odio, illum itaque explicabo perferendis ratione quod doloremque nulla! Nisi tempora minus quae amet?</p>
  <hr>
</template>

<script>
import Popup from "@/components/Popup.vue"

export default {
  components: { Popup },
  data() {
    return {
      show: true
    }
  },
  methods: {
    openPopup() {
      this.$refs.popupInfo.open()
    },
  },
  mounted() {
    // setTimeout(() => {
    //   this.$refs.popupGreating.open()
    // }, 1000)
  },
}
</script>

<style>
.hidden-scroll {
  overflow: hidden;
}

#app {
  overflow: hidden;
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
