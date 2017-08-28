<template>
  <div>
    <nav class="main-menu"></nav>
    <div class="container">
      <section class="top">
        <div class="top__photo">
          <img src="http://rscardwp.px-lab.com/wp-content/uploads/2015/11/robert_WP-1-299x347.jpg">
        </div>
        <div class="top__info">
          <header class="top__header">
            <v-label triangle="bottom" use="success">Hello</v-label>
            <h1>I'm <b>Vladimir Voytenko</b></h1>
            <span>Full Stack Developer</span>
          </header>
          <dl>
            <dt>Name: </dt>
            <dd class="muted-text">Vladimir Voytenko</dd>
            <dt>Age: </dt>
            <dd class="muted-text">23</dd>
            <dt>E-mail: </dt>
            <dd class="muted-text">voldemar.krs@gmail.com</dd>
            <dt>Phone:</dt>
            <dd class="muted-text">+7 (983) 503 36 95</dd>
            <dt>Freelance:</dt>
            <dd class="muted-text">Available</dd>
            <dt><v-label use="success">On vacation</v-label></dt>
            <dd class="muted-text">I would like to</dd>
          </dl>
        </div>
        <footer class="top__footer">
          <gapped :gap="30">
            <icon name="facebook" scale="1.3"></icon>
            <icon name="twitter" scale="1.3"></icon>
            <icon name="google-plus" scale="1.3"></icon>
            <icon name="vk" scale="1.3"></icon>
          </gapped>
        </footer>
      </section>
      <section class="main main--centred">
        <p>
          <btn size="lg" :onClick="click">Download Resume</btn>
        </p>
        <p>
          Hello! I'm, Vladimir Voytenko. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ab cumque ducimus enim eum labore, natus porro quisquam rerum? Ipsum, itaque?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Assumenda exercitationem fugit inventore itaque quidem similique velit, vitae. Culpa, fugiat, quaerat.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, vel.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veniam!
        </p>
      </section>
      <section class="main">
        <h2 class="main__title">Professional skills</h2>
        <article class="main__content">
          <p>text</p>
        </article>
      </section>
      <br>
      <form id="search">
        <label>Search <input name="query" v-model="searchQuery"></label>
      </form>
      <datas
        :data="gridData"
        :columns="gridColumns"
        :filter-key="searchQuery">
      </datas>
      <div>
        <gapped :gap=30>
          <img src="https://placehold.it/154x240">
          <img src="https://placehold.it/154x240">
          <img src="https://placehold.it/154x240">
          <img src="https://placehold.it/154x240">
          <img src="https://placehold.it/154x240">
          <img src="https://placehold.it/154x240">
          <img src="https://placehold.it/154x240">
          <img src="https://placehold.it/154x240">
          <img src="https://placehold.it/154x240">
        </gapped>
      </div>
      <div>
        <gapped>
          <icon name="amazon" scale="2"></icon>
          <icon name="attachment"></icon>
          <icon name="backward"></icon>
          <icon name="bell"></icon>
          <icon name="bin"></icon>
          <icon name="bold"></icon>
          <icon name="book"></icon>
          <icon name="bookmark"></icon>
          <icon name="bookmarks"></icon>
          <icon name="books"></icon>
          <icon name="bubble"></icon>
          <icon name="bubble2"></icon>
          <icon name="bubbles"></icon>
          <icon name="bubbles2"></icon>
          <icon name="bubbles3"></icon>
          <icon name="bubbles4"></icon>
          <icon name="checkmark"></icon>
          <icon name="cog"></icon>
          <icon name="cogs"></icon>
          <icon name="crop"></icon>
          <icon name="cross"></icon>
          <icon name="deviantart"></icon>
          <icon name="embed"></icon>
          <icon name="enlarge"></icon>
          <icon name="enter"></icon>
          <icon name="envelop"></icon>
          <icon name="equalizer"></icon>
          <icon name="equalizer2"></icon>
          <icon name="exit"></icon>
          <icon name="facebook"></icon>
          <icon name="facebook2"></icon>
          <icon name="filter"></icon>
          <icon name="finder"></icon>
          <icon name="fire"></icon>
          <icon name="first"></icon>
          <icon name="forward"></icon>
          <icon name="forward2"></icon>
          <icon name="gift"></icon>
          <icon name="google"></icon>
          <icon name="google2"></icon>
          <icon name="google3"></icon>
          <icon name="equalizer2"></icon>
          <icon name="google-plus"></icon>
          <icon name="google-plus2"></icon>
          <icon name="google-plus3"></icon>
          <icon name="heart"></icon>
          <icon name="image"></icon>
          <icon name="infinite"></icon>
          <icon name="instagram"></icon>
          <icon name="italic"></icon>
          <icon name="key"></icon>
          <icon name="last"></icon>
          <icon name="lastfm"></icon>
          <icon name="lastfm2"></icon>
          <icon name="leaf"></icon>
          <icon name="link"></icon>
          <icon name="list"></icon>
          <icon name="list2"></icon>
          <icon name="list-numbered"></icon>
          <icon name="lock"></icon>
          <icon name="loop"></icon>
          <icon name="loop2"></icon>
          <icon name="menu"></icon>
          <icon name="minus"></icon>
          <icon name="next"></icon>
          <icon name="pagebreak"></icon>
          <icon name="page-break"></icon>
          <icon name="paragraph-center"></icon>
          <icon name="paragraph-justify"></icon>
          <icon name="paragraph-left"></icon>
          <icon name="paragraph-right"></icon>
          <icon name="pause"></icon>
          <icon name="paypal"></icon>
          <icon name="pie-chart"></icon>
          <icon name="pilcrow"></icon>
          <icon name="pinterest"></icon>
          <icon name="pinterest2"></icon>
          <icon name="play"></icon>
          <icon name="plus"></icon>
          <icon name="power"></icon>
          <icon name="previous"></icon>
          <icon name="quill"></icon>
          <icon name="quotes-left"></icon>
          <icon name="quotes-right"></icon>
          <icon name="redo"></icon>
          <icon name="reply"></icon>
          <icon name="rss"></icon>
          <icon name="rss2"></icon>
          <icon name="scissors"></icon>
          <icon name="search"></icon>
          <icon name="share"></icon>
          <icon name="shrink"></icon>
          <icon name="shuffle"></icon>
          <icon name="sort-alpha-asc"></icon>
          <icon name="sort-alpha-desc"></icon>
          <icon name="sort-amount-asc"></icon>
          <icon name="sort-amount-desc"></icon>
          <icon name="sort-numberic-asc"></icon>
          <icon name="sort-numberic-desc"></icon>
          <icon name="soundcloud"></icon>
          <icon name="soundcloud2"></icon>
          <icon name="spinner" spin></icon>
          <icon name="spinner2" spin></icon>
          <icon name="star-empty"></icon>
          <icon name="star-full"></icon>
          <icon name="star-half"></icon>
          <icon name="stats-bars"></icon>
          <icon name="stats-dots"></icon>
          <icon name="stop"></icon>
          <icon name="strikethrough"></icon>
          <icon name="subscript"></icon>
          <icon name="superscript"></icon>
          <icon name="switch"></icon>
          <icon name="tab"></icon>
          <icon name="table"></icon>
          <icon name="telegram"></icon>
          <icon name="text-color"></icon>
          <icon name="trophy"></icon>
          <icon name="tumblr"></icon>
          <icon name="tumblr2"></icon>
          <icon name="twitter"></icon>
          <icon name="underline"></icon>
          <icon name="undo"></icon>
          <icon name="unlocked"></icon>
          <icon name="user"></icon>
          <icon name="user-check"></icon>
          <icon name="user-minus"></icon>
          <icon name="user-plus"></icon>
          <icon name="users"></icon>
          <icon name="vimeo"></icon>
          <icon name="vimeo2"></icon>
          <icon name="vine"></icon>
          <icon name="vk"></icon>
          <icon name="volume-decrease"></icon>
          <icon name="volume-high"></icon>
          <icon name="volume-increase"></icon>
          <icon name="volume-low"></icon>
          <icon name="volume-medium"></icon>
          <icon name="volume-mute"></icon>
          <icon name="volume-mute2"></icon>
          <icon name="wikipedia"></icon>
          <icon name="wrench"></icon>
          <icon name="youtube"></icon>
          <icon name="youtube2"></icon>
          <icon name="zoom-in"></icon>
          <icon name="zoom-out"></icon>
        </gapped>
      </div>
      <div>
        <gapped>
          <btn icon="youtube" :onClick="click">default</btn>
          <btn use="main" icon="youtube" :onClick="click">main</btn>
          <btn use="danger" icon="youtube" :onClick="click">danger</btn>
          <btn use="success" icon="youtube" :onClick="click">success</btn>
          <btn use="success" icon="youtube" :onClick="click" disabled>success</btn>
          <btn use="link" icon="youtube" :onClick="click" type="submit">link</btn>
        </gapped>
        <btn use="block" icon="youtube" :onClick="click" style="background-color: transparent;">success</btn>
      </div>
      <div>
        <gapped>

          <v-label triangle="top" use="success">Hello</v-label>
          <v-label triangle="right" use="success">Hello</v-label>
          <v-label triangle="bottom" use="success">Hello</v-label>
          <v-label triangle="left" use="success">Hello</v-label>

          <v-label triangle="top" use="main">Hello</v-label>
          <v-label triangle="right" use="main">Hello</v-label>
          <v-label triangle="bottom" use="main">Hello</v-label>
          <v-label triangle="left" use="main">Hello</v-label>

          <v-label triangle="top" use="danger">Hello</v-label>
          <v-label triangle="right" use="danger">Hello</v-label>
          <v-label triangle="bottom" use="danger">Hello</v-label>
          <v-label triangle="left" use="danger">Hello</v-label>

          <v-label triangle="top">Hello</v-label>
          <v-label triangle="right">Hello</v-label>
          <v-label triangle="bottom">Hello</v-label>
          <v-label triangle="left">Hello</v-label>

          <v-label use="success">Hello</v-label>
          <v-label use="success">Hello</v-label>
          <v-label use="success">Hello</v-label>
          <v-label use="success">Hello</v-label>

          <v-label use="main">Hello</v-label>
          <v-label use="main">Hello</v-label>
          <v-label use="main">Hello</v-label>
          <v-label use="main">Hello</v-label>

          <v-label use="danger">Hello</v-label>
          <v-label use="danger">Hello</v-label>
          <v-label use="danger">Hello</v-label>
          <v-label use="danger">Hello</v-label>

          <v-label>Hello</v-label>
          <v-label>Hello</v-label>
          <v-label>Hello</v-label>
          <v-label>Hello</v-label>
        </gapped>
      </div>
    </div>
  </div>
