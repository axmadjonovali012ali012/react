import React from 'react';
import { Carousel } from 'antd';
import foto27 from '../assets/foto27.png'
import foto28 from '../assets/foto28.png'
import foto29 from '../assets/foto29.png'


const PromoCarousel = () => {
  return (
    <div>
      <div className='mt-5 m-auto' style={{ width: '84%' }}>
        <p className='p-2'>Главная —  Акции </p>
        <h1 style={{ fontWeight: 600 }}>АКЦИИ И СКИДКИ</h1>
      </div>

      <div className="d-flex mt-2 justify-content-center align-items-center gap-5 image-container">
        <img src={foto27} className="promo-image" alt="Promo 1" />
        <img src={foto28} className="promo-image" alt="Promo 2" />
        <img src={foto29} className="promo-image" alt="Promo 3" />
      </div>
      <div className='mt-5 container-wrapper'>
        <h1 style={{ fontWeight: 700 }}>МЕГА СКИДКА ПОЛИСТИРОЛБЕТОН 3900 РУБ.</h1>
        <p>Пока конкуренты повышают цены - мы их снижаем!... </p>
        <p>А мы Вам в этом поможем, предложив лучшую цену на Иркутском рынке!</p>
        <h3 style={{ color: 'red', marginRight: '150px' }}>Полистеролбетон - 3900 руб./м3</h3>
        <p>Данная цена действует при условии строительства...</p>
        <p>Выбирайте только качественный материал и проверенных застройщиков.</p>

        <div className="d-flex partners-grid">
          <div className="flex-column">
            <h4>Партнёр</h4>
            <p>Артель Войткевича</p>
            <p>Стройтехпроект</p>
            <p>Байкал дом</p>
            <p>Дом Град</p>
            <p>Сибирская основа</p>
            <p>Леса сибири</p>
            <p>Бригада Антона Фокина</p>
            <p>Традиция</p>
            <p>АСК Доминго</p>
            <p>Мир домов</p>
          </div>
          <div className="flex-column">
            <h4>Адрес</h4>
            <p>www.megaartel.ru</p>
            <p>www.stpirkut.ru</p>
            <p>www.baikal-dom.com</p>
            <p>www.stroy-dom-irkutsk.ru</p>
            <p>www.sibosnova.ru</p>
            <p>www.lesa-sibiry.ru</p> <br />
            <p>www.традиция38.рф</p>
            <p>www.domingoirk.ru</p>
            <p>https://vk.com/mirdomov38</p>
          </div>
          <div className="flex-column">
            <h4>Телефон</h4>
            <p>8 (3952) 64-01-34</p>
            <p>8 (3952) 71-60-73</p>
            <p>8 (3952) 40-72-90</p>
            <p>8 (3952) 98-75-73</p>
            <p>8 (964) 357-57-97</p>
            <p>8 (950) 140-14-34</p>
            <p>8 (3952) 99-00-95</p>
            <p>8 (3952) 55-45-44</p>
            <p>8 (904) 110-40-50</p>
          </div>
          <div className="flex-column">
            <h4>Сайт</h4>
            <p>ул.Помяловского, 1, оф. 444</p>
            <p>ул.Советская,176Б, оф.508</p>
            <p>ул.Д.Событий,57, оф.403</p>
            <p>ул.Седова,48, оф.205</p>
            <p>ул.Ширямова, 2А, оф.16</p>
            <p>Амурский проезд, 16</p> <br />
            <p>ул.С.Разина,27, оф.801/7</p>
            <p>ул.Трудовая 60, оф.107</p>
            <p>ул.Лермонтова,78, оф.327</p>
          </div>
        </div>

        <div className="d-flex justify-content-end contact-info">
          <p>Более подробная информация у менеджеров отдела по телефону:</p>
          <h4>+7 395 250-45-80</h4>
        </div>
      </div>

      <style jsx>{`
            .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .promo-image {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    margin-top: 50px;
  }

  @media (max-width: 1210px) {
    .promo-image {
          display: none;
    }

    .image-container {
      gap: 15px;
    }
  }

  @media (max-width: 768px) {
    .promo-image {
      width: 100%;
    }

    .image-container {
      flex-direction: column;
      gap: 20px;
    }
  }
  .container-wrapper {
    width: 84%;
    text-align: start;
    margin: 0 auto;
    max-width: 1500px;
  }

  .partners-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
  }

  .partners-grid .flex-column {
    flex: 1 1 200px;
    min-width: 200px;
  }

  .contact-info {
    flex-direction: column;
    align-items: flex-end;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    .partners-grid {
      flex-direction: column;
    }

    .contact-info {
      align-items: flex-start;
    }
  }
`}</style>

    </div>
  );
};

export default PromoCarousel;
