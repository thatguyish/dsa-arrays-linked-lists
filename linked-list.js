/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    var currentNode = new Node(val)
    if (this.length > 0) {
      var tempnode = this.head
      while (tempnode.next) {
        tempnode = tempnode.next
      }
      tempnode.next = currentNode
      this.tail = currentNode
      this.length += 1
    } else {
      //set current node as head and tail
      this.head = currentNode
      this.tail = currentNode
      this.length += 1
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    //create a node and set it to the head then set the previous head as the next node 
    var currentHead = this.head
    var newHead = new Node(val)
    if (this.length > 0) {
      this.head = newHead
      this.head.next = currentHead
      this.length += 1

    } else {
      this.head = newHead
      this.tail = newHead
      this.length += 1
    }

  }

  /** pop(): return & remove last item. */

  pop() {
    //return the last item and make the previous node the tail

    var currentNode = this.head

    //go to last node from head if enough nodes
    if (this.length > 1) {
      while (currentNode.next.next) {
        currentNode = currentNode.next
      }
      var prevlast = currentNode.next.val
      currentNode.next = null
      this.tail = currentNode
      this.length -= 1
      return prevlast
    } else if (this.length == 1) {
      var nodeval = this.head.val
      this.head = null
      this.tail = null
      this.length -= 1
      return nodeval
    } else {
      return null
    }

    //make last node 
  }

  /** shift(): return & remove first item. */

  shift() {

    var currentNode = this.head

    //go to head if enough nodes
    if (this.length > 1) {
      var newHead = currentNode.next
      this.head = newHead
      this.length -= 1
      return currentNode.val
    } else if (this.length == 1) {
      var nodeval = currentNode.val
      this.head = null
      this.tail = null
      this.length -= 1
      return nodeval
    } else {
      return null
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    //is 0 based index
    var curNode = this.head
    var nodeCount = 0
    while (curNode) {
      if (idx == nodeCount) {
        return curNode.val
      }
      nodeCount += 1
      curNode = curNode.next
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    var curNode = this.head
    var nodeCount = 0
    while (curNode) {
      if (idx == nodeCount) {
        curNode.val = val
      }
      nodeCount += 1
      curNode = curNode.next
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > 0 && idx <this.length) {

      var curNode = this.head
      var nodeCount = 0
      while (curNode) {
        if (idx-1 == nodeCount) {
          var newNode = new Node(val)
          var nextnode = curNode.next
          curNode.next =newNode
          newNode.next = nextnode
          this.length+=1
        }
        nodeCount += 1
        curNode = curNode.next
      }
    }else if(idx == 0){
      this.unshift(val)
    }else if(idx == this.length){
      this.push(val)
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx > 0 && idx <this.length) {

      var curNode = this.head
      var nodeCount = 0
      while (curNode) {
        if (idx-1 == nodeCount) {
          curNode.next =curnode.next.next
          this.length-=1
        }
        nodeCount += 1
        curNode = curNode.next
      }
    }else if(idx == 0){
      this.shift()
    }else if(idx == this.length){
      this.pop()
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length>1) {

      var curNode = this.head
      var totalVal = 0
      while (curNode) {
        
        totalVal+=curNode.val
        curNode = curNode.next
      }
      return totalVal/this.length
    }else if(this.length == 1){
      return this.head.val
    }else if(this.length==0){
      return 0
    }
  }
}

module.exports = LinkedList;