</template>

<script>
  import datas from '@/components/data-grid/data-grid';
  import gapped from '@/components/Gapped/Gapped.vue';
  import icon from '@/components/icon/icon.vue';
  import btn from '@/components/button/Button.vue';
  import VLabel from '@/components/label/label.vue';

  export default {
    name: 'Home',
    components: {
      datas,
      gapped,
      icon,
      btn,
      VLabel,
    },
    data() {
      return {
        searchQuery: '',
        gridColumns: ['name', 'power'],
        gridData: [
          { name: 'Chuck Norris', power: Infinity },
          { name: 'Bruce Lee', power: 9000 },
          { name: 'Jackie Chan', power: 7000 },
          { name: 'Jet Li', power: 8000 },
        ],
      };
    },
    methods: {
      click() {
        // eslint-disable-next-line no-console
        console.log('test');
      },
    },
  };
</script>

<style lang="less">
  @import "../assets/less/style";

  body {
    background: #4c545f;
    background: linear-gradient(to bottom, #4c545f 400px,#efefef 400px,#efefef 100%);
  }

  .main-menu {
    height: 90px;
    margin-bottom: 40px;
  }

  .container {
    width: 100%;
    max-width: 960px;
    padding-left: 10px;
    padding-right: 10px;
    margin: 0 auto;
  }

  .top {
    .row();
    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
    background-color: #fff;
    padding-top: 30px;

    &__photo {
      .col(xs, 12);
      .col(sm, 4);

      img {
        width: 100%;
      }
    }

    &__info {
      .col(xs, 12);
      .col(sm, 8);
    }

    &__header {
      border-bottom: 1px solid #d5dfd5;
    }

    &__footer {
      height: 70px;
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: @color-success;
      color: #fff;
    }
  }

  dl dt {
    font-weight:bold;
    float:left;
    margin: 0;
    padding-bottom: 10px;

    &:last-child {
      padding-bottom: 0;
    }
  }
  dl dd {
    padding-left: 100px;
    padding-bottom: 10px;

    &:last-child {
      padding-bottom: 0;
    }
  }

  .main {
    .row();
    margin-top: 30px;

    &__title {
      text-align: center;
    }

    &__content {
      box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
      background-color: #fff;
    }

    &--centred {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
</style>

