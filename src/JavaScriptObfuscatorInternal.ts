import * as esprima from 'esprima';
import * as escodegen from 'escodegen';

import { IObfuscatorOptions } from "./interfaces/IObfuscatorOptions";
import { IGeneratorOutput } from "./interfaces/IGeneratorOutput";
import { INode } from './interfaces/nodes/INode';
import { IObfuscationResult } from "./interfaces/IObfuscationResult";
import { IOptions } from './interfaces/IOptions';

import { ObfuscationResult } from "./ObfuscationResult";
import { Obfuscator } from "./Obfuscator";
import { Options } from "./options/Options";
import { SourceMapCorrector } from "./SourceMapCorrector";

export class JavaScriptObfuscatorInternal {
    /**
     * @type {GenerateOptions}
     */
    private static escodegenParams: escodegen.GenerateOptions = {
        verbatim: 'x-verbatim-property',
        sourceMapWithCode: true
    };

    /**
     * @type {IGeneratorOutput}
     */
    private generatorOutput: IGeneratorOutput;

    /**
     * @type {IOptions}
     */
    private options: IOptions;

    /**
     * @type {string}
     */
    private sourceCode: string;

    /**
     * @type {string}
     */
    private sourceMapUrl: string = '';

    /**
     * @param sourceCode
     * @param obfuscatorOptions
     */
    constructor (sourceCode: string, obfuscatorOptions?: IObfuscatorOptions) {
        this.sourceCode = sourceCode;

        if (obfuscatorOptions) {
            this.options = new Options(obfuscatorOptions);
        }
    }

    /**
     * @param sourceCode
     * @param astTree
     * @param options
     */
    private static generateCode (sourceCode: string, astTree: INode, options: IOptions): IGeneratorOutput {
        let escodegenParams: escodegen.GenerateOptions = Object.assign(
                {},
                JavaScriptObfuscatorInternal.escodegenParams
            ),
            generatorOutput: IGeneratorOutput;

        if (options.sourceMap) {
            escodegenParams.sourceMap = 'sourceMap';
            escodegenParams.sourceContent = sourceCode;
        }

        escodegenParams.format = {
            compact: options.compact
        };

        generatorOutput = escodegen.generate(astTree, escodegenParams);
        generatorOutput.map = generatorOutput.map ? generatorOutput.map.toString() : '';

        return generatorOutput;
    }

    /**
     * @returns {IObfuscationResult}
     */
    public getObfuscationResult (): IObfuscationResult {
        return new SourceMapCorrector(
            new ObfuscationResult(
                this.generatorOutput.code,
                this.generatorOutput.map
            ),
            this.sourceMapUrl,
            this.options.sourceMapMode
        ).correct();
    }

    public obfuscate (): void {
        let astTree: INode = esprima.parse(this.sourceCode, {
            loc: true
        });

        astTree = new Obfuscator(this.options).obfuscateNode(astTree);

        this.generatorOutput = JavaScriptObfuscatorInternal.generateCode(this.sourceCode, astTree, this.options);
    }

    /**
     * @param url
     */
    public setSourceMapUrl (url: string): void {
        this.sourceMapUrl = url;
    }
}
