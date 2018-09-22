/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = function(l1, l2) {
    const fakeRoot = new ListNode(0);
    let node = fakeRoot;
    let a = 0;
    while (l1 || l2) {
        let curVal = a;
        if (l1) curVal += l1.val;
        if (l2) curVal += l2.val;
        let nodeVal = curVal;
        if (curVal > 9) {
            nodeVal = curVal - 10;
            a = 1;
        } else {
            a = 0;
        }
        const newNode = new ListNode(nodeVal);
        node.next = newNode;
        node = node.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    if (a) node.next = new ListNode(1);
    return fakeRoot.next;
};