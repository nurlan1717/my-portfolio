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
        <img src="/img/icons/projects/tools/tailwind.svg" alt="icon tailwind" class="w-9 h-9" />
        <p class="font-bold mt-px">Tailwind</p>
      </div>
      <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/nodejs.svg" alt="icon nodejs" class="w-9 h-9" />
        <p class="font-bold mt-px">Node.js</p>
      </div>
      <!-- <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/postgresql.svg" alt="icon postgresql" class="w-9 h-9" />
        <p class="font-bold mt-px">PostgreSQL</p>
      </div> -->
      <!-- <div class="flex flex-col items-center flex-wrap">
        <img src="/img/icons/projects/tools/prisma.svg" alt="icon prisma" class="w-9 h-9" />
        <p class="font-bold mt-px">Prisma</p>
      </div> -->
    </div>
    <h3 class="mt-5 mb-2">Kontekst</h3>
    <p>Gameverse Hub, Steam və Epic Games kimi platformalardan ilham alan full-stack oyun platformasıdır.</p>
    <p class="mt-2">İstifadəçilər oyunları araşdıra, satın ala və rəy yaza bilərlər. Platform statik admin paneli, dinamik istifadəçi və developer rolları, oyun satış funksionallığı və real-vaxt çat daxil edir.</p>
    <p class="mt-2">Backend və əsas məntiq sıfırdan hazırlanmışdır.</p>
    <h3 class="mt-5 mb-2">Əsas Xüsusiyyətlər</h3>
    <ul class="list-disc ml-3">
      <li>Oyunları araşdırma və satın alma</li>
      <li>İstifadəçi rəyləri və reytinq sistemi</li>
      <li>Admin panel - oyun və istifadəçi idarəetməsi</li>
      <li>Developer paneli - öz oyunlarını satmaq imkanı</li>
      <li>Real-vaxt çat sistemi (Socket.io)</li>
      <li>JWT əsaslı autentifikasiya</li>
      <li>REST API arxitekturası</li>
      <li>OTP li Balans Artırma</li>
    </ul>
    <div class="w-full flex items-center flex-col mt-5">
      <img src="/img/projects/gameverse/gameverse.png" alt="Gameverse Hub screenshot" class="w-full rounded border" />
    </div>
  </div>
  <a
    rel="noopener"
    href="https://gameverse-hub-17.vercel.app/"
    target="_blank"
    class="absolute bottom-2 right-1 md:right-6 h-6 text-xxs border border-twilight-blue bg-button-submit rounded-sm leading-loose px-3 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked flex items-center justify-center"
  >
    <img src="/img/icons/projects/tools/web.svg" alt="Vebsayta keç" class="w-3 h-3 mr-0.5"/>
    Vebsayta keç
  </a>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const ProjectName = 'Gameverse Hub'
</script>
