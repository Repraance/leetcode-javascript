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

function ListNode(val) {
    this.val = val;
    this.next = null;
}

const mergeTwoLists = (l1, l2) => {
    const rootNode = new ListNode(0);
    let curNode = rootNode;
    while (curNode) {
        if (l1 && l2) {
            if (l1.val < l2.val) {
                curNode.next = l1;
                l1 = l1.next;
            } else {
                curNode.next = l2;
                l2 = l2.next;
            }
        } else {
            if (l1) {
                curNode.next = l1;
                l1 = l1.next;
            } else if (l2) {
                curNode.next = l2;
                l2 = l2.next;
            }
        }
        curNode = curNode.next;
    }
    return rootNode.next;
};