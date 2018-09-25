cclass Sorter {
  constructor() {
    this.myComparator = underfined;
    this.arr = [];
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return.this.arr;
  }

  sort(indices) {
    function compareNumeric(a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
    }
    var support = [];
    indices.sort(compareNumeric);

    for (var i=0; i < indices.length; i++) {
      support.push(this.arr[indices[i]]);
    }

    if (this.myComparator)
      support.sort(this.myComparator);
    else {
      support.sort(compareNumeric);

    for (var i=0; i<support.length; i++) {
      this.arr[indices[i]] = support[i];
    }

    return this.arr;
    }
  }

  setComparator(compareFunction) {
    this.myComparator = myComparator;
  }
}

module.exports = Sorter;
