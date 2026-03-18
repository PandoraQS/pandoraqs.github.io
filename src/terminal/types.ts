export type OutputType = 'output' | 'error' | 'success' | 'info' | 'ascii' | 'link' | 'image';
 
export interface TerminalLine {
  id: string;
  type: OutputType;
  content: string;
  isHtml?: boolean;
}
 
export interface CommandResult {
  lines: TerminalLine[];
}
 
export type CommandFn = () => CommandResult;
export type CommandMap = Record<string, CommandFn>;