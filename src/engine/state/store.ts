import { Observable, BehaviorSubject, Subject } from "rxjs";
import { scan, map } from 'rxjs/operators';

export interface Action{
    type: String;
    payload?: any;
}
const win = window as any;
win.devTools = win.__REDUX_DEVTOOLS_EXTENSION__.connect();

// ... custom operator

export const reducer = () =>
  scan((state, action: Action) => {

    // ...omitted
    win.devTools.send(action.type, next);
    return next;
  }, {});
  

export class Store<T> {
    public state$: Observable<T>;
    private _state$: BehaviorSubject<T>;
    public actions$: Subject<Action>;

    constructor (initialState: T) {
        this._state$ = new BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable();
    }

    get state (): T {
        return this._state$.getValue();
    }

    setState (nextState: T): void {
        this._state$.next(nextState);
    }

    select(path: (state: T) => any): Observable<any> {
      return this.state$.pipe(map(path));
    }
  

    dispatch(action: Action) {
        this.actions$.next(action);
      }
}