var bill = {
  values:[124,48,268,180,42],
  tip:[],
  amount:[],
  calculateTip: function() {

    for (var i=0;i<this.values.length;i++) {
       if (this.values[i]<50) {
       this.tip.push(this.values[i]*.1);
      }
      else if (this.values[i]>=50 && this.values[i]<200) {
        this.tip.push(this.values[i]*.15);
      }
      else {
          this.tip.push(this.values[i]*.2);
     }
  }
},
calculateAmount: function() {
  for (var i=0;i<this.values.length;i++) {
    this.amount.push(this.tip[i]+this.values[i]);
  }
}
}
bill.calculateTip();
bill.calculateAmount();
console.log(bill);
