import Emittery from "emittery";
interface IConstructorArgs {
    container?: HTMLElement;
    url: string;
    name?: string;
    classList?: Array<string>;
    showIframe?: boolean;
    iframe?: HTMLIFrameElement | null;
}
export default class ParentAPI extends Emittery {
    readonly url: string;
    readonly parent: Window;
    readonly child: Window;
    readonly frame: HTMLIFrameElement;
    childOrigin: string;
    readonly container: HTMLElement;
    /**
     * The maximum number of attempts to send a handshake request to the parent
     */
    static maxHandshakeRequests: number;
    constructor({ container, url, name, classList, showIframe, iframe, }: IConstructorArgs);
    private dispatcher;
    emitToChild(eventName: string, data?: unknown): void;
    handshake(): Promise<ParentAPI>;
    get(property: string, ...args: Array<any>): Promise<any>;
    destroy(destroyIframe?: boolean): void;
}
export declare function timeout(ms: number): Promise<never>;
export {};
