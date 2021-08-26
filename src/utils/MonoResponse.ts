export class MonoResponse {
  constructor(
    private status: number,
    private message: string,
    private data: unknown[]
  ) {}
}
