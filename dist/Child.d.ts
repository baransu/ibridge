import Emittery from "emittery";
import { IGetRequest } from "./events";
export interface IConstructorArgs<TModel, TContext> {
    model: TModel;
    context: TContext;
}
export default class ChildAPI<TModel, TContext = any> extends Emittery {
    private model;
    readonly parent: Window;
    readonly child: Window;
    parentOrigin?: string;
    context?: TContext;
    constructor(model: TModel, context?: TContext);
    private setListeners;
    private dispatcher;
    emitToParent(eventName: string, data?: unknown): void;
    handshake(): Promise<ChildAPI<TModel, TContext>>;
    get(property: string, ...args: Array<any>): Promise<any>;
    handleGet({ id, property, args }: IGetRequest): Promise<void>;
}
