import {fromEvent, pluck} from "rxjs";

fromEvent<TouchEvent>(document, 'touchstart')
    .pipe(
        pluck('changedTouches', 0, 'clientX')
    )
fromEvent<TouchEvent>(document, 'touchend')