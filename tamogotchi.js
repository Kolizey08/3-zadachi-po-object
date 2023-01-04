const tamogotchi = {
  name: "Gem",
  meal: 2,
  energy: 3,
  mood: 4,
  getStatus: function () {
    if (this.meal <= 0){
        this.name = 'умер :('
     }else if (this.energy <= 0){
       this.name = 'умер :(' 
     }else if(this.mood <= 0){
      this.name = 'умер :('  
     }
    if (this.meal < 3) {
      this.meal = "Я голоден";
    } else {
      this.meal = "Я не голоден";
    }
    if (this.energy < 3) {
      this.energy = "Я хочу спать";
    } else {
      this.energy = "Я не хочу спать";
    }
    if (this.mood < 3) {
      this.mood = "Мне грустно";
    } else {
      this.mood = "Мне весело";
    }
    return `Имя:${tamogotchi.name}, Еда:${tamogotchi.meal}, Энергия:${tamogotchi.energy}, Настроение:${tamogotchi.mood}.`;
  },
  setName: function () {
    this.name = "Boo";
    return;
  },
  eat: function () {
    if (this.meal < 10) {
      this.meal++ && this.mood--;
    }
    return;
  },

  sleep: function () {
    if (this.meal < 10) {
      this.energy++ && this.meal--;
    }
    return;
  },
  play: function () {
    if (this.meal < 10) {
      this.meal++ && this.energy--;
    }
  },
};
