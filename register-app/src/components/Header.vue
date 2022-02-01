<template>
    <div data-vue-component="Header">
        <div class="head">
            <div class="logo">
                <img src="../assets/nail.jpg" alt="Лого">
            </div>
            <div class="top">
                <nav class="header_nav">
                    <ul class="nav_list">
                        <li><a class="link" href="#">Главная</a></li>
                        <li><a class="link" href="#">Мои работы</a></li>
                        <li><a class="link" href="#">Отзывы</a></li>
                    </ul>
                </nav>
                <div class="enter">
                    <a href="#"><span>Войти</span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .logo {
        text-align: left;
        padding-left: 15px;
        margin-top: 15px;
    }
    .logo img {
        width: 100px;
    }
    .top {
        display:flex;
        justify-content: space-around;
        padding-top: 15px;
    }
    a {
        text-decoration: none;
        color: #000000;
    }
    .link {
        margin-left: 30px;
    }
    .nav_list {
        list-style: none;
        display: flex;
        justify-content: space-between;
        margin-left: 150px;
    }
    . header_nav {
        align-items: center;
        display: table-cell;
        vertical-align: bottom;
    }
    .head {
        display: flex;
        border: solid 2px blue;
    }
    .enter {
        text-align: right;
        margin-top: 15px;
        margin-left: 150px;
    }
</style>
