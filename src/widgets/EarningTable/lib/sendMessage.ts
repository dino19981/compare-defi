'use server';

import { Html } from 'next/document';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sharkpro.smr@gmail.com',
    pass: 'udiyprfefwsdbtxd',
  },
});

export const sendMessage = async () => {
    try {
      const mailOptions = {
        from: 'sharkpro.smr@gmail.com',
        to: 'dino.olimp@mail.ru',
        subject: 'Заказ с вашего сайта',
        html: `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>mail</title>
    <style>
      @media screen and (max-width: 460px) {
        .container {
          padding: 38px 24px !important;
        }

        .logo {
          width: 83px !important;
          height: 20px !important;
        }

        .icon {
          width: 61px !important;
          height: 55px !important;
          margin-top: 40px !important;
          margin-bottom: 60px !important;
        }

        .title {
          font-size: 32px !important;
          line-height: 32px !important;
        }

        .description {
          font-size: 17px !important;
          line-height: 22px !important;
          margin-top: 20px !important;
        }

        .confirm-button {
          margin-top: 40px !important;
          margin-bottom: 60px !important;
          font-size: 24px !important;
          padding: 12px 0 !important;
        }

        .footer-text {
          font-size: 17px !important;
          line-height: 22px !important;
          margin-bottom: 50px !important;
        }

        .social-links {
          margin-bottom: 20px !important;
        }

        .copyright {
          font-size: 14px !important;
          line-height: 18px !important;
        }
      }

      @media screen and (max-width: 375px) {
        .container {
          padding: 28px 24px !important;
        }

        .icon {
          width: 58px !important;
          height: 52px !important;
          margin-top: 30px !important;
          margin-bottom: 40px !important;
        }

        .title {
          font-size: 24px !important;
          line-height: 29px !important;
        }

        .description {
          font-size: 15px !important;
          line-height: 20px !important;
          margin-top: 15px !important;
        }

        .confirm-button {
          margin-top: 30px !important;
          margin-bottom: 50px !important;
          font-size: 16px !important;
          padding: 12px 0 !important;
        }

        .footer-text {
          font-size: 15px !important;
          line-height: 22px !important;
          margin-bottom: 44px !important;
        }

        .social-links {
          margin-bottom: 15px !important;
        }

        .copyright {
          font-size: 13px !important;
          line-height: 18px !important;
        }
      }
    </style>
  </head>
  <body>
    <div
      class="container"
      style="
        max-width: 600px;
        margin: 0 auto;
        width: 100%;
        padding: 46px;
        box-sizing: border-box;

        border-radius: 40px;
        backdrop-filter: blur(28px);
        background-color: #103328;
      "
    >
      <!-- <img src="./logo.png" alt="" style="width: 130px; height: 31px; display: block" /> -->
      <img
        class="logo"
        src="https://drive.usercontent.google.com/download?id=1N4qkYKXeqSpXOG_2qk9E1XJjgL_Oo_Vs&export=download&authuser=0&confirm=t&uuid=c09f2d42-6731-4169-9b6b-b097e3f53d8b&at=ALoNOgmx6MhjP_ULTcX806S1rBdf:1746812300449"
        alt=""
        style="width: 130px; height: 31px; display: block"
      />

      <img
        class="icon"
        src="https://drive.usercontent.google.com/download?id=1wW4DCYLxce-RD9LgvWqbLHKmHRyn6l1b&export=download&authuser=0&confirm=t&uuid=c7941702-25b5-4fba-8ef9-b6c0babdede6&at=ALoNOgmebf_b6ddqSYn3Webgt1BT:1746812196720"
        style="width: 84px; height: 76px; margin-top: 50px; margin-bottom: 60px; display: block"
      />
      <!-- <img
        src="https://drive.usercontent.google.com/download?id=1wW4DCYLxce-RD9LgvWqbLHKmHRyn6l1b&export=download&authuser=0&confirm=t&uuid=d991286c-47d9-4b7d-b5de-7204436eba61&at=AIrpjvOrBGVXVekp09m6p2cwyEgm:1737479887142"
        style="width: 80px; height: 72px; margin-top: 50px; margin-bottom: 47px; display: block"
      /> -->

      <h1
        class="title"
        style="
          font-size: 40px;
          font-weight: 400;
          line-height: 46px;
          color: #fff;
          font-family: 'Arial', sans-serif;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

          margin-top: 0;
          margin-bottom: 0;
        "
      >
        Подтвердите свой адрес электронной почты
      </h1>
      <p
        class="description"
        style="
          font-family: 'Arial', sans-serif;
          color: #fff;
          opacity: 0.7;
          font-size: 20px;
          line-height: 24px;
          font-weight: 400;

          margin-top: 20px;
          margin-bottom: 0;
        "
      >
        Чтобы продолжить настройку своего аккаунта, подтвердите, что это ваш адрес электронной
        почты.
      </p>
      <a
        class="confirm-button"
        style="
          background: transparent linear-gradient(95deg, #00ff3b 0%, #05edc0 100%) 0% 0% no-repeat
            padding-box;
          border-radius: 25px;
          font-family: 'Gilroy', sans-serif;
          cursor: pointer;
          margin-top: 50px;
          margin-bottom: 80px;
          font-size: 21px;
          font-weight: 400;
          cursor: pointer;
          text-decoration: none;
          color: #0c0e12;
          width: 100%;
          display: block;
          text-align: center;
          padding: 13px 0;
        "
        href="{{confirm_link}}"
        >Подтвердить</a
      >
      <p
        class="footer-text"
        style="
          color: #919191;
          font-size: 20px;
          font-family: Arial;
          font-weight: 400;
          line-height: 24px;
          word-wrap: break-word;
          margin-bottom: 60px;
        "
      >
        Срок действия этой ссылки истекает через 3 часа. Если вы не делали этот запрос,
        проигнорируйте это письмо. Для получения помощи, свяжитесь с нами через наш
        <a
          style="
            text-decoration: none;
            color: #fff;
            cursor: pointer;
            font-family: 'Arial', sans-serif;
          "
          href="mailto:support@tpsports.com"
          >Справочный центр</a
        >.
      </p>

      <div style="text-align: center; margin-bottom: 20px">
        <a
          style="
            text-decoration: none;
            color: #fff;
            cursor: pointer;
            font-family: 'Arial', sans-serif;
            font-weight: 300;
          "
          href="{{web_url}}"
          target="_blank"
          >www.tpsports.com</a
        >
      </div>

      <div class="social-links" style="text-align: center; margin-bottom: 20px">
        <a
          href="{{telegram_url}}"
          target="_blank"
          style="margin-right: 21px; cursor: pointer; display: inline-block"
        >
          <img
            style="width: 20px; height: 18px; padding-top: 11px; padding-right: 2px"
            src="https://drive.usercontent.google.com/download?id=1ZbBupILzmH1JtUZFgmMAX4GfxGR2fp3i&export=download&authuser=0&confirm=t&uuid=10288624-fc46-4e8c-9a1f-7107dba999f6&at=ALoNOgngqtlqFcKhCfw0nvPdWK28:1746811971620"
            alt="Telegram"
          />
          <!-- <img
            style="width: 20px; height: 18px; padding-top: 11px"
            src="./telegram.png"
            alt="Telegram"
          /> -->
        </a>

        <a
          href="{{vk_url}}"
          target="_blank"
          style="margin-right: 18px; cursor: pointer; display: inline-block"
        >
          <img
            style="width: 21px; height: 13px; padding-top: 16px"
            src="https://drive.usercontent.google.com/download?id=1fnGTGDakKAXp_JXZCEz-H_BjVI5j88YU&export=download&authuser=0&confirm=t&uuid=09a3b5c5-79c8-496b-8a54-a8b955333677&at=ALoNOgnIg--3ZMRkZpUnLKsc8FcV:1746812040771"
            alt="VK"
          />
          <!-- <img style="width: 21px; height: 13px; padding-top: 1px" src="./vk.png" alt="VK" /> -->
        </a>

        <a
          href="{{youtube_url}}"
          target="_blank"
          style="margin-right: 25px; cursor: pointer; display: inline-block"
        >
          <img
            style="width: 22px; height: 18px; padding-top: 11px"
            src="https://drive.usercontent.google.com/download?id=1qlpUTKwYRhKwtw2GyOyAKiaa0_LHRJLt&export=download&authuser=0&confirm=t&uuid=03b04e4f-6b3e-4f6d-9f7a-2db7299cf554&at=ALoNOglO5JqFrWeGfA4V11DbW6Kc:1746812124387"
            alt="YouTube"
          />
          <!-- <img
            style="width: 24px; height: 18px; padding-top: 11px"
            src="./youtube.png"
            alt="YouTube"
          /> -->
        </a>

        <a href="{{x_url}}" target="_blank" style="cursor: pointer; display: inline-block">
          <img
            style="width: 15px; height: 16.5px; padding-top: 12px"
            src="https://drive.usercontent.google.com/download?id=1r26VB0o_bTCgrniCYzuYTmd008mGp41m&export=download&authuser=0&confirm=t&uuid=5c4258a2-5454-4390-a8db-a6717acc2259&at=ALoNOgkmjKu2HdAX6zoZtuW01TKn:17468119161"
            alt="Twitter"
          />
          <!-- <img
            style="width: 15px; height: 16.5px; padding-top: 12px"
            src="./twitter.png"
            alt="Twitter"
          /> -->
        </a>
      </div>

      <div style="width: max-content; margin: 0 auto">
        <p
          class="copyright"
          style="
            opacity: 0.41;
            font-family: 'Arial', sans-serif;
            margin: 0;
            font-size: 14px;
            line-height: 18px;
            font-weight: 300;
            color: #fff;
            display: inline;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          "
        >
          Все права защищены © 2025
        </p>
      </div>
    </div>
  </body>
</html>
`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

    } catch (e) {
      console.log(e, 'error');
    }
  };

  // 
export const getUniswapApy = async () => {
  const response = await fetch('https://interface.gateway.uniswap.org/v2/uniswap.explore.v1.ExploreStatsService/ExploreStats?connect=v1&encoding=json&message=%7B%22chainId%22%3A%22ALL_NETWORKS%22%7D');
  const data = await response.json();
  console.log(data, 'data');
};

