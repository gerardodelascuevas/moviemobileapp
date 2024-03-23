export abstract class HttpAdapter {
    // constructor(parameters) {
        
    // }
    abstract get<T> (url: string, options?: any): Promise<T>
}