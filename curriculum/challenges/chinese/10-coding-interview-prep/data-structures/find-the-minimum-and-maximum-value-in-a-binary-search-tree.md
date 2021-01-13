---
id: 587d8256367417b2b2512c7a
title: 在二叉搜索树中查找最小值和最大值
challengeType: 1
videoUrl: ''
dashedName: find-the-minimum-and-maximum-value-in-a-binary-search-tree
---

# --description--

这一系列挑战将介绍树数据结构。树木是计算机科学中重要且通用的数据结构。当然，他们的名字来源于这样一个事实：当他们看到它们时，它们看起来很像我们在自然界中熟悉的树木。树数据结构以一个节点（通常称为根）开始，并从此处分支到其他节点，每个节点可以具有更多子节点，依此类推。数据结构通常以顶部的根节点可视化;你可以把它想象成一棵倒置的天然树。首先，让我们描述一下我们将在树上遇到的一些常用术语。根节点是树的顶部。树中的数据点称为节点。具有通向其他节点的分支的节点被称为分支通向的节点的父节点（子节点）。其他更复杂的家庭术语适用于您所期望的。子树是指特定节点的所有后代，分支可以称为边，而叶节点是树末端没有子节点的节点。最后，请注意树本质上是递归数据结构。也就是说，节点的任何子节点都是其子树的父节点，依此类推。在为常见树操作设计算法时，树的递归性质非常重要。首先，我们将讨论一种特定类型的树，即二叉树。实际上，我们实际上将讨论一个特定的二叉树，一个二叉搜索树。让我们来描述这意味着什么。虽然树数据结构可以在单个节点上具有任意数量的分支，但是二叉树对于每个节点只能具有两个分支。此外，针对子子树排序二叉搜索树，使得左子树中的每个节点的值小于或等于父节点的值，并且右子树中的每个节点的值是大于或等于父节点的值。

现在这个有序的关系很容易看到。请注意，根节点8左侧的每个值都小于8，右侧的每个值都大于8.还要注意，此关系也适用于每个子树。例如，第一个左子项是子树。 3是父节点，它有两个子节点 - 通过控制二进制搜索树的规则，我们知道甚至没有看到这个节点的左子节点（及其任何子节点）将小于3，右边child（及其任何子级）将大于3（但也小于结构的根值），依此类推。二进制搜索树是非常常见且有用的数据结构，因为它们在几种常见操作（例如查找，插入和删除）的平均情况下提供对数时间。说明：我们将从简单开始。除了为树创建节点的函数之外，我们还在这里定义了二叉搜索树结构的骨架。观察每个节点可能具有左右值。如果它们存在，将为它们分配子子树。在我们的二叉搜索树中，定义两个方法， `findMin`和`findMax` 。这些方法应返回二叉搜索树中保存的最小值和最大值（不用担心现在向树中添加值，我们在后台添加了一些值）。如果遇到困难，请反思二进制搜索树必须为true的不变量：每个左子树小于或等于其父树，每个右子树大于或等于其父树。我们还要说我们的树只能存储整数值。如果树为空，则任一方法都应返回`null` 。

# --hints--

存在`BinarySearchTree`数据结构。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    }
    return typeof test == 'object';
  })()
);
```

二叉搜索树有一个名为`findMin`的方法。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.findMin == 'function';
  })()
);
```

二叉搜索树有一个名为`findMax`的方法。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.findMax == 'function';
  })()
);
```

`findMin`方法返回二叉搜索树中的最小值。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.findMin !== 'function') {
      return false;
    }
    test.add(4);
    test.add(1);
    test.add(7);
    test.add(87);
    test.add(34);
    test.add(45);
    test.add(73);
    test.add(8);
    return test.findMin() == 1;
  })()
);
```

`findMax`方法返回二叉搜索树中的最大值。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.findMax !== 'function') {
      return false;
    }
    test.add(4);
    test.add(1);
    test.add(7);
    test.add(87);
    test.add(34);
    test.add(45);
    test.add(73);
    test.add(8);
    return test.findMax() == 87;
  })()
);
```

`findMin`和`findMax`方法为空树返回`null` 。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.findMin !== 'function') {
      return false;
    }
    if (typeof test.findMax !== 'function') {
      return false;
    }
    return test.findMin() == null && test.findMax() == null;
  })()
);
```

