import { Suggestions } from "../../components/ContainerSuggestions";

const SectionSuggestions = () => {
    const Click = () => {
        console.log("clique")
    }
    return (
        <Suggestions onClick={Click} teste="Similar films" />
    )
}
export { SectionSuggestions };