const list1 = [1, 3, 5, 7, 8];
const list2 = [1, 2, 3,5,6,8,10];

const mergeTwoLists = (list1, list2) => {
    class Node {
        constructor(){
               this.data = 0;
               this.next = null;
               }
           }
        
           // Function to create newNode in a linkedlist
           function newNode(key) {
                temp = new Node();
               temp.data = key;
               temp.next = null;
               return temp;
           }
        
           // A utility function to print linked list
           function printList( node) {
               while (node != null) {
                   console.log(node.data+" ");
                   node = node.next;
               }
           }
        
           // Merges two given lists in-place. This function
           // mainly compares head nodes and calls mergeUtil()
           function merge( h1,  h2) {
               if (h1 == null)
                   return h2;
               if (h2 == null)
                   return h1;
        
               // start with the linked list
               // whose head data is the least
               if (h1.data < h2.data) {
                   h1.next = merge(h1.next, h2);
                   return h1;
               } else {
                   h2.next = merge(h1, h2.next);
                   return h2;
               }
           }
        
           // Driver program
            
                head1 = newNode(1);
               head1.next = newNode(3);
               head1.next.next = newNode(5);
        
               // 1.3.5 LinkedList created
        
                head2 = newNode(0);
               head2.next = newNode(2);
               head2.next.next = newNode(4);
        
               // 0.2.4 LinkedList created
        
                mergedhead = merge(list1, list2);
        
               printList(mergedhead);
}

console.log(mergeTwoLists([1,2,3,5,6,8], [2,3,4,5,7,8]));