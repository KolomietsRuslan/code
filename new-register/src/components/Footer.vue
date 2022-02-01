<template>
    <div data-vue-component="Footer">
        <div class="footer">
            <div class="info">
                <div class="contacts">
                    <div class="footer-text">Контактная информация: </div>
                    <div class="contact_mail">
                        <a href="mailto:rusd.1994@gmail.com">rusd.1994@gmail.com</a>
                    </div>
                    <div class="contact_tel">
                        <a href="tel:+380500000000">+380500000000</a>
                    </div>
                </div>
                <div class="links">
                    <div class="footer-text">Основные ссылки: </div>
                    <div class="linklist">
                        <ul class="listlink">
                            <li><a href="/">Главная</a></li>
                            <li><a href="/works">Мои работы</a></li>
                            <li><a href="/about">Обо мне</a></li>
                            <li><a href="/reviews">Отзывы</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footer {
        background-image: url(../assets/fon.jpg);
        height: 100%;
        color: white;
        font-weight: bold;
    }
    a {
        text-decoration: underline;
        color: white;
        font-weight: bold;
    }
    a:hover {
        color: #555;
    }
    .info {
        display: flex;
        justify-content: space-evenly;
    }
    .listlink {
        margin: 0px;
        padding: 0px;
        line-height: 30px;
    }
    .listlink li {
        list-style: none;
        color: white;
    }
    .contact_mail a {
    position: relative;
    margin-bottom: 38px;
    line-height: 30px;
    }
    .contact_tel a {
    position: relative;
    line-height: 30px;
    }
    .footer-text {
        text-align:center;
    }
</style>