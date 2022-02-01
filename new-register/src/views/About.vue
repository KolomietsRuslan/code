<template>
  <div class="about">
    <h1>Пра миня</h1>
    <calendar />
    <date-picker />
  </div>
</template>

<script>
import { Calendar, DatePicker } from 'v-calendar';

export default {
  components: {
    Calendar,
    DatePicker,
  }
}

</script>


<style>
  .about {

  }
</style>