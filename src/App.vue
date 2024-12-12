<script setup>
  // IMPORTAR COMPONENTES ASSÍNCRONOS
  import { defineAsyncComponent } from 'vue';
  const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'));
  const HeroSection = defineAsyncComponent(() => import('@/components/HeroSection.vue'));
  const ServicesSection = defineAsyncComponent(() => import('@/components/ServicesSection.vue'));
  const SobreMim = defineAsyncComponent(() => import('@/components/SobreMim.vue'));
  const Skills = defineAsyncComponent(() => import('@/components/SkillsAndExperience.vue'));
  const Contact = defineAsyncComponent(()=> import('@/components/ContactSession.vue'));
  const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'));
  const VoltarAoTopo= defineAsyncComponent(() => import('@/components/VoltarAoTopo.vue'));
</script>

<template>
  
  <div class="bg-[#111827] min-h-screen">
    <NavBar/>
    <HeroSection/>
    <ServicesSection/>
    <SobreMim/>
    <Skills/>
    <Contact/>
    <Footer/>
    <VoltarAoTopo/>

  </div>
    
</template>

<style scoped>


</style>