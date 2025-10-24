import PokemonCard from "../components/PokemonCard/index";
import Form from "../components/CreatePost/index"
import Delete from '../components/PostList/index'
import Edit from '../components/EditPost/index'

export default async function Home() {

  return (
    <>
      <div>
        <PokemonCard pokemonId={1} />
        <Form/>
        <Delete/>
        <Edit/>
      </div>
    </>
  );
}
