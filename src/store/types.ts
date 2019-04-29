/**
 * types
 * @author guobin201314@gmail.com on 2019-04-28
 */
export interface RootStateTypes {
  author: string;
}

// actions 是异步操作
export declare type AuthorAction = (author: string) => Promise<any>;

// mutation是同步操作
export declare type AuthorMutation = (author: string) => void;
