<template>
  <div class="home">
    <movieitem />
  </div>
</template>

<script>
// @ is an alias to /src
import movieitem from '@/components/movieitem'

export default {
  name: 'Home',
  components: {
    movieitem
  }
}
</script>
