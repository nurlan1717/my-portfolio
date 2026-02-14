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
    </div>
    <h3 class="mt-5 mb-2">Kontekst</h3>
    <p>CPY Synergy, Azərbaycanda aparıcı inşaat və mühəndislik şirkətidir. 2025-ci ildən fəaliyyət göstərir.</p>
    <p class="mt-2">Şirkət modern texnologiyalar və innovativ yanaşmalar istifadə edərək yüksək keyfiyyətli inşaat xidmətləri təqdim edir.</p>
    <p class="mt-2">Vebsayt üç dildə - Azərbaycan, İngilis və Rus dillərində mövcuddur və şirkətin xidmətlərini geniş auditoriyanın nəzərinə çatdırır.</p>
    <h3 class="mt-5 mb-2">Əsas Xüsusiyyətlər</h3>
    <ul class="list-disc ml-3">
      <li>Çoxdilli dəstək (AZ, EN, RU)</li>
      <li>Modern və responsiv dizayn</li>
      <li>Şirkət xidmətlərinin təqdimatı</li>
      <li>Layihə portfeli</li>
      <li>Əlaqə forması</li>
      <li>SEO optimizasiyası</li>
      <li>Sürətli yüklənmə performansı</li>
      <li>Mobil cihazlar üçün uyğunlaşdırılmış interfeys</li>
    </ul>
    <div class="w-full flex items-center flex-col mt-5">
      <img src="/img/projects/cpy/cpy.png" alt="CPY Synergy screenshot" class="w-full rounded border" />
    </div>
  </div>
  <a
    rel="noopener"
    href="https://cpysynergy.com/"
    target="_blank"
    class="absolute bottom-2 right-1 md:right-6 h-6 text-xxs border border-twilight-blue bg-button-submit rounded-sm leading-loose px-3 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked flex items-center justify-center"
  >
    <img src="/img/icons/projects/tools/web.svg" alt="Vebsayta keç" class="w-3 h-3 mr-0.5"/>
    Vebsayta keç
  </a>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const ProjectName = 'CPY Synergy'
</script>
