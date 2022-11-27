<script setup lang="ts">
const props = defineProps<{ id: string }>()
const router = useRouter()
</script>

<template>
<div class="create-order" style="display: block;">
      <div class="HelloUser">Добавить задание</div>
      <div class="p-card-content">
        
        <input name="text" placeholder="Расскажите подробнее о задании">
        <div class="inpun-colum">
          <div class="left-colum">
            <input class="inptlt" id="phone" type="text" name="tel" placeholder="Ваш телефон">
            <input class="inptlt" name="text" placeholder="Выберите тип работы">
            <input class="inptlt" name="text" placeholder="Название работы">
            <input class="inptlt" name="text" placeholder="Поля">
            <input class="inptlt" name="text" placeholder="Интервал">
            <div class="slider21">
              <div class="ranges"><div>Оригинальность</div><div id="rangeValue">100%</div></div>
              <input class="iptrage" type="range" min="0" max="100" value="100" oninput="rangeValue.innerText = this.value">
              </div>
          </div>
          <div class="right-colum">
            <input class="inptlt" id="mail" type="text" name="email" placeholder="Отправить по электронной почте">
            <input class="inptlt" name="text" placeholder="Дисциплина">
            <input class="inptlt" name="text" placeholder="0">
            <input class="inptlt" name="text" placeholder="Шрифт">
            <input class="inptlt" name="text" placeholder="Размер текста">
            <div class="upload-file__wrapper">
              <input type="file" name="files[]" id="upload-file__input_1" class="upload-file__input" accept=".jpg, .jpeg, .png, .gif, .bmp, .doc, .docx, .xls, .xlsx, .txt, .tar, .zip, .7z, .7zip" multiple="">
              <label class="upload-file__label" for="upload-file__input_1">
                  <svg class="upload-file__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M286 384h-80c-14.2 1-23-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c11.6 11.6 3.7 33.1-13.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-23-23V366c0-13.3 10.7-24 24-24h136v8c0 31 24.3 56 56 56h80c30.9 0 55-26.1 57-55v-8h135c13.3 0 24 10.6 24 24zm-124 88c0-11-9-20-19-20s-19 9-20 20 9 19 20 20 21-9 20-20zm64 0c0-12-9-20-20-20s-20 9-19 20 9 20 20 20 21-9 20-20z"></path>
                  </svg>
                  <span class="upload-file__text">Прикрепить файл</span>
              </label>
          </div>
         
          </div>
        </div>

        <div class="launch">
        <div class="field col">
          <h1>Срок cдачи</h1>
          <h3>Выберите интервал от и до</h3>
          <div class="date-interval">
            <div class="left-date">
          <label for="date">Дата от </label>
                <input class="date1" type="date" id="date" name="date"></div>
                <div class="right-date">
          <label for="date">Дата до </label>
                <input class="date2" type="date" id="date" name="date"></div>
              </div>
        </div>

        <div class="budjet">
          <h1>Выберете бюджет (руб.)</h1>
          <div class="inpun-colum2">
            <div class="left-colum">
              <input class="inptlt" name="text" placeholder="от">
            </div>
            <div class="right-colum">
              <input class="inptlt" name="text" placeholder="до">
            </div>
          </div>    
        </div>
        <div class="btnserv">
          <button class="place">разместить заказ</button>
          <button class="throw-off">сбросить форму</button>
        </div>
      </div>
        
      </div>
     </div>
</template>
<style scoped>

</style>
<route lang="yaml">
meta:
  layout: column3
</route>