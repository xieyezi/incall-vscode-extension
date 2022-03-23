import * as vscode from 'vscode';
import { generateStatusBar } from './utils';
import generateNewIncallPackage from './comands/generate';

export function activate(context: vscode.ExtensionContext) {
	const { subscriptions } = context;
	generateStatusBar('incall-generate', 'incall:generate');
	const generate = vscode.commands.registerCommand('incall:generate', generateNewIncallPackage);
	subscriptions.push(generate);
}

// this method is called when your extension is deactivated
export function deactivate() {}
