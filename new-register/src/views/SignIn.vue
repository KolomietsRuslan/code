<template>
  <div class="all_signin">
    <div class="signin">
      <h1>Вход</h1>
    </div>
    <my-input label="Логин:" login="log" v-model="login" required = "true" />
    <my-input type="password" login="pas" label="Пароль:" v-model="password" required = "true" />
    <div class="btn">
      <my-button label="Войти" type="submit" @click="doAuth"></my-button>
    </div>
  </div>
</template>

<script>
  import isAuth from '@/App.vue';
  export default {
          components: {
          },
          data () {
              return {
                  login: '',
                  password: '',
              };
          },
          methods: {
              doAuth () {
                this.$store.dispatch("user/doAuth", {
                  login: this.login,
                  password: this.password,
                }).then((status) => {
                  if (status === 'OK') {
                    this.router.push('/new_reviews');
                  } else if (status === 'error') {
                    alert ('Ошибка авторизации');
                  }
                });
              },
          },
  };
</script>

<style scoped>
  #login {
    margin-bottom: 10px;
    font-size: 16px;
  }
  #password {
    margin-bottom: 10px;
    font-size: 16px;
  }
  .all_signin {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .all_signin input {

  }

  .btn {
    margin-top: 5px;
  }
</style>