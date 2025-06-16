import { useEffect, useReducer } from "react";
import { ActionTypes, AnimalReducer } from "./reducers/animalReducer";
import { getAnimals } from "./services/animalsService";
import { AnimalsContext } from "./contexts/AnimalsContext";
import { RouterProvider } from "react-router";
import { router } from "./Routing";

export const ZooApp = () => {
  const [animals, dispatch] = useReducer(AnimalReducer, []);

  useEffect(() => {
    if (animals.length > 0) return;

    const getData = async () => {
      const animals = await getAnimals();

      dispatch({
        type: ActionTypes.FETCHED,
        payload: JSON.stringify(animals),
      });
    };
    getData();
  });
  return (
    <>
      <AnimalsContext value={{ animals, dispatch }}>
        <RouterProvider router={router} />
      </AnimalsContext>
    </>
  );
};
