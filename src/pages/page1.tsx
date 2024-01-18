import { useAppDispatch, useAppSelector } from "../hooks/storeHook";
import { incrementByAmount, selectCount } from "../store/reducers/mainReducer";

function Page1() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p className="text-3xl font-bold underline text-red-600">
     This is page 1 - { count }
    </p>
    <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p className="text-3xl font-bold underline text-red-600">
     This is page 1 - { count }
    </p>
    <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p className="text-3xl font-bold underline text-red-600">
     This is page 1 - { count }
    </p><p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p className="text-3xl font-bold underline text-red-600">
     This is page 1 - { count }
    </p><p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p className="text-3xl font-bold underline text-red-600">
     This is page 1 - { count }
    </p><p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p className="text-3xl font-bold underline text-red-600">
     This is page 1 - { count }
    </p><p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p className="text-3xl font-bold underline text-red-600">
     This is page 1 - { count }
    </p><p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p className="text-3xl font-bold underline text-red-600">
     This is page 1 - { count }
    </p><p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p className="text-3xl font-bold underline text-red-600">
     This is page 1 - { count }
    </p>
    
        
       <h5 onClick={() => dispatch(incrementByAmount(23))}> Learn React </h5>
    </div>
  );
}

export default Page1;