# --seed--

## --after-user-code--

```js
BinarySearchTree.prototype = Object.assign(
  BinarySearchTree.prototype,
  {
    add: function(value) {
      function searchTree(node) {
        if (value < node.value) {
          if (node.left == null) {
            node.left = new Node(value);
            return;
          } else if (node.left != null) {
            return searchTree(node.left);
          }
        } else if (value > node.value) {
          if (node.right == null) {
            node.right = new Node(value);
            return;
          } else if (node.right != null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      }

      var node = this.root;
      if (node == null) {
        this.root = new Node(value);
        return;
      } else {
        return searchTree(node);
      }
    }
  }
);
```

## --seed-contents--

```js
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
  
  // Only change code above this line
}
```

# --solutions--

```js
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  this.findMin = function() {
    // Empty tree.
    if (!this.root) {
      return null;
    }
    let currentNode = this.root;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  };
  this.findMax = function() {
    // Empty tree.
    if (!this.root) {
      return null;
    }
    let currentNode = this.root;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  };
  this.add = function(value) {
    // Empty tree.
    if (!this.root) {
      this.root = new Node(value);
      return undefined;
    }
    return this.addNode(this.root, value);
  };
  this.addNode = function(node, value) {
    // Check if value already exists.
    if (node.value === value) return null;
    if (value < node.value) {
      if (node.left) {
        return this.addNode(node.left, value);
      } else {
        node.left = new Node(value);
        return undefined;
      }
    } else {
      if (node.right) {
        return this.addNode(node.right, value);
      } else {
        node.right = new Node(value);
        return undefined;
      }
    }
  };
  this.isPresent = function(value) {
    if (!this.root) {
      return null;
    }
    return this.isNodePresent(this.root, value);
  };
  this.isNodePresent = function(node, value) {
    if (node.value === value) return true;
    if (value < node.value) {
      return node.left ? this.isNodePresent(node.left, value) : false;
    } else {
      return node.right ? this.isNodePresent(node.right, value) : false;
    }
    return false;
  };
  this.findMinHeight = function() {
    if (!this.root) {
      return -1;
    }
    let heights = {};
    let height = 0;
    this.traverseTree(this.root, height, heights);
    return Math.min(...Object.keys(heights));
  };
  this.findMaxHeight = function() {
    if (!this.root) {
      return -1;
    }
    let heights = {};
    let height = 0;
    this.traverseTree(this.root, height, heights);
    return Math.max(...Object.keys(heights));
  };
  this.traverseTree = function(node, height, heights) {
    if (node.left === null && node.right === null) {
      return (heights[height] = true);
    }
    if (node.left) {
      this.traverseTree(node.left, height + 1, heights);
    }
    if (node.right) {
      this.traverseTree(node.right, height + 1, heights);
    }
  };
  this.isBalanced = function() {
    return this.findMaxHeight() > this.findMinHeight() + 1;
  };
  // DFS tree traversal.
  this.inorder = function() {
    if (!this.root) return null;
    let result = [];

    function traverseInOrder(node) {
      if (node.left) traverseInOrder(node.left);
      result.push(node.value);
      if (node.right) traverseInOrder(node.right);
    }
    traverseInOrder(this.root);
    return result;
  };
  this.preorder = function() {
    if (!this.root) return null;
    let result = [];

    function traverseInOrder(node) {
      result.push(node.value);
      if (node.left) traverseInOrder(node.left);
      if (node.right) traverseInOrder(node.right);
    }
    traverseInOrder(this.root);
    return result;
  };
  this.postorder = function() {
    if (!this.root) return null;
    let result = [];

    function traverseInOrder(node) {
      if (node.left) traverseInOrder(node.left);
      if (node.right) traverseInOrder(node.right);
      result.push(node.value);
    }
    traverseInOrder(this.root);
    return result;
  };
  // BFS tree traversal.
  this.levelOrder = function() {
    if (!this.root) return null;
    let queue = [this.root];
    let result = [];
    while (queue.length) {
      let node = queue.shift();
      result.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  };
  this.reverseLevelOrder = function() {
    if (!this.root) return null;
    let queue = [this.root];
    let result = [];
    while (queue.length) {
      let node = queue.shift();
      result.push(node.value);
      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }
    return result;
  };
  // Delete a leaf node.
}
let bst = new BinarySearchTree();
```
