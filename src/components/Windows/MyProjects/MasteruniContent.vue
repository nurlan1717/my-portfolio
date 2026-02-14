<template>
  <div class="text-xs md:text-header-window">
    <div class="flex text-xxs md:text-xs w-full items-center justify-center md:justify-start ml-px flex-wrap gap-4 md:min-w-80 md:ml-1">
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/nextjs.svg" alt="icon nextjs" class="w-9 h-9" />
        <p class="font-bold mt-px">Next.js</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/typescript.svg" alt="icon typescript" class="w-9 h-9" />
        <p class="font-bold mt-px">TypeScript</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/tailwind.svg" alt="icon tailwind" class="w-9 h-9" />
        <p class="font-bold mt-px">Tailwind</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/nodejs.svg" alt="icon nodejs" class="w-9 h-9" />
        <p class="font-bold mt-px">Node.js</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/postgresql.svg" alt="icon postgresql" class="w-9 h-9" />
        <p class="font-bold mt-px">PostgreSQL</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/prisma.svg" alt="icon prisma" class="w-9 h-9" />
        <p class="font-bold mt-px">Prisma</p>
      </div>
    </div>
    <h3 class="mt-5 mb-2">Kontekst</h3>
    <p>MasterUni, həm bakalavr, həm də magistra müraciət edən tələbələr üçün hazırlanmış universitet və ixtisas seçim platformasıdır.</p>
    <p class="mt-2">Platform istifadəçilərə ballarını təhlil etməyə və uyğun universitetləri təklif etməyə kömək edir.</p>
    <p class="mt-2">İstifadəçi profilləri, tövsiyə sistemi və canlı dəstək çatı daxildir.</p>
    <h3 class="mt-5 mb-2">Əsas Xüsusiyyətlər</h3>
    <ul class="list-disc ml-3">
      <li>Universitet və ixtisas axtarış sistemi</li>
      <li>Bal təhlili və universitet tövsiyələri</li>
      <li>İstifadəçi profilləri və tarixçəsi</li>
      <li>Yerli və beynəlxalq universitetlər bazası</li>
      <li>Buraxılış və Magistr sınaq imtahanları</li>
      <li>Detallı universitet məlumatları və statistika</li>
      <li>Müraciət prosesinin izlənməsi</li>
      <li>Mobil responsive dizayn</li>
    </ul>
    <div class="w-full flex items-center flex-col mt-5">
      <img src="/img/projects/masteruni/masteruni.png" alt="MasterUni screenshot" class="w-full rounded border" />
    </div>
  </div>
  <a
    rel="noopener"
    href="https://www.masteruni.app/"
    target="_blank"
    class="absolute bottom-2 right-1 md:right-6 h-6 text-xxs border border-twilight-blue bg-button-submit rounded-sm leading-loose px-3 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked flex items-center justify-center"
  >
    <img src="/img/icons/projects/tools/web.svg" alt="Vebsayta keç" class="w-3 h-3 mr-0.5"/>
    Vebsayta keç
  </a>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const ProjectName = 'MasterUni'
</script>
