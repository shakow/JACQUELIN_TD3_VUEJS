export default {
  name: 'movieitem',
  components:{},
  props: [],
  data() {
    return {
      movies: this.$movies,
      barreRecherche:"",
      selectRecherche:"",
      newMovieReal: {
        nomRealisateur: "",
        nationnaliteRealisateur: "",
        naissanceRealisateur: ""
      },
      newMovie: {
        displayed: false,
        img: "",
        titre: "",
        anneeSortie: 0,
        genre: "",
        langue: "",
        realisateur: this.newMovieReal,
        synopsis: "",
        note: 0,
      },
      newMovieImg:"",
      newMovieTitle: "",
      newMovieYear: "",
      newMovieRealName: "",
      newMovieRealNationalite: "",
      newMovieRealBirth: "",
      newMovieSynopsis: "",
      newMovieNote:"",
    }
  },
  computed: {
    recherche: function() {
      if (this.selectRecherche == "titre") {
        return this.$movies.filter(data => data.titre.includes(this.barreRecherche));
      }if (this.selectRecherche == "realisateur") {
        return this.$movies.filter(data => data.realisateur.nomRealisateur.includes(this.barreRecherche));
      }if (this.selectRecherche == "anneeSortie") {
        return this.$movies.filter(data => data.anneeSortie.includes(this.barreRecherche));
      }
      else {
        return this.$movies;
      }
    }
  },
  mounted() {},
  methods: {
    deleteMovie: function (index) {
      this.$movies.splice(index, 1)
    },
    addMovie: function () {
      const newReal = new Realisateur(
        this.newMovieRealName,
        this.newMovieRealNationalite,
        this.newMovieRealBirth,
      );
      const newMovie = new Movie(
        this.newMovieImg,
        this.newMovieTitle,
        this.newMovieYear,
        newReal,
        this.newMovieSynopsis,
        this.newMovieNote);

      this.$movies.push(newMovie);
    },
    display: function (index) {
      if (this.$movies[index].displayed == false)
        this.$movies[index].displayed = true;
      else if (this.$movies[index].displayed == true)
        this.$movies[index].displayed = false;

        
    },                
  }
}

export class Movie {
  titre
  anneeSortie
  realisateur
  synopsis
  note
  img

  constructor(img,titre, anneeSortie, realisateur, synopsis, note) {
    this.displayed = false;
    this.img = img;
    this.titre = titre;
    this.anneeSortie = anneeSortie;
    this.realisateur = realisateur;
    this.synopsis = synopsis;
    this.note = note
  }
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