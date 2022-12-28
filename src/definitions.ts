export interface browserPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
