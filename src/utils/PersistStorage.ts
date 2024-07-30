import { BehaviorSubject } from "rxjs";

class PersistStorage {
  keyName;
  observer;

  constructor(keyName: string, observer: BehaviorSubject<any>) {
    this.keyName = keyName;
    this.observer = observer;
  }

  init = () => {
    const lastDataString = localStorage.getItem(this.keyName);

    if (lastDataString) {
      this.observer.next(JSON.parse(lastDataString));
    }

    this.observer.subscribe((next) =>
      localStorage.setItem(this.keyName, JSON.stringify(next))
    );
  };
}

export default PersistStorage;
