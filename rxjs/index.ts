import {Observable} from "rxjs";

const exampleObserever$ = new Observable(subscriber => {
        let count = 1
        const int = setInterval(() => {
            if (count % 5 === 0) {
                clearInterval(int)
                subscriber.complete()
                return
            }
            subscriber.next(count++)
        }, 3000)
    }
)
exampleObserever$.subscribe((v) => {
    console.log(v)
}, (error)=>{}, (complite)=>{})