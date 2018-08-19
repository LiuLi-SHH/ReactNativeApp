import { HOME_ADD, HOME_REDUCE } from "../Types/HomeType";

/*
 * action 创建函数
 */

export function addTodo() {
  return { type: HOME_ADD }
}

export function reduceTodo() {
  return { type: HOME_REDUCE}
}





