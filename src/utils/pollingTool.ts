class PollingTool {
  private intervalObject?: ReturnType<typeof setInterval>;

  constructor(
    private callback: () => void,
    private interval: number,
    private stopTrigger?: () => boolean,
  ) {
    this.callback = callback;
    this.interval = interval;
    if (stopTrigger) this.stopTrigger = stopTrigger;
  }

  start() {
    this.intervalObject = setInterval(() => {
      if (this.stopTrigger && this.stopTrigger()) {
        return this.stop();
      }
      this.callback();
    }, this.interval);
  }

  stop() {
    if (this.intervalObject) clearInterval(this.intervalObject);
  }
}

export default PollingTool;
