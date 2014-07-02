function bsnode (key) {
  this.key = key;
}

function bstree () {}

bstree.prototype.find = function (key) {
  return this.findFrom(key, this.root);
}

bstree.prototype.findFrom = function(key, node){
  if (typeof node === 'undefined' || node.key === key) {
    return node;
  } else if (key < node.key) {
    return this.findFrom(key, node.left);
  } else {
    return this.findFrom(key, node.right);
  }
}

bstree.prototype.insert = function (key) {
  this.insertTo(this.root, key);
}

bstree.prototype.insertTo = function (node, key) {
  if (typeof node === 'undefined') {
      node = new bsnode(key);
      this.root = node;
  } else if (key < node.key) {
    if (typeof node.left === 'undefined') {
      node.left = new bsnode(key);
    } else {
      this.insertTo(node.left, key);
    }
  } else if (key > node.key) {
    if (typeof node.right === 'undefined') {
      node.right = new bsnode(key);
    } else {
      this.insertTo(node.right, key);
    }
  }
  return;
}

bstree.prototype.traverse = function (node, callback) {
  //traverses in order, runs callback on each node's key
  if (typeof node === 'undefined') {
    return;
  }

  this.traverse(node.left, callback);
  callback(node.key);
  this.traverse(node.right, callback);
}
