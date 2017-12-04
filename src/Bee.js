class Bee extends Grub {
  constructor(age, color, job) {
  //when should we pass inputs to constructor function?
    //under what circumstances should we pass inputs to super function?
    super(age, color, job);
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  }
};
