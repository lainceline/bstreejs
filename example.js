var myBstree = new bstree();

for (var i = 0; i < 20; i++) {
  myBstree.insert(Math.floor(Math.random() * 100) + 1);
}

myBstree.traverse(myBstree.root, function (key) { console.log(key); });

console.log(myBstree.find(86));
