import UrlPattern from 'url-pattern';
export { UrlPattern };
export declare type HandlerPromise = Promise<Response | any | void>;
export declare type HandlerFunction = (...args: any[]) => HandlerPromise;
export interface HandlerContext extends MatchResult {
}
export interface RouteOptions {
    method?: string;
    matchUrl?: boolean;
}
export interface Route {
    pattern: UrlPattern;
    handler: HandlerFunction;
    options: RouteOptions;
}
export interface MatchResult {
    params: any | null;
    handler: HandlerFunction;
    url: URL;
    method: string;
    route: Route;
    request?: Request;
    event?: FetchEvent;
    ctx: any;
}
export interface HandleResult {
    match: MatchResult;
    handlerPromise: HandlerPromise;
}
export declare class Router {
    private routes;
    ctx: any;
    all(pattern: string | UrlPattern, handler: HandlerFunction, options?: RouteOptions): Router;
    get(pattern: string | UrlPattern, handler: HandlerFunction, options?: RouteOptions): Router;
    post(pattern: string | UrlPattern, handler: HandlerFunction, options?: RouteOptions): Router;
    put(pattern: string | UrlPattern, handler: HandlerFunction, options?: RouteOptions): Router;
    patch(pattern: string | UrlPattern, handler: HandlerFunction, options?: RouteOptions): Router;
    delete(pattern: string | UrlPattern, handler: HandlerFunction, options?: RouteOptions): Router;
    head(pattern: string | UrlPattern, handler: HandlerFunction, options?: RouteOptions): Router;
    options(pattern: string | UrlPattern, handler: HandlerFunction, options?: RouteOptions): Router;
    private addRoute;
    match(url: URL | string, method: string): MatchResult | null;
    matchRequest(request: Request): MatchResult | null;
    matchEvent(event: FetchEvent): MatchResult | null;
    handle(url: URL | string, method: string): HandleResult | null;
    handleRequest(request: Request): HandleResult | null;
    handleEvent(event: FetchEvent): HandleResult | null;
    clear(): void;
}
