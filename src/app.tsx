import { useState } from 'preact/hooks';
import preactLogo from './assets/preact.svg';
import viteLogo from '/vite.svg';
import './app.css';

import { of } from 'rxjs';
import { map } from 'rxjs/operators';
/*
 *  'of' allows you to deliver values in a sequence
 *  In this case, it will emit 1,2,3,4,5 in order.
 */
const dataSource = of(1, 2, 3, 4, 5);

// subscribe to our source observable
const subscription = dataSource
  .pipe(
    // add 1 to each emitted value
    map((value) => value + 1)
  )
  // log: 2, 3, 4, 5, 6
  .subscribe((value) => console.log(value));

export function App(dataSource: any) {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(dataSource);

  const updateData = async (currentData: any) => setData(currentData);
  const getData = async (currentData: any) => {};
  return (
    <>
      <div class="card">
        <div className="message">
          <div className="message-heading">
            <h4>Message text</h4>
            <div className="time">13:00</div>
          </div>

          <p>Text</p>
          <div className="message-footer">
            <button>Send</button>
          </div>
        </div>
        <div className="message">
          <div className="message-heading">
            <h4>Title</h4>
            <div className="time">13:00</div>
          </div>

          <div className="message-footer">
            <button>Open</button>
          </div>
        </div>
      </div>
    </>
  );
}
