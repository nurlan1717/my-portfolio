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
        <p class="font-bold mt-px">Node Js</p>
      </div>
    </div>
    <h3 class="mt-5 mb-2">Kontekst</h3>
    <p>ConTheron real-time işçi monitorinqi, sağlamlıq sensorları və GPS yer məlumatlarının izlənməsi üçün hazırlanmış peşəkar idarəetmə platformasıdır.</p>
    <p class="mt-2">Platform işçi sağlamlığı və təhlükəsizliyinin idarə edilməsi üçün hərtərəfli həll təqdim edir. 256-bit şifrələmə və çox faktorlu identifikasiya sistemi ilə tam təhlükəsizlik təmin edilir.</p>
    <p class="mt-2">Real-time canlı monitorinq, 24/7 davamlı izləmə və 99.9% sistem uptime ilə etibarlı xidmət göstərir.</p>
    <h3 class="mt-5 mb-2">Əsas Xüsusiyyətlər</h3>
    <ul class="list-disc ml-3">
      <li>Real-time işçi məlumatları və sağlamlıq göstəriciləri izləməsi</li>
      <li>Ürək döyüntüsü, temperatur və vital göstəricilərin canlı monitorinqi</li>
      <li>GPS koordinatlarının xəritə üzərində real-time görüntülənməsi</li>
      <li>256-bit şifrələmə və çox faktorlu identifikasiya</li>
      <li>Detallı hesabatlar və güclü analitik alətlər</li>
      <li>iOS və Android üçün xüsusi mobil tətbiqlər (Gələcəkdə)</li>
      <li>24/7 davamlı sistem monitorinqi</li>
      <li>Təcili hallar üçün avtomatik xəbərdarlıq sistemi</li>
      <li>99.9% sistem uptime zəmanəti</li>
      <li>GDPR və məxfilik standartlarına uyğunluq</li>
    </ul>
    <h3 class="mt-5 mb-2">Texniki Təfərrüatlar</h3>
    <ul class="list-disc ml-3">
      <li>Real-time WebSocket əlaqəsi</li>
      <li>İnteraktiv xəritə inteqrasiyası</li>
      <li>Sensor data vizualizasiyası</li>
      <li>Dashboard və analitika paneli</li>
      <li>Responsive və modern UI/UX dizayn</li>
      <li>REST API arxitekturası</li>
    </ul>
    <div class="w-full flex items-center flex-col mt-5">
      <img src="/img/projects/contheron/contheron.png" alt="ConTheron screenshot" class="w-full rounded border" />
    </div>
  </div>
  <a
    rel="noopener"
    href="https://con-theron.vercel.app/"
    target="_blank"
    class="absolute bottom-2 right-1 md:right-6 h-6 text-xxs border border-twilight-blue bg-button-submit rounded-sm leading-loose px-3 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked flex items-center justify-center"
  >
    <img src="/img/icons/projects/tools/web.svg" alt="Vebsayta keç" class="w-3 h-3 mr-0.5"/>
    Vebsayta keç
  </a>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const ProjectName = 'ConTheron'
</script>
