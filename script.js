// --- Joh's object---
var billJohn = {
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
billJohn.calculateTip();
billJohn.calculateAmount();
console.log(billJohn);

// ---Mark's object---

var billMark = {
  values:[77,375,110,45],
  tip:[],
  amount:[],
  calculateTip: function() {

    for (var i=0;i<this.values.length;i++) {
       if (this.values[i]<100) {
       this.tip.push(this.values[i]*.1);
      }
      else if (this.values[i]>=100 && this.values[i]<300) {
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
billMark.calculateTip();
billMark.calculateAmount();
console.log(billMark);

function calculateAverage(arr) {
  var sum = 0;
  for (var i =0; i<arr.length;i++) {
    sum=sum+arr[i];
  }
  return sum/arr.length;
}
// console.log(calculateAverage(billJohn.values));

function whoPayedMore() {
  if(calculateAverage(billJohn.values)>calculateAverage(billMark.values)) {
    console.log('John payed more in tip which on averge is '+
      calculateAverage(billJohn.values));
  }
  else {console.log('Mark payed more in tip which on averge is '+
    calculateAverage(billMark.values));

  }
  }
  whoPayedMore();
