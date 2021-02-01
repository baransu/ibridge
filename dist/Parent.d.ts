import Emittery from "emittery";
interface IConstructorArgs {
    container?: HTMLElement;
    url: string;
    name?: string;
    classList?: Array<string>;
    showIframe?: boolean;
    secure?: boolean;
}
export default class ParentAPI extends Emittery {
    readonly url: string;
    readonly parent: Window;
    readonly child: Window;
    readonly frame: HTMLIFrameElement;
    childOrigin: string;
    readonly container: HTMLElement;
    readonly secure: boolean;
    /**
     * The maximum number of attempts to send a handshake request to the parent
     */
    static maxHandshakeRequests: number;
    constructor({ container, url, name, classList, showIframe, secure, }: IConstructorArgs);
    private dispatcher;
    emitToChild(eventName: string, data?: unknown): void;
    handshake(): Promise<ParentAPI>;
    get(property: string, ...args: Array<any>): Promise<any>;
    destroy(): void;
}
export declare function timeout(ms: number): Promise<never>;
export {};