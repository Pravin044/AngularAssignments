import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { IPostContent } from "../Posts/Interface/PostModelinterface";

@Injectable({
    providedIn:'root'
})
export class DataService{
    private valueObs: BehaviorSubject < any > = new BehaviorSubject < any > (undefined);

    public setValue(value: IPostContent): void {
        this.valueObs.next(value);
    }

    public getValue(): Observable < IPostContent > {
        return this.valueObs;
    }
}