import { Injectable } from "injection-js";
import { Observable } from "rxjs";
import { switchMap, filter } from "rxjs/operators";
import { Action } from "../../actions";

@Injectable()
export class ServerEffects {
	connectionEffect$ = this.actions$
		.pipe
		//filter(action => action.type === "Connect"),
		();

	constructor(private actions$: Observable<Action>) {}
}
