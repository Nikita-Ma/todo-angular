// ReactiveX - iterator + observer

class CustomIterable {

    private cursor = 0
    private value: number

    constructor(private arr: number[], private divistor = 1) {
    }


    private next() {
        while (this.cursor < this.arr.length) {
            this.value = this.arr[this.cursor++]
            if (this.value % this.divistor === 0) {
                return {done: false, value: this.value}
            }
        }
    }
}