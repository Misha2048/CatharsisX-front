class PollingTool {
  private continuePolling = true;
  private intervalObject?: ReturnType<typeof setTimeout>;

  constructor(
    private interval: number,
    private callback: () => Promise<unknown>,
    private stopTrigger?: () => boolean,
  ) {
    this.interval = interval;
    this.callback = callback;
    if (stopTrigger) this.stopTrigger = stopTrigger;
  }

  async start() {
    try {
      await this.callback();
    } catch (error) {
      console.log(error);
      this.stop();
    }

    if (this.stopTrigger && this.stopTrigger()) return;

    if (this.continuePolling)
    this.intervalObject = setTimeout(this.start, this.interval * 1000);
  }

  stop() {
    this.continuePolling = false;
    if (this.intervalObject) clearTimeout(this.intervalObject);
  }

}

export default PollingTool;
