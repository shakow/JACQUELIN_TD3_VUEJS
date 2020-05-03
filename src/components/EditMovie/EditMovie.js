export default {
  name: 'edit-movie',
  components: {},
  props: [],
  data () {
    return {
      isEditing : false,
      movie: this.$movies[this.$route.params.id]
    }
  },
  computed: {
    movie(){
      return this.movies.find(v => v.id == this.$route.params.id);
    }
  },
  mounted () {
    this.$movies.dispatch('editMovie', this.movie);
  },
  methods: {
    save() {
      this.cachedUser = Object.assign({}, this.movie);
      this.isEditing = !this.isEditing ;
    },
  },
}

export class Movie {
  titre
  anneeSortie
  realisateur
  synopsis
}

export class Realisateur {
  nomRealisateur
  nationnaliteRealisateur
  naissanceRealisateur

  constructor(nomRealisateur, nationnaliteRealisateur, naissanceRealisateur) {
    this.nomRealisateur = nomRealisateur;
    this.nationnaliteRealisateur = nationnaliteRealisateur;
    this.naissanceRealisateur = naissanceRealisateur
  }
}


