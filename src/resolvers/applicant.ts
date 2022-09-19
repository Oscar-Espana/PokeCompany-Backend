import { Applicant, Job } from "../database";
import axios from "axios";

enum ApplicantStatus {
  pending = "pending",
  hired = "hired",
}

interface ApplicantInput {
  fullName: string;
  email: string;
  phoneNumber: string;
  favoritePokemonId: number;
  description: string;
  jobId: string;
}

export const resolvers = {
  Query: {
    applicants: () => Applicant.findAll(),
    applicant: (_root: any, args: { id: string }) =>
      Applicant.findById(args.id),
  },

  Mutation: {
    applicantCreate: (_root: any, args: { applicant: ApplicantInput }) =>
      Applicant.create({ ...args.applicant, status: ApplicantStatus.pending }),
  },
  Applicant: {
    job: (root: { jobId: string }, _args: any) => {
      return Job.findById(root.jobId);
    },
    favoritePokemon: async (
      root: { favoritePokemonId: string },
      _args: any
    ) => {
      const resp = await axios.post(`https://beta.pokeapi.co/graphql/v1beta`, {
        query: `
          query GetPokemonById($pokemonId: Int!) {
            pokemon_v2_pokemon(where: {id: {_eq: $pokemonId}}) {
              name
              id
            }
          }    
        `,
        variables: {
          pokemonId: root.favoritePokemonId,
        },
      });
      const pokemon: { id: number; name: string }[] =
        resp.data.data.pokemon_v2_pokemon;
      return pokemon.length === 0
        ? null
        : {
            id: pokemon[0].id,
            name: pokemon[0].name,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon[0].id}.svg`,
          };
    },
  },
};
