/**
 * getters
 * @author guobin201314@gmail.com on 2019-04-28
 */

import { RootStateTypes } from './types'
import { GetterTree } from 'vuex'

const getters: GetterTree<RootStateTypes, any> = {
  author: (state: RootStateTypes) => state.author
};

export default getters
