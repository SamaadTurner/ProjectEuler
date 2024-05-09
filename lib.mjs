export class Range {
  constructor(end) {
    this.i = 0;
    this.end = end;
  }

  getNext() {
    if (this.i === this.end) {
      return undefined;
    }
    let ret = this.i;
    this.i += 1;
    return ret;
  }

  filter(cond) {
    return new Filter(cond, this);
  }
}

export class Filter {
  constructor(cond, src) {
    this.cond = cond;
    this.src = src;
  }

  getNext() {
    while (true) {
      let next = this.src.getNext();
      if (next === undefined) {
        return undefined;
      }
      if (this.cond(next)) {
        return next;
      }
    }
  }

  sum() {
    return sum(this);
  }
}

function sum(src) {
  let s = 0;
  let next = src.getNext();
  while (next != undefined) {
    s += next;
    next = src.getNext();
  }
  return s;
}

export class TakeWhile {
  constructor(cond, src) {
    this.cond = cond;
    this.src = src;
  }

  getNext() {
    let next = this.src.getNext();
    if (next === undefined) {
      return undefined;
    }
    if (this.cond(next)) {
      return next;
    }
    return undefined;
  }
  filter(cond) {
    return new Filter(cond, this);
  }
  sum() {
    return sum(this);
  }
}
