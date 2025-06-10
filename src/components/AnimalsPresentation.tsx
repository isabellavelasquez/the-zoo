import { useContext } from "react"
import { AnimalsContext } from "../contexts/AnimalsContext"
import { AnimalsContainer } from "./styled/Containers"
import { AnimalCard } from "./AnimalCard"

export const AnimalsPresentation = () => {
    const { animals } = useContext(AnimalsContext)
    return <AnimalsContainer>
        {
            animals.map((a) => <AnimalCard key={a.id} animal={a}>
            </AnimalCard>)
        }
    </AnimalsContainer>
}