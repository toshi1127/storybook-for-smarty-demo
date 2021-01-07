import hello from './hello.tpl'

export const createHello = () => {  
  return hello({ name: 'world' });
}
