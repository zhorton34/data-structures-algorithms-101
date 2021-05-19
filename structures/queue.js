class Queue
{
  static build()
  {
    return new Queue()
  }
  constructor()
  {
    this.first = { value: null, next: null }
    this.last = this.first
    this.length = 0
  }

  peek()
  {
    return this.first
  }

  enqueue(value = undefined)
  {
    if (this.isEmpty()) {
      this.first = { value, next: null }
      this.last = this.first
    } 

    else if (this.length === 1) {
      this.last = { value, next: null }
      this.first.next = this.last

    }
    else if (this.length > 1) {
      this.last.next = { value, next: null}
      this.last = this.last.next 
    }

    this.length++
    return this.isNotEmpty()
  }

  dequeue()
  {
    let first = this.first 

    this.length = this.length > 0 ? this.length-- ? this.length
    this.first = this.first.next ? this.first.next : { value: null, next: null }
    this.last = this.isEmpty() ? this.first : this.last

    return this.isEmpty() || this.first !== first
  }

  isNotEmpty()
  {
    return this.isEmpty() === false
  }
  isEmpty ()
  {
    return this.length === 0
  }


  traverse()
  {
    while (this.isNotEmpty()) {
      console.log(this.peek())
      this.dequeue()
    }
  }
}

module.exports = { Queue }