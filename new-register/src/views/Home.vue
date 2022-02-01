<template>
  <div id="wrapper">
    <div class="newsitemsall">
      <div class="newitem">
        <div class="imagenew"><img src="../assets/new.jpg" alt="tolpa"></div>
        <div class="namenew">Новость 1</div>
        <div class="subnamenew">Бла бла бла</div>
      </div>
      <div class="newitem">
        <div class="imagenew"><img src="../assets/new.jpg" alt="tolpa"></div>
        <div class="namenew">Новость 2</div>
        <div class="subnamenew">Бла бла бла</div>
      </div>
    </div>
        <h2>{{$store.getters['posts/count']}}</h2>
        <div class="posts">
            <div v-for="post in postArray"
                :key="post.id">
                {{post.id}}: {{post.title}}
            </div>
            <router-view />
            <div @click="doLoadPosts">Загрузить еще...</div>
        </div>
  </div>
</template>

<script>
export default {
   computed: {
            postArray () {
                return this.$store.getters['posts/all'];
            },
        },
  created() {
            this.doLoadPosts();
        },
    methods: {
            onAdd () {
                this.$router.push('/');
            },
            doLoadPosts () {
                 this.$store.dispatch('posts/loadPosts');
            }
        },
    
}
</script>

<style scoped>
.newsitemsall {
    display: flex;
    justify-content: space-between;
    max-width: 1420px;
    padding: 0 15px;
    margin-top: 15px;
    margin-left: 60px;
    margin-right: 60px;
}
  .newitem {
    padding: 15px;
    width: 300px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(138, 143, 149, 0.2), 0px 4px 5px rgba(138, 143, 149, 0.03), 0px 1px 10px rgba(138, 143, 149, 0.03);
    text-align: center;
    flex: 1 1 auto;
    margin: 0 10px;
    margin-bottom: 15px;
}
.namenew {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #3C4A54;
    text-align: center;
}
.imagenew img {
  width: 300px;
}
</style>