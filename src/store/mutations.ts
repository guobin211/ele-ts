/**
 * mutations
 * @author guobin201314@gmail.com on 2019-04-28
 */

import { RootStateTypes } from './types'
import { MutationTree } from 'vuex'

const mutations: MutationTree<RootStateTypes> = {
  SET_AUTHOR(state: RootStateTypes, data: string) {
    state.author = data;
  }
};

export default mutations
