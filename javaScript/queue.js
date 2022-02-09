//  Function queue
function Queue(){
    let collections = [] ;

    this.print = function(){
        console.log(collections);
    }

    this.enqueue = function(element){
        collections.push(element);
    }

    this.dequeue = function(){
        return collections.shift();
    }

    this.front = function(){
        if(collections[0]){
            return collections[0];
        }
        return false;
    }

    this.size = function(){
        return collections.length;
    }

    this.isEmpty = function() {
        return (collections.length === 0);
    };


}

let q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();

function priorityQueue(){
    let collections = [] ;

    this.print = function(){
        console.log(collections);
    }

    this.enqueue = function(element){
        if(this.isEmpty()){
            collections.push(element);
        }
        else{
            let added = false ;
            for (let i = 0 ; i<collections.length ; i++){
                if (element[1] < collection[i][1]){
                    collections.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if (!added){
                collections.push(element);
            }
        }
    };

    this.dequeue = function() {
        var value = collections.shift();
        return value[0];
    };
    this.front = function() {
        return collections[0];
    };
    this.size = function() {
        return collections.length;
    };
    this.isEmpty = function() {
        return (collections.length === 0);
    };
}

let pq = new priorityQueue();
pq.enqueue(['Bucky', 2]);
pq.enqueue(['Steven', 3]);
pq.enqueue(['John Doe', 1])
pq.enqueue(['T Swift', 2])
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();