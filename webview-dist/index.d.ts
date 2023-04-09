import { UnlistenFn } from '@tauri-apps/api/event';
export interface InvokeResult {
    code: number;
    message: string;
}
export interface ReadDataResult {
    size: number;
    data: number[];
}
export interface SerialPortInfo {
    port_name: string;
    port_type: string;
    vid: string | null;
    pid: string | null;
    manufacturer: string | null;
    product: string | null;
    serial_number: string | null;
}
export interface SerialportOptions {
    path: string;
    baudRate: number;
    encoding?: string;
    dataBits?: 5 | 6 | 7 | 8;
    flowControl?: null | 'Software' | 'Hardware';
    parity?: null | 'Odd' | 'Even';
    stopBits?: 1 | 2;
    timeout?: number;
    size?: number;
    [key: string]: any;
}
interface Options {
    dataBits: 5 | 6 | 7 | 8;
    flowControl: null | 'Software' | 'Hardware';
    parity: null | 'Odd' | 'Even';
    stopBits: 1 | 2;
    timeout: number;
    [key: string]: any;
}
interface ReadOptions {
    timeout?: number;
    size?: number;
}
declare class Serialport {
    isOpen: boolean;
    unListen?: UnlistenFn;
    encoding: string;
    options: Options;
    size: number;
    constructor(options: SerialportOptions);
    /**
     * @description: Get the list of serial ports
     * @return {Promise<SerialPortInfo[]>}
     */
    static available_ports(): Promise<SerialPortInfo[]>;
    /**
     * @description: Force to terminate the serial port
     * @param {string} path
     * @return {Promise<void>}
     */
    static forceClose(path: string): Promise<void>;
    /**
     * @description: Close all serial ports
     * @return {Promise<void>}
     */
    static closeAll(): Promise<void>;
    /**
     * @description: Stop listening to serial port
     * @return {Promise<void>}
     */
    cancelListen(): Promise<void>;
    /**
     * @description: Cancel read serial port data
     * @return {Promise<void>}
     */
    cancelRead(): Promise<void>;
    /**
     * @description:
     * @param {object} options
     * @return {Promise<void>}
     */
    change(options: {
        path?: string;
        baudRate?: number;
    }): Promise<void>;
    /**
     * @description: Close serial port
     * @return {Promise<InvokeResult>}
     */
    close(): Promise<void>;
    /**
     * @description: Listen to serial port data
     * @param {function} fn
     * @return {Promise<void>}
     */
    listen(fn: (...args: any[]) => void, isDecode?: boolean): Promise<void>;
    /**
     * @description: Open serial port
     * @return {*}
     */
    open(): Promise<void>;
    /**
     * @description: Read data from the serial port
     * @param {ReadOptions} options Read options { timeout, size }
     * @return {Promise<void>}
     */
    read(options?: ReadOptions): Promise<void>;
    /**
     * @description: Set the serial port baud rate
     * @param {number} value
     * @return {Promise<void>}
     */
    setBaudRate(value: number): Promise<void>;
    /**
     * @description: Set the serial port path
     * @param {string} value
     * @return {Promise<void>}
     */
    setPath(value: string): Promise<void>;
    /**
     * @description: Write data to the serial port
     * @param {string} value
     * @return {Promise<number>}
     */
    write(value: string): Promise<number>;
    /**
     * @description: Write binary data to the serial port
     * @param {Uint8Array} value
     * @return {Promise<number>}
     */
    writeBinary(value: Uint8Array | number[]): Promise<number>;
}
export { Serialport };
