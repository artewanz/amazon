### Banner

Используем библиотеку `react-responsive-carousel`:

```js
<Carousel
  autoPlay
  infiniteLoop
  showStatus={false}
  showIndicators={false}
  showThumbs={false}
  interval={5000}
>
  <div>
    <img loading="lazy" src="src" />
  </div>
  <div>
    <img loading="lazy" src="src" />
  </div>
  <div>
    <img loading="lazy" src="src" />
  </div>
</Carousel>
```

> ❗ Важно добавить изображению атрибут _loading="lazy"_, позволяющий использовать фичу _lazy-loading_ для изображений.

### Grid сетка

Для строк: grid-auto-row: dense: автоматически расставляет элементы таким образом, чтобы они занимали минимальное пространство

<img src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/07/s_B7E6D9942D0654182E7822C8DA4E6A6C2F823A623853B9F9847EC7C55BD41E60_1656053435015_usecase.png?resize=1024%2C407&ssl=1"/>

### Авторизация

Для авторизации испольуется библиотека `next-auth` (см. документацию)

1. Авторизация через Google OAuth
   1. Создаем приложение в Google Cloud console и Firebase
   2. APIs & Services -> Credentials -> Create Credentials создаем новый
   3. Вставляем в Authorized JavaScript origins и Authorized redirect URIs URL сайта
   4. В Firebase заходим во вкладку Auth и включаем там авторизацию через гугл.
   5. Копируем Web client ID и Web client secret, вставляем их в файл `.env.local`
