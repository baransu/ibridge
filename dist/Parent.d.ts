import Emittery from "emittery";
import { IGetRequest } from "./events";
interface IConstructorArgs {
    container?: HTMLElement;
    url: string;
    name?: string;
    classList?: Array<string>;
    showIframe?: boolean;
}
export default class ParentAPI<TModel, TContext = any> extends Emittery {
    readonly url: string;
    readonly parent: Window;
    readonly child: Window;
    readonly frame: HTMLIFrameElement;
    childOrigin: string;
    readonly container: HTMLElement;
    private model;
    context?: TContext;
    /**
     * The maximum number of attempts to send a handshake request to the parent
     */
    static maxHandshakeRequests: number;
    constructor({ container, url, name, classList, showIframe, }: IConstructorArgs, model: TModel, context?: TContext);
    private dispatcher;
    private setListeners;
    emitToChild(eventName: string, data?: unknown): void;
    handshake(): Promise<ParentAPI<TModel, TContext>>;
    get(property: string, ...args: Array<any>): Promise<any>;
    destroy(): void;
    handleGet({ id, property, args }: IGetRequest): Promise<void>;
}
export declare function timeout(ms: number): Promise<never>;
export {};
