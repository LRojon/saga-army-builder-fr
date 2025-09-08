// src/helpers/EventManager.ts

export type EventCallback = (...args: any[]) => void;

class EventManager {
  private static events: { [event: string]: EventCallback[] } = {};

  static on(event: string, callback: EventCallback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  static off(event: string, callback: EventCallback) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(cb => cb !== callback);
  }

  static emit(event: string, ...args: any[]) {
    if (!this.events[event]) return;
    this.events[event].forEach(cb => cb(...args));
  }

  static clear(event: string) {
    if (this.events[event]) {
      delete this.events[event];
    }
  }
}

export default EventManager;
