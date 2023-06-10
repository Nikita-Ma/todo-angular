import {iif, of} from "rxjs";


const rnd = Math.random() * 100
let sub$ = iif(() => {
    return rnd > 5
}, of('value >5'), of('value<5'))

sub$.subscribe((value) => {
    console.log(value)
})