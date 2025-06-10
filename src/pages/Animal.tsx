import { useContext } from "react";
import { AnimalsContext } from "../contexts/AnimalsContext";
import { useParams } from "react-router";
import { AnimalCard } from "../components/AnimalCard";

export const Animal = () => {

    const { animals } = useContext(AnimalsContext)
    const { id } = useParams();

    if(id) {
        const foundAnimal = animals.find((a) => a.id === +id)

        if(foundAnimal) {
            return<AnimalCard animal={foundAnimal}></AnimalCard>
        }

        return <>No animal found</>
    }
    
    return<>No id found</>
}