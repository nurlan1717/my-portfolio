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
    <p>TechGuard Academy Azərbaycanda kibertəhlükəsizlik sahəsində peşəkar mütəxəssislər yetişdirmək məqsədi ilə yaradılmış qabaqcıl tədris platformasıdır.</p>
    <p class="mt-2">16 həftəlik hərtərəfli tədris proqramı ilə tələbələrə nəzəri biliklə yanaşı, praktik bacarıqlar da qazandırılır. Real dünya ssenariləri və virtual laboratoriya mühiti ilə zəngin təlim təcrübəsi təqdim olunur.</p>
    <!-- <p class="mt-2">Platform üç dildə (Azərbaycan, İngilis, Rus) mövcuddur və ISO 27001:2022 sertifikatına malikdir.</p> -->
    <h3 class="mt-5 mb-2">Əsas Xüsusiyyətlər</h3>
    <ul class="list-disc ml-3">
      <li>16 həftəlik strukturlaşdırılmış tədris proqramı</li>
      <!-- <li>200+ saat praktik dərs və 50+ laboratoriya</li> -->
      <!-- <li>Çoxdilli interfeys (AZ/EN/RU)</li> -->
      <!-- <li>24/7 virtual laboratoriya mühitinə giriş</li> -->
      <li>Təcrübəli mentorlardan canlı dərs və dəstək</li>
      <li>Karyera planlaşdırması və iş yerləşdirmə dəsteyi</li>
      <li>Rəsmi sertifikat və digital badge</li>
      <li>Alumni şəbəkəsi və davamlı təhsil imkanları</li>
      <li>Responsive və modern UI/UX dizayn</li>
      <li>Tələbə idarəetmə sistemi</li>
    </ul>
    <h3 class="mt-5 mb-2">Tədris Modulları</h3>
    <ul class="list-disc ml-3">
      <li>Kibertəhlükəsizlik Əsasları</li>
      <li>Şəbəkə Təhlükəsizliyi</li>
      <li>Linux & Əmrlər Sətiri</li>
      <li>Ethical Hacking</li>
      <li>Veb Təhlükəsizliyi</li>
      <li>SOC & Incident Response</li>
      <li>Cloud Security</li>
      <li>IoT & Mobil Təhlükəsizlik</li>
    </ul>
    <div class="w-full flex items-center flex-col mt-5">
      <img src="/img/projects/techguard/techguard.png" alt="TechGuard Academy screenshot" class="w-full rounded border" />
    </div>
  </div>
  <a
    rel="noopener"
    href="https://tech-guard-academy.vercel.app/"
    target="_blank"
    class="absolute bottom-2 right-1 md:right-6 h-6 text-xxs border border-twilight-blue bg-button-submit rounded-sm leading-loose px-3 hover:shadow-button-submit-hover cursor-pointer active:bg-button-clicked flex items-center justify-center"
  >
    <img src="/img/icons/projects/tools/web.svg" alt="Vebsayta keç" class="w-3 h-3 mr-0.5"/>
    Vebsayta keç
  </a>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const ProjectName = 'TechGuard Academy'
</script>
