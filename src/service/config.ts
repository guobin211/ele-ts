/**
 * config
 * @author guobin201314@gmail.com on 2019-04-28
 */

const isProd = process.env.NODE_ENV === 'production';

export const CONFIG = {
  host: isProd ? 'http://localhost:8000' : 'http://localhost:8080'
};
