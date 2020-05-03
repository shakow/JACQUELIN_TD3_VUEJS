import Vue from 'vue'
import App from './App.vue'
import router from './router'
import StarRating from 'vue-star-rating'

Vue.config.productionTip = false;
Vue.component('star-rating', StarRating);

Vue.prototype.$movies = [{
    img: "https://fr.web.img3.acsta.net/medias/nmedia/18/62/89/45/18876909.jpg",
    displayed: false,
    titre: "Iron Man",
    anneeSortie: "2008",
    genre: " Action, Science fiction",
    langue: "Français",
    realisateur: {
      nomRealisateur: "Jon Favreau",
      nationnaliteRealisateur: "Américain",
      naissanceRealisateur: "19 Octobre 1966"
    },
    synopsis: "Tony Stark, inventeur de génie, vendeur d'armes et playboy milliardaire, est kidnappé en Aghanistan. Forcé par ses ravisseurs de fabriquer une arme redoutable, il construit en secret une armure high-tech révolutionnaire qu'il utilise pour s'échapper. Comprenant la puissance de cette armure, il décide de l'améliorer et de l'utiliser pour faire régner la justice et protéger les innocents. ",
    note: 4
  },
  {
    img: "https://fr.web.img3.acsta.net/medias/nmedia/18/85/31/58/20042068.jpg",
    displayed: false,
    titre: "Avengers",
    anneeSortie: "2012",
    genre: " Action, Aventure, Science fiction",
    langue: "Français",
    realisateur: {
      nomRealisateur: "Joss Whedon",
      nationnaliteRealisateur: "Américain",
      naissanceRealisateur: "23 juin 1964"
    },
    synopsis: "Lorsque Nick Fury, le directeur du S.H.I.E.L.D., l'organisation qui préserve la paix au plan mondial, cherche à former une équipe de choc pour empêcher la destruction du monde, Iron Man, Hulk, Thor, Captain America, Hawkeye et Black Widow répondent présents.Les Avengers ont beau constituer la plus fantastique des équipes, il leur reste encore à apprendre à travailler ensemble, et non les uns contre les autres, d'autant que le redoutable Loki a réussi à accéder au Cube Cosmique et à son pouvoir illimité... ",
    note: 4
  },
  {
    img: "https://fr.web.img4.acsta.net/pictures/16/01/19/16/49/249124.jpg",
    displayed: false,
    titre: "Deadpool",
    anneeSortie: "2016",
    genre: "Comédie, Action, Fantastique",
    langue: "Français",
    realisateur: {
      nomRealisateur: "Tim Miller",
      nationnaliteRealisateur: "Américain",
      naissanceRealisateur: "28 février 1970"
    },
    synopsis: "Deadpool, est l'anti-héros le plus atypique de l'univers Marvel. A l'origine, il s'appelle Wade Wilson : un ancien militaire des Forces Spéciales devenu mercenaire. Après avoir subi une expérimentation hors norme qui va accélérer ses pouvoirs de guérison, il va devenir Deadpool. Armé de ses nouvelles capacités et d'un humour noir survolté, Deadpool va traquer l'homme qui a bien failli anéantir sa vie.",
    note: 5
  }
]


new Vue({
  router,
  StarRating,
  render: h => h(App)
}).$mount('#app')


