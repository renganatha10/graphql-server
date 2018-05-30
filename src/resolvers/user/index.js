import { createUser } from './mutations';
import { getAllUsers, getUserByIndex } from './queries';

const boards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15].map(item => ({
  id: item,
  name: `Board ${item}`,
}));

const getAllUserBoards = () => boards;

export default {
  Mutation: {
    createUser,
  },
  Board: {
    suggestions: (board, _, { suggestionLoader }) => suggestionLoader.load(board.id),
  },
  Query: {
    getAllUsers,
    myBoards: getAllUserBoards,
    currentUser: getUserByIndex,
  },
};
