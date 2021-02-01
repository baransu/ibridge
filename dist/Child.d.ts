import Emittery from "emittery";
import { IGetRequest } from "./events";
export interface IConstructorArgs<TModel, TContext> {
    model: TModel;
    context: TContext;
    secure?: boolean;
}
export default class ChildAPI<TModel, TContext = any> extends Emittery {
    private model;
    readonly parent: Window;
    readonly child: Window;
    parentOrigin?: string;
    context?: TContext;
    readonly secure: boolean;
    constructor({ model, context, secure, }: IConstructorArgs<TModel, TContext>);
    private setListeners;
    private dispatcher;
    emitToParent(eventName: string, data?: unknown): void;
    handshake(): Promise<ChildAPI<TModel, TContext>>;
    handleGet({ id, property, args }: IGetRequest): Promise<void>;
}
