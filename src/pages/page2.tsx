import { useAppSelector } from "../hooks/storeHook";
import { selectCount } from "../store/reducers/mainReducer";

function Page2() {
  const count = useAppSelector(selectCount);

    return (
      <div>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p className="text-3xl font-bold underline text-red-600">
       This is page Two - { count }
      </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </div>
    );
  }
  
  export default Page2;
  