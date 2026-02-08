/// <reference types="vite/client" />

// CSS Paint API types
declare global {
    interface CSS {
        paintWorklet: {
            addModule(url: string): Promise<void>;
        };
    }
}

export { }
