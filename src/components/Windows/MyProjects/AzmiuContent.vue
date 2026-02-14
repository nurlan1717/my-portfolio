<template>
  <div class="text-xs md:text-header-window">
    <div class="flex text-xxs md:text-xs w-full items-center justify-center md:justify-start ml-px flex-wrap gap-4 md:min-w-80 md:ml-1">
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/react.svg" alt="icon react" class="w-9 h-9" />
        <p class="font-bold mt-px">React</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/typescript.svg" alt="icon typescript" class="w-9 h-9" />
        <p class="font-bold mt-px">TypeScript</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/sass.svg" alt="icon sass" class="w-9 h-9" />
        <p class="font-bold mt-px">SCSS</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/antd.svg" alt="icon antd" class="w-9 h-9" />
        <p class="font-bold mt-px">Ant Design</p>
      </div>
    </div>
    <h3 class="mt-5 mb-2">Kontekst</h3>
    <p>AzMİU Tələbə Kabineti, Azərbaycan Memarlıq və İnşaat Universiteti tələbələri üçün hazırlanmış veb-əsaslı portaldır.</p>
    <p class="mt-2">Tələbələr təhlükəsiz şəkildə akademik qeydlərə, dərs cədvəlinə, qiymətlərə və şəxsi məlumatlara daxil ola bilərlər.</p>
    <p class="mt-2">Platform təmiz və responsiv interfeyslə dizayn edilmişdir və bütün cihazlarda istifadəçi dostu təcrübə təmin edir.</p>
    <h3 class="mt-5 mb-2">Əsas Xüsusiyyətlər</h3>
    <ul class="list-disc ml-3">
      <!-- <li>Təhlükəsiz autentifikasiya sistemi</li> -->
      <li>Akademik qeydlərə çıxış</li>
      <li>Dərs cədvəli və imtahan tarixləri</li>
      <li>Qiymət və əmsalların görüntülənməsi</li>
      <li>Şəxsi məlumatların idarə edilməsi</li>
      <li>Universitet elanları və bildirişlər</li>
      <li>Mobil cihazlar üçün responsiv dizayn</li>
      <li>Ant Design komponentləri ilə modern UI</li>
    </ul>
    <div class="w-full flex items-center flex-col mt-5">
      <img src="/img/projects/azmiu/azmiu.png" alt="AzMIU Student Cabinet screenshot" class="w-full rounded border" />
    </div>
  </div>
  <a
    rel="noopener"
    href="https://azmiu-kabinet.vercel.app/"
    target="_blank"
    class="absolute bottom-2 right-1 md:right-6 h-6 text-xxs border border-twilight-blue bg-button-submit rounded-sm leading-loose px-3 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked flex items-center justify-center"
  >
    <img src="/img/icons/projects/tools/web.svg" alt="Vebsayta keç" class="w-3 h-3 mr-0.5"/>
    Vebsayta keç
  </a>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const ProjectName = 'AzMIU Tələbə Kabinet'
</script>
